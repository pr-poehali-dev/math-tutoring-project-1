import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <Badge className="bg-blue-100 text-blue-800 px-3 py-2 text-sm">
              <Icon name="GraduationCap" size={14} className="mr-2" />
              Подготовка к ОГЭ по математике
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Математика через
              <span className="text-blue-600"> понимание</span>,
              а не зубрёжку
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Студент ДВФ с уникальной методикой: учим мыслить математически, 
              а не подставлять цифры в формулы. Результат — глубокое понимание предмета.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Icon name="Play" size={20} className="mr-2" />
                Записаться на пробное занятие
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Посмотреть программу
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start">
                <Icon name="Users" size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <span>8-12 человек в группе</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Icon name="Calendar" size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <span>59 занятий в году</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Icon name="Award" size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <span>Призы за результат</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/img/99db70c6-3f57-4b96-8d5b-39a1771cfea6.jpg" 
              alt="Математические концепции" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">90% материала</p>
                  <p className="text-sm text-gray-600">это программа 5-8 классов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection