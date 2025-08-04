// UNUSED HOOK - Kept for future reference
// This hook is currently not used in the application
// It was originally used by the sidebar component

/*
"use client"

import { useEffect, useState } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}
*/

// Placeholder export to prevent import errors
export function useIsMobile() {
  return false
}
