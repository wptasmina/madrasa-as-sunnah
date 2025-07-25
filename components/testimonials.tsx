"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, GraduationCap, Users, Award } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Abdul Karim Rahman",
      role: "Hifz Graduate",
      year: "2023",
      course: "Hifzul Quran",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "Alhamdulillah, I was able to memorize the complete Quran at Jamia Islamia Madrasa. The teachers are incredibly patient and caring. The environment here is truly Islamic and conducive to learning. I am forever grateful for the knowledge and character development I received here.",
      achievement: "Completed Hifz in 4 years"
    },
    {
      id: 2,
      name: "Fatima Khatun",
      role: "Alim Graduate",
      year: "2022",
      course: "Alim Course",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The quality of education at this madrasa is exceptional. Not only did I gain deep Islamic knowledge, but I also learned modern subjects that helped me in my career. The teachers here are not just educators but mentors who guide you in every aspect of life.",
      achievement: "Now teaching at a local Islamic school"
    },
    {
      id: 3,
      name: "Mohammad Rahim Uddin",
      role: "Parent",
      year: "2023",
      course: "Parent of Hifz Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "My son has been studying here for 3 years now. I am amazed by his character development and the Islamic values he has learned. The administration is very cooperative and keeps parents informed about their child's progress. Highly recommended!",
      achievement: "Son completed Nazera course with distinction"
    },
    {
      id: 4,
      name: "Ayesha Siddika",
      role: "Fazil Graduate",
      year: "2021",
      course: "Fazil Course",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "This madrasa has transformed my life completely. The comprehensive curriculum and dedicated teachers helped me become not just a knowledgeable Muslim woman, but also prepared me for higher studies. I'm now pursuing my Master's degree while teaching part-time.",
      achievement: "Pursuing MA in Islamic Studies"
    },
    {
      id: 5,
      name: "Haji Abdul Mannan",
      role: "Parent",
      year: "2023",
      course: "Parent of Multiple Students",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "Both my daughter and son study here. My daughter completed her Hifz and my son is in the Alim course. The environment, quality of education, and behavior of teachers are all commendable. The fees are also very reasonable compared to other institutions.",
      achievement: "Daughter is now a Hafeza, son excelling in Alim"
    },
    {
      id: 6,
      name: "Yusuf Ali Khan",
      role: "Kamil Graduate",
      year: "2020",
      course: "Kamil Course",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The advanced level courses here are truly world-class. The research methodology and thesis guidance I received helped me develop critical thinking skills. I'm now working as an Islamic researcher and frequently publish articles in Islamic journals.",
      achievement: "Published researcher and Islamic scholar"
    },
    {
      id: 7,
      name: "Khadija Begum",
      role: "Noorani Graduate",
      year: "2023",
      course: "Noorani Course",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "I started learning to read the Quran at age 45. The teachers were so patient and encouraging. They made learning enjoyable and never made me feel embarrassed about starting late. Now I can read the Quran fluently and teach my grandchildren too.",
      achievement: "Learning Quran at 45, now teaching grandchildren"
    },
    {
      id: 8,
      name: "Ibrahim Hassan",
      role: "Nazera Graduate",
      year: "2022",
      course: "Nazera Course",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The Tajweed classes here are exceptional. My recitation improved dramatically, and I gained confidence in leading prayers at my local mosque. The teachers focus on both pronunciation and understanding, which makes the learning experience complete.",
      achievement: "Now leads prayers at local mosque"
    },
    {
      id: 9,
      name: "Amina Rahman",
      role: "Parent & Graduate",
      year: "2021",
      course: "Adult Education Program",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "As a working mother, I appreciated the flexible evening classes. I completed my Islamic education while my children studied here during the day. It's wonderful to learn alongside your children and grow together in faith and knowledge.",
      achievement: "Completed Islamic education while working full-time"
    }
  ]

  const stats = [
    { icon: Users, label: "Happy Students", value: "500+" },
    { icon: GraduationCap, label: "Graduates", value: "1000+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Student Testimonials</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Hear from our students and parents about their transformative journey
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from students, graduates, and parents who have experienced our educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <Quote className="w-8 h-8 text-green-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-center leading-relaxed mb-6 italic flex-grow">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Achievement Badge */}
                  {testimonial.achievement && (
                    <div className="text-center mb-4">
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {testimonial.achievement}
                      </Badge>
                    </div>
                  )}

                  {/* Author Info */}
                  <div className="text-center mt-auto">
                    <div className="relative w-16 h-16 mx-auto mb-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover border-2 border-green-100"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{testimonial.role}</p>
                    <p className="text-green-600 text-sm font-medium mb-2">{testimonial.course}</p>
                    <Badge variant="outline">{testimonial.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
      
}