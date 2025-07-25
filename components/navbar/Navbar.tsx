"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  BookOpen,
  User,
  LogIn,
  ChevronDown,
} from "lucide-react";
import { DialogTitle } from "../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface NavbarProps {
  user?: {
    name: string;
    email: string;
    role: "student" | "teacher" | "admin" | "parent";
  } | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

interface SubmenuItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  badge?: string;
  submenu?: SubmenuItem[];
}

export default function Navbar({ user, onLoginClick, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Courses",
      href: "/courses",
      submenu: [
        { name: "Noorani Course", href: "/courses#noorani" },
        { name: "Nazera Course", href: "/courses#najera" },
        { name: "Hifzul Quran", href: "/courses#hifz" },
        { name: "Alim Course", href: "/courses#alim" },
        { name: "Fazil Course", href: "/courses#fazil" },
        { name: "Kamil Course", href: "/courses#kamil" },
      ],
    },
    { name: "Teachers", href: "/teachers" },
    { name: "Admission", href: "/admission", badge: "New" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const getRoleColor = (role: string) => {
    const colors = {
      student: "bg-blue-100 text-blue-800",
      teacher: "bg-green-100 text-green-800",
      admin: "bg-purple-100 text-purple-800",
      parent: "bg-orange-100 text-orange-800",
    };
    return colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getRoleText = (role: string) => {
    const roles = {
      student: "Student",
      teacher: "Teacher",
      admin: "Admin",
      parent: "Parent",
    };
    return roles[role as keyof typeof roles] || role;
  };

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
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3" />
                        {item.badge && (
                          <Badge className="ml-1 text-xs bg-red-500 text-white">
                            {item.badge}
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <VisuallyHidden>
                        <DialogTitle>{item.name}</DialogTitle>
                      </VisuallyHidden>
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
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge className="ml-1 text-xs bg-red-500 text-white">
                          {item.badge}
                        </Badge>
                      )}
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
                      <Badge className={`text-xs ${getRoleColor(user.role)}`}>
                        {getRoleText(user.role)}
                      </Badge>
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
                  <DropdownMenuItem asChild><Link href="/dashboard">Dashboard</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>

                  {user.role === "student" && (
                    <>
                      <DropdownMenuItem asChild><Link href="/results">Results</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/attendance">Attendance</Link></DropdownMenuItem>
                    </>
                  )}
                  {user.role === "teacher" && (
                    <>
                      <DropdownMenuItem asChild><Link href="/classes">Classes</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/students">Students</Link></DropdownMenuItem>
                    </>
                  )}
                  {user.role === "admin" && (
                    <>
                      <DropdownMenuItem asChild><Link href="/admin">Administration</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/reports">Reports</Link></DropdownMenuItem>
                    </>
                  )}

                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild><Link href="/settings">Settings</Link></DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLoginClick} className="bg-green-600 hover:bg-green-700">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between border-b py-3 px-3">
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
                    <div className="py-4 border-b px-3">
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
                  <div className="flex-1 py-4 space-y-2 px-3">
                    {navigationItems.map((item, index) => (
                      <div key={index}>
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="text-gray-800">{item.name}</span>
                          {item.badge && <Badge className="ml-auto text-xs bg-red-500 text-white">{item.badge}</Badge>}
                        </Link>
                        {item.submenu && (
                          <div className="ml-6 mt-1 space-y-1">
                            {item.submenu.map((sub, subIndex) => (
                              <Link key={subIndex} href={sub.href} onClick={() => setIsOpen(false)} className="block text-sm text-gray-600 hover:text-green-600">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile Login/Logout */}
                  <div className="px-3 pt-4 border-t">
                    {user ? (
                      <Button onClick={() => { onLogout(); setIsOpen(false); }} variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">Logout</Button>
                    ) : (
                      <Button onClick={() => { onLoginClick(); setIsOpen(false); }} className="w-full bg-green-600 hover:bg-green-700">
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
  );
}
