import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ContactSection = () => {

  return (
    <section id="contact" className="py-16 px-4 bg-blue-600">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Записаться на занятие</h2>
          <p className="text-lg text-blue-100">
            Заполните форму, и я свяжусь с вами в течение дня
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Форма записи</CardTitle>
            <CardDescription>
              Пробное занятие позволит оценить методику и уровень ученика
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="min-h-[400px] p-4">
              <div id="bitrix24-form-container"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ContactSection