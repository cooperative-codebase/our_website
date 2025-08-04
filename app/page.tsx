"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactFormReusable } from "@/components/ContactFormReusable"
import { ArrowRight, CheckCircle, Users, Code, Globe, Shield, Zap } from "lucide-react"


export default function CooperativeCodebasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] pointer-events-none" />

      {/* Floating Glass Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl animate-pulse delay-2000" />

      {/* Navigation */}
      <nav className="relative z-10 py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-2">
            <Image
              src="/images/logo.png"
              alt="Cooperative Codebase Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-2xl bg-black/50 border border-white/20 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl" />
            <div className="relative z-10">
              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Cooperative Codebase
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
                Empowering and growing the cooperative ecosystem in New Orleans

              </p>
              
              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-blue-400/50 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We specialize in creating custom software solutions that empower community organizations and cooperatives.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cooperative Management Systems */}
            <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-400/30 transition-all duration-500 group hover:bg-black/40">
              <div className="backdrop-blur-md bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 group-hover:shadow-blue-500/50 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors">Cooperative Management Systems</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors mb-4">
                Custom software for member management, democratic decision-making, and resource allocation

              </p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Member portals and voting systems</li>
                <li>• Financial transparency tools</li>
                <li>• Resource sharing platforms</li>
              </ul>
            </div>
            {/* Political Organization Tools */}
            <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/25 hover:border-purple-400/30 transition-all duration-500 group hover:bg-black/40">
              <div className="backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/30 group-hover:border-purple-400/50 group-hover:shadow-purple-500/50 transition-all duration-300">
                <Globe className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />

              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-100 transition-colors">Political Organization Tools</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors mb-4">
                Technology solutions for grassroots organizing, campaign management, and community engagement
              </p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Volunteer coordination systems</li>
                <li>• Event management platforms</li>
                <li>• Community outreach tools</li>
              </ul>
            </div>
            {/* Consulting & Strategy */}
            <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:shadow-green-500/25 hover:border-green-400/30 transition-all duration-500 group hover:bg-black/40">
              <div className="backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/30 group-hover:border-green-400/50 group-hover:shadow-green-500/50 transition-all duration-300">
                <Code className="w-8 h-8 text-green-400 group-hover:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-100 transition-colors">Consulting & Strategy</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors mb-4">
                Strategic guidance for digital transformation and cooperative development
              </p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Technology roadmap planning</li>
                <li>• Cooperative formation support</li>
                <li>• Digital literacy training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  About Us
                </h2>

              </div>

              <div className="max-w-4xl mx-auto">
                <div>
                  <p className="text-slate-300 mb-6 text-center">
                    We believe that technology should serve communities, not the other way around. Our team works closely with cooperatives, nonprofits, and community organizations to create software solutions that strengthen their impact and efficiency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="backdrop-blur-md bg-blue-500/10 border border-blue-400/20 rounded-xl p-6 hover:bg-blue-500/15 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">Grow Coop Ecosystem</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">Expanding and strengthening the cooperative network throughout New Orleans</p>
                    </div>
                    <div className="backdrop-blur-md bg-purple-500/10 border border-purple-400/20 rounded-xl p-6 hover:bg-purple-500/15 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-purple-300 mb-3">Advance Coop Economy</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">Promoting economic models that prioritize community ownership and democratic control</p>
                    </div>
                    <div className="backdrop-blur-md bg-green-500/10 border border-green-400/20 rounded-xl p-6 hover:bg-green-500/15 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-green-300 mb-3">Fair Distribution</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">Ensuring equitable access to products, services, and opportunities for all</p>
                    </div>
                    <div className="backdrop-blur-md bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-6 hover:bg-cyan-500/15 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-cyan-300 mb-3">Software Solutions</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">Building custom technology for cooperatives and political organizations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden hover:shadow-blue-500/25 hover:border-blue-400/30 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-xl text-slate-300">
                  Ready to build something amazing together? Tell us about your
                  project.
                </p>
              </div>

              <ContactFormReusable />

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="mb-4">
              <div className="backdrop-blur-md bg-black/30 border border-blue-400/30 rounded-xl p-3 inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Cooperative Codebase Logo"
                  width={200}
                  height={80}
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Building technology for community empowerment in New Orleans
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Cooperative Codebase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
