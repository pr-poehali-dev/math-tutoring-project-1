import React from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TeacherSection from '@/components/TeacherSection'
import ProgramSection from '@/components/ProgramSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TeacherSection />
      <ProgramSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Index