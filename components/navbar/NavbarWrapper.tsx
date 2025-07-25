"use client"

import { useState } from "react"
import Navbar from "./Navbar"
import LoginModal from "./LoginModal"

export default function NavbarWrapper() {
  const [user, setUser] = useState<{
    name: string
    email: string
    role: "student" | "teacher" | "admin" | "parent"
  } | null>(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const handleLogin = (userData: {
    name: string
    email: string
    role: "student" | "teacher" | "admin" | "parent"
  }) => {
    setUser(userData)
    setIsLoginModalOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  return (
    <>
      <Navbar user={user} onLoginClick={handleLoginClick} onLogout={handleLogout} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />
    </>
  )
}
