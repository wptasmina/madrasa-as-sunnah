"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, User, Lock, AlertCircle, CheckCircle } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (user: {
    name: string
    email: string
    role: "student" | "teacher" | "admin" | "parent"
  }) => void
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
    rememberMe: false,
  })

  // Registration form state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    studentId: "",
    teacherId: "",
    agreeTerms: false,
  })

  // Forgot password state
  const [forgotEmail, setForgotEmail] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Demo validation
    if (loginData.email === "admin@madrasa.edu.bd" && loginData.password === "admin123") {
      onLogin({
        name: "Administrator",
        email: loginData.email,
        role: "admin",
      })
      onClose()
    } else if (loginData.email === "student@madrasa.edu.bd" && loginData.password === "student123") {
      onLogin({
        name: "Abdul Karim",
        email: loginData.email,
        role: "student",
      })
      onClose()
    } else if (loginData.email === "teacher@madrasa.edu.bd" && loginData.password === "teacher123") {
      onLogin({
        name: "Maulana Rahim",
        email: loginData.email,
        role: "teacher",
      })
      onClose()
    } else {
      setError("Incorrect email or password. Please try again.")
    }

    setIsLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!registerData.agreeTerms) {
      setError("Please accept the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSuccess("Registration successful! Please login.")
    setActiveTab("login")
    setIsLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSuccess("Password reset link has been sent to your email.")
    setIsLoading(false)
  }

  const resetForm = () => {
    setLoginData({ email: "", password: "", role: "", rememberMe: false })
    setRegisterData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "",
      studentId: "",
      teacherId: "",
      agreeTerms: false,
    })
    setForgotEmail("")
    setError("")
    setSuccess("")
    setActiveTab("login")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-800">Madrasa as sunnah</DialogTitle>
        </DialogHeader>

        {error && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">{success}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="forgot">Forgot Password</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Login
                </CardTitle>
                <CardDescription>Access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email *</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="login-password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="Enter password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="login-role">Role *</Label>
                    <Select
                      value={loginData.role}
                      onValueChange={(value) => setLoginData({ ...loginData, role: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={loginData.rememberMe}
                      onCheckedChange={(checked) => setLoginData({ ...loginData, rememberMe: checked as boolean })}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>

                {/* Demo Credentials */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">Demo Accounts:</p>
                  <div className="text-xs space-y-1">
                    <p>
                      <strong>Admin:</strong> admin@madrasa.edu.bd / admin123
                    </p>
                    <p>
                      <strong>Student:</strong> student@madrasa.edu.bd / student123
                    </p>
                    <p>
                      <strong>Teacher:</strong> teacher@madrasa.edu.bd / teacher123
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  New Account
                </CardTitle>
                <CardDescription>Create new account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">Full Name *</Label>
                    <Input
                      id="register-name"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-email">Email *</Label>
                    <Input
                      id="register-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-phone">Mobile Number *</Label>
                    <Input
                      id="register-phone"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      placeholder="+880-1711-123456"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-role">Role *</Label>
                    <Select
                      value={registerData.role}
                      onValueChange={(value) => setRegisterData({ ...registerData, role: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {registerData.role === "student" && (
                    <div>
                      <Label htmlFor="student-id">Student ID</Label>
                      <Input
                        id="student-id"
                        value={registerData.studentId}
                        onChange={(e) => setRegisterData({ ...registerData, studentId: e.target.value })}
                        placeholder="Your student ID"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="register-password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        placeholder="Create password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="confirm-password">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        placeholder="Confirm password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agree-terms"
                      checked={registerData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setRegisterData({ ...registerData, agreeTerms: checked as boolean })
                      }
                    />
                    <Label htmlFor="agree-terms" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <a href="/terms" className="text-green-600 hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forgot Password Tab */}
          <TabsContent value="forgot">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Password Reset
                </CardTitle>
                <CardDescription>Enter your email address</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div>
                    <Label htmlFor="forgot-email">Email Address *</Label>
                    <Input
                      id="forgot-email"
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>

                <div className="mt-4 text-center">
                  <Button variant="link" onClick={() => setActiveTab("login")} className="text-sm text-green-600">
                    Back to Login
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
