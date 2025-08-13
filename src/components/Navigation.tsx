import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Icon from '@/components/ui/icon'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold text-blue-600">МатемАтика ОГЭ</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О занятиях</a>
          <a href="#teacher" className="text-gray-700 hover:text-blue-600 transition-colors">Преподаватель</a>
          <a href="#program" className="text-gray-700 hover:text-blue-600 transition-colors">Программа</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Записаться</a>
        </div>
        
        {/* Desktop CTA Button */}
        <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
          Записаться на пробное занятие
        </Button>
        
        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <div className="flex flex-col space-y-6 pt-6">
              <h2 className="text-lg font-semibold text-gray-900">Меню</h2>
              <div className="flex flex-col space-y-4">
                <a 
                  href="#about" 
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О занятиях
                </a>
                <a 
                  href="#teacher" 
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Преподаватель
                </a>
                <a 
                  href="#program" 
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Программа
                </a>
                <a 
                  href="#contact" 
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Записаться
                </a>
              </div>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 w-full mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на занятие
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navigation