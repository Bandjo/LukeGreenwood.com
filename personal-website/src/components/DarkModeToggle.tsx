'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className="fixed bottom-4 right-4 bg-earthy-brown text-neutral-cream px-4 py-2 rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}
