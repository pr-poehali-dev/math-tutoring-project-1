import React from 'react'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const TeacherSection = () => {
  return (
    <section id="teacher" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/img/ca9f7299-adf8-4edd-84c9-c0439b07f90e.jpg" 
              alt="Преподаватель математики" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <Badge className="bg-indigo-100 text-indigo-800">
              <Icon name="Star" size={16} className="mr-2" />
              Преподаватель-энтузиаст
            </Badge>
            
            <h2 className="text-3xl font-bold text-gray-900">
              Репетитор, который влюбляет в математику
            </h2>
            
            <p className="text-lg text-gray-600">
              Студент Дальневосточного Федерального Университета с passion к обучению. 
              Веду группы по подготовке к ОГЭ уже несколько лет.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Уникальная методика</h4>
                  <p className="text-gray-600">Фокус на понимании, а не на заучивании формул</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Практический подход</h4>
                  <p className="text-gray-600">Показываю, где математика применяется в жизни</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Индивидуальный подход</h4>
                  <p className="text-gray-600">Группы формируются по уровню знаний</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherSection