import { ContactFormReusable } from "@/components/ContactFormReusable"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <ContactFormReusable />
        </div>
      </div>
    </div>
  )
} 