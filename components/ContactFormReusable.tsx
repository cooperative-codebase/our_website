"use client"

import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Contact form validation schema
const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  description: z.string().min(1, "Project description is required").min(10, "Description must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormReusableProps {
  className?: string
  onSuccess?: (data: ContactFormData) => void
  onError?: (error: any) => void
}

// Phone format validation and conversion
function validateAndFormatPhone(phone: string): { isValid: boolean; formatted: string; error?: string } {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Check if it starts with +1 (US format)
  if (cleaned.startsWith('+1') && cleaned.length === 12) {
    return { isValid: true, formatted: cleaned }
  }
  
  // Check if it's a 10-digit US number (add +1)
  if (/^\d{10}$/.test(cleaned)) {
    return { isValid: true, formatted: `+1${cleaned}` }
  }
  
  // Check if it's already in international format
  if (cleaned.startsWith('+') && cleaned.length >= 11) {
    return { isValid: true, formatted: cleaned }
  }
  
  return { 
    isValid: false, 
    formatted: cleaned,
    error: "Please enter a valid phone number (e.g. +12125552368 or 2125552368)" 
  }
}

// Internal dual-format submission with automatic retry
async function submitWithFallback(
  data: ContactFormData
): Promise<{ success: boolean; response: any; error?: string; formatUsed?: string }> {
  // Validate and format phone number
  const phoneValidation = validateAndFormatPhone(data.phone)
  if (!phoneValidation.isValid) {
    return { 
      success: false, 
      response: null, 
      error: phoneValidation.error 
    }
  }

  const formattedData = {
    ...data,
    phone: phoneValidation.formatted
  }

  // First attempt: JSON format
  try {
    console.log("🔄 Attempting JSON submission...")
    const jsonResponse = await fetch("https://solidarityecono.my/marketing/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    })

    const jsonData = await jsonResponse.json()

    if (jsonResponse.ok) {
      console.log("✅ JSON submission successful")
      return { success: true, response: jsonData, formatUsed: "JSON" }
    }

    // If JSON failed, try form-encoded
    console.log("❌ JSON failed, trying form-encoded...")
    const params = new URLSearchParams()
    params.append('email', formattedData.email)
    params.append('phone', formattedData.phone)
    params.append('description', formattedData.description)
    
    const formResponse = await fetch("https://solidarityecono.my/marketing/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    const formData = await formResponse.json()

    if (formResponse.ok) {
      console.log("✅ Form-encoded submission successful")
      return { success: true, response: formData, formatUsed: "form-encoded" }
    }

    // Both attempts failed
    console.log("❌ Both JSON and form-encoded failed")
    return { 
      success: false, 
      response: formData, 
      error: "Failed to send message. Please try again." 
    }

  } catch (err) {
    console.log("❌ Network error during submission")
    return { 
      success: false, 
      response: null, 
      error: err instanceof Error ? err.message : "Network error" 
    }
  }
}

export function ContactFormReusable({ className, onSuccess, onError }: ContactFormReusableProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      phone: "",
      description: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    const result = await submitWithFallback(data)

    if (result.success) {
      setSuccess(true)
      form.reset()
      onSuccess?.(data)
      console.log(`🎉 Form submitted successfully using ${result.formatUsed} format`)
    } else {
      setError(result.error || 'An error occurred')
      onError?.(result.error)
    }

    setIsSubmitting(false)
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-green-400 font-medium mb-2">
          Message sent successfully!
        </div>
        <p className="text-slate-300">
          Thank you for your message. We'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 max-w-2xl mx-auto ${className || ""}`}>
        {error && (
          <div className="p-3 text-sm text-red-400 bg-red-900/20 border border-red-400/20 rounded-xl">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full backdrop-blur-md bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+12125552368 or (212) 555-2368"
                    className="w-full backdrop-blur-md bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-slate-400 mt-1">
                  Will be automatically formatted to international format
                </p>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-slate-300 mb-2">
                Project Description
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your cooperative, organization, or project. What kind of software solution are you looking for?"
                  className="w-full backdrop-blur-md bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-blue-400/50 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </Form>
  )
} 