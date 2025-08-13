import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const FeaturesSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Что особенного в моих занятиях</h2>
          <p className="text-lg text-gray-600">Уникальная методика, проверенная практикой</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Brain" size={32} className="text-blue-600 mb-4" />
              <CardTitle>Понимание, не зубрёжка</CardTitle>
              <CardDescription>
                Учим мыслить математически и строить взаимосвязи между темами
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Calendar" size={32} className="text-blue-600 mb-4" />
              <CardTitle>Прозрачная программа</CardTitle>
              <CardDescription>
                Ученики и родители знают программу курса на год вперёд
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Gift" size={32} className="text-blue-600 mb-4" />
              <CardTitle>Бесплатные бонусы</CardTitle>
              <CardDescription>
                Дополнительные занятия о практическом применении математики
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="User" size={32} className="text-blue-600 mb-4" />
              <CardTitle>Личный кабинет</CardTitle>
              <CardDescription>
                ДЗ с автопроверкой, конспекты, видео уроков и статистика прогресса
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="MessageCircle" size={32} className="text-blue-600 mb-4" />
              <CardTitle>Поддержка 24/7</CardTitle>
              <CardDescription>
                Вопросы можно задать в группе или напрямую в любое время
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Trophy" size={32} className="text-blue-600 mb-4" />
              <CardTitle>Ценные призы</CardTitle>
              <CardDescription>
                Награды за хорошую сдачу экзамена и активность в обучении
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection