import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Teachers", href: "/teachers" },
    { name: "Admission", href: "/admission" },
    { name: "Contact", href: "/contact" },
  ]

  const courses = [
    { name: "Noorani Course", href: "/courses#noorani" },
    { name: "Nazera Course", href: "/courses#najera" },
    { name: "Hifzul Quran", href: "/courses#hifz" },
    { name: "Alim Course", href: "/courses#alim" },
    { name: "Fazil Course", href: "/courses#fazil" },
    { name: "Kamil Course", href: "/courses#kamil" },
  ]

  const importantLinks = [
    { name: "Admission Guide", href: "/admission-guide" },
    { name: "Fee Structure", href: "/fee-structure" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Exam Results", href: "/results" },
    { name: "Notice Board", href: "/notices" },
    { name: "Downloads", href: "/downloads" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jamiaislamic", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/jamiaislamic", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/jamiaislamic", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Madrasa as sunnah</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dedicated to providing quality Islamic education since 2003. Our goal is to create ideal Muslims in the
              light of the Quran and Sunnah.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-sm">123 Madrasa Road, Dhaka-1207</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-sm">+880-1711-123456</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-sm">info@jamiaislamic.edu.bd</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-sm">Sun-Thu 9:00-5:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link href={course.href} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4 text-green-400">Newsletter Subscription</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get our latest news and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
              <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-green-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-full transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-gray-400 text-xs">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">25+</div>
                <div className="text-gray-400 text-xs">Teachers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">20+</div>
                <div className="text-gray-400 text-xs">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Jamia Islamia Madrasa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
