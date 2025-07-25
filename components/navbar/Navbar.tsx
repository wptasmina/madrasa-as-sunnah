"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  BookOpen,
  Users,
  GraduationCap,
  Phone,
  User,
  LogIn,
  ChevronDown,
  Home,
  Info,
  MessageSquare,
} from "lucide-react"

interface NavbarProps {
  user?: {
    name: string
    email: string
    role: "student" | "teacher" | "admin" | "parent"
  } | null
  onLoginClick: () => void
  onLogout: () => void
}

export default function Navbar({ user, onLoginClick, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      // icon: Home,
    },
    {
      name: "About Us",
      href: "/about",
      // icon: Info,
    },
    {
      name: "Courses",
      href: "/courses",
      // icon: BookOpen,
      submenu: [
        { name: "Noorani Course", href: "/courses#noorani" },
        { name: "Nazera Course", href: "/courses#najera" },
        { name: "Hifzul Quran", href: "/courses#hifz" },
        { name: "Alim Course", href: "/courses#alim" },
        { name: "Fazil Course", href: "/courses#fazil" },
        { name: "Kamil Course", href: "/courses#kamil" },
      ],
    },
    {
      name: "Teachers",
      href: "/teachers",
      // icon: Users,
    },
    {
      name: "Admission",
      href: "/admission",
      // icon: GraduationCap,
      badge: "New",
    },
    {
      name: "FAQ",
      href: "/faq",
      // icon: MessageSquare,
    },
    {
      name: "Testimonials",
      href: "/testimonials",
      // icon: MessageSquare,
    },
    {
      name: "Contact",
      href: "/contact",
      // icon: Phone,
    },
  ]

  const getRoleColor = (role: string) => {
    const colors = {
      student: "bg-blue-100 text-blue-800",
      teacher: "bg-green-100 text-green-800",
      admin: "bg-purple-100 text-purple-800",
      parent: "bg-orange-100 text-orange-800",
    }
    return colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getRoleText = (role: string) => {
    const roles = {
      student: "Student",
      teacher: "Teacher",
      admin: "Admin",
      parent: "Parent",
    }
    return roles[role as keyof typeof roles] || role
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">As Sunnah</h1>
              <p className="text-xs text-gray-600">Madrasa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-1">
                        {/* <item.icon className="w-4 h-4" /> */}
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3" />
                        {item.badge && <Badge className="ml-1 text-xs bg-red-500 text-white">{item.badge}</Badge>}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link href={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button variant="ghost" asChild className="flex items-center space-x-1">
                    <Link href={item.href}>
                      {/* <item.icon className="w-4 h-4" /> */}
                      <span>{item.name}</span>
                      {item.badge && <Badge className="ml-1 text-xs bg-red-500 text-white">{item.badge}</Badge>}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* User Menu / Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <div className="bg-green-100 p-1 rounded-full">
                      <User className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium">{user.name}</div>
                      <Badge className={`text-xs ${getRoleColor(user.role)}`}>{getRoleText(user.role)}</Badge>
                    </div>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="w-full">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  {user.role === "student" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/results" className="w-full">
                          Results
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/attendance" className="w-full">
                          Attendance
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {user.role === "teacher" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/classes" className="w-full">
                          Classes
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/students" className="w-full">
                          Students
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {user.role === "admin" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="w-full">
                          Administration
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/reports" className="w-full">
                          Reports
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLoginClick} className="bg-green-600 hover:bg-green-700">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-4 border-b py-2 pl-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-600 text-white p-2 rounded-lg">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-800">As Sunnah</h2>
                        <p className="text-xs text-gray-600">Madrasa</p>
                      </div>
                    </div>
                  </div>

                  {/* User Info (Mobile) */}
                  {user && (
                    <div className="py-4 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <User className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <Badge className={`text-xs ${getRoleColor(user.role)}`}>{getRoleText(user.role)}</Badge>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-4">
                    <div className="space-y-2">
                      {navigationItems.map((item, index) => (
                        <div key={index}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            {/* <item.icon className="w-5 h-5 text-gray-600" /> */}
                            <span className="text-gray-800">{item.name}</span>
                            {item.badge && (
                              <Badge className="ml-auto text-xs bg-red-500 text-white">{item.badge}</Badge>
                            )}
                          </Link>
                          {item.submenu && (
                            <div className="ml-8 mt-2 space-y-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* User Menu Items (Mobile) */}
                    {user && (
                      <div className="mt-6 pt-4 border-t space-y-2">
                        <Link
                          href="/dashboard"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <User className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-800">Dashboard</span>
                        </Link>
                        <Link
                          href="/profile"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <User className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-800">Profile</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Login/Logout */}
                  <div className="pt-4 border-t">
                    {user ? (
                      <Button
                        onClick={() => {
                          onLogout()
                          setIsOpen(false)
                        }}
                        variant="outline"
                        className="w-full text-red-600 border-red-200 hover:bg-red-50"
                      >
                        Logout
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          onLoginClick()
                          setIsOpen(false)
                        }}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
