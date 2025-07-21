import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Users,
  Heart,
  Zap,
  MapPin,
  Handshake,
  Building2,
  Lightbulb,
  Network,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import TempButton from "@/components/ui/temp-button";

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

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Glass Container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="backdrop-blur-md bg-black/20 border border-blue-500/30 rounded-2xl p-4 shadow-xl">
                  <Image
                    src="/images/logo.png"
                    alt="Cooperative Codebase Logo"
                    width={300}
                    height={120}
                    className="h-20 w-auto"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                Cooperative Codebase
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto font-light">
                Building software solutions and growing the cooperative
                ecosystem in New Orleans
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="backdrop-blur-md bg-black/30 border border-blue-500/50 text-blue-300 px-6 py-3 text-sm hover:bg-black/40 transition-all duration-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  New Orleans, LA
                </Badge>
                <Badge className="backdrop-blur-md bg-black/30 border border-cyan-500/50 text-cyan-300 px-6 py-3 text-sm hover:bg-black/40 transition-all duration-300">
                  <Code className="w-4 h-4 mr-2" />
                  Software Development
                </Badge>
                <Badge className="backdrop-blur-md bg-black/30 border border-purple-500/50 text-purple-300 px-6 py-3 text-sm hover:bg-black/40 transition-all duration-300">
                  <Users className="w-4 h-4 mr-2" />
                  Cooperative Movement
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 inline-block shadow-2xl">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-xl text-slate-300 max-w3xl">
                We are a New Orleans-based cooperative dedicated to advancing
                the cooperative economy through technology and community
                building.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-blue-400">
                    Our Story
                  </h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Born in the vibrant city of New Orleans, Cooperative Codebase
                  emerged from a vision to harness technology for community
                  empowerment. We believe that cooperative principles and
                  cutting-edge software can work together to create a more
                  equitable economy.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Our team combines deep technical expertise with a passion for
                  social justice, working alongside cooperatives and political
                  organizations to build tools that truly serve their
                  communities.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                <div className="relative z-10 text-center">
                  <div className="backdrop-blur-md bg-black/30 border border-cyan-400/50 rounded-2xl p-4 inline-block mb-4">
                    <Network className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Connected Community
                  </h4>
                  <p className="text-blue-100">
                    Building networks that strengthen the cooperative ecosystem
                    across NOLA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 inline-block shadow-2xl">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl">
                We are committed to four core pillars that drive everything we
                do
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-xl bg-black/30 border border-blue-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <div className="backdrop-blur-md bg-black/40 border border-blue-400/50 rounded-xl p-3 inline-block mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Grow Coop Ecosystem
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Expanding and strengthening the cooperative network throughout
                  New Orleans
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <div className="backdrop-blur-md bg-black/40 border border-cyan-400/50 rounded-xl p-3 inline-block mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Advance Coop Economy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Promoting economic models that prioritize community ownership
                  and democratic control
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-purple-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <div className="backdrop-blur-md bg-black/40 border border-purple-400/50 rounded-xl p-3 inline-block mb-4">
                  <Heart className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Fair Distribution
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ensuring equitable access to products, services, and
                  opportunities for all
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/30 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <div className="backdrop-blur-md bg-black/40 border border-emerald-400/50 rounded-xl p-3 inline-block mb-4">
                  <Code className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Software Solutions
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Building custom technology for cooperatives and political
                  organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 inline-block shadow-2xl">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl">
                Comprehensive technology solutions designed specifically for
                cooperatives and community organizations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="backdrop-blur-md bg-black/50 border border-blue-400/50 rounded-2xl p-4 inline-block mb-6">
                  <Building2 className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Cooperative Management Systems
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Custom software for member management, democratic
                  decision-making, and resource allocation
                </p>
                <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-4">
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-blue-400" /> Member
                      portals and voting systems
                    </li>
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-blue-400" /> Financial
                      transparency tools
                    </li>
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-blue-400" /> Resource
                      sharing platforms
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="backdrop-blur-md bg-black/50 border border-cyan-400/50 rounded-2xl p-4 inline-block mb-6">
                  <Handshake className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Political Organization Tools
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Technology solutions for grassroots organizing, campaign
                  management, and community engagement
                </p>
                <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-4">
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-cyan-400" /> Volunteer
                      coordination systems
                    </li>
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-cyan-400" /> Event
                      management platforms
                    </li>
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-cyan-400" /> Community
                      outreach tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="backdrop-blur-md bg-black/50 border border-purple-400/50 rounded-2xl p-4 inline-block mb-6">
                  <Lightbulb className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Consulting & Strategy
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Strategic guidance for digital transformation and cooperative
                  development
                </p>
                <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-4">
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-purple-400" />{" "}
                      Technology roadmap planning
                    </li>
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-purple-400" />{" "}
                      Cooperative formation support
                    </li>
                    <li className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-purple-400" /> Digital
                      literacy training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl" />
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

              <form className="space-y-6 max-w-2xl mx-auto">
                {/* <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full backdrop-blur-md bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full backdrop-blur-md bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="(504) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    className="w-full backdrop-blur-md bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your cooperative, organization, or project. What kind of software solution are you looking for?"
                  />
                </div> */}

                <div className="text-center">
                  <TempButton></TempButton>
                  {/* <Button
                    type="submit"
                    size="lg"
                    className="backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-blue-400/50 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                </div>
              </form>
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
