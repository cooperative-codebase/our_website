"use client";

import { ArrowRight } from "lucide-react";

export default function TempButton() {
  return (
    <a href="mailto:hello@cooperativecodebase.com">
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-blue-400/50 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "mailto:hello@cooperativecodebase.com";
        }}
        type="submit"
      >
        Send Message
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </a>
  );
}
