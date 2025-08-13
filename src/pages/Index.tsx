import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const curriculum = [
    { id: 1, title: "Обыкновенные дроби", type: "Алгебра" },
    { id: 2, title: "Десятичные дроби ч.1", type: "Алгебра" },
    { id: 3, title: "Десятичные дроби ч.2", type: "Алгебра" },
    { id: 4, title: "Проценты", type: "Алгебра" },
    { id: 5, title: "Среднее арифметическое", type: "Алгебра" },
    { id: 6, title: "Отрицательные числа", type: "Алгебра" },
    { id: 7, title: "Работа с переменными", type: "Алгебра" },
    { id: 8, title: "Решение уравнений", type: "Алгебра" },
    { id: 9, title: "Решение задач с помощью уравнений", type: "Алгебра" },
    { id: 10, title: "Решение задач на проценты из второй части", type: "Алгебра" },
    { id: 11, title: "Решение задач на движение из второй части", type: "Алгебра" },
    { id: 12, title: "Смежные и вертикальные углы", type: "Геометрия" },
    { id: 13, title: "Треугольники", type: "Геометрия" },
    { id: 14, title: "Равнобедренный треугольник и его свойства", type: "Геометрия" },
    { id: 15, title: "Линейная функция", type: "Алгебра" },
    { id: 16, title: "Степень", type: "Алгебра" },
    { id: 17, title: "Многочлены", type: "Алгебра" },
    { id: 18, title: "ФСУ", type: "Алгебра" },
    { id: 19, title: "Параллельные прямые и углы при параллельных прямых", type: "Геометрия" },
    { id: 20, title: "Теорема о сумме углов треугольника", type: "Геометрия" }
  ]

  const bonusLessons = [
    "Как на пальцах считать до 1000",
    "Как мошенники используют теорию вероятностей",
    "Комбинация карт или сколько секунд осталось до смерти",
    "Какая вероятность выиграть в лотерею",
    "Почему минус на минус дает плюс?",
    "Теорема синусов и косинусов",
    "Парадокс дней рождений",
    "Математические модели в биологии",
    "Задача Монти Холла",
    "Числа Фибоначчи и золотое сечение"
  ]

  const faqData = [
    {
      question: "Подходят ли занятия для 8 класса?",
      answer: "Да! Мои занятия отлично подойдут ученикам 8 класса, так как 90% материала ОГЭ — это программа 5-8 классов."
    },
    {
      question: "Сколько человек в группе?",
      answer: "В группе занимается 8-12 человек. Группы формируются из учеников с одинаковым уровнем знаний."
    },
    {
      question: "Что включает личный кабинет?",
      answer: "В личном кабинете: домашние задания с автоматической проверкой, прогресс выполнения, авторские конспекты занятий и видео-записи уроков."
    },
    {
      question: "Чем отличается ваша методика?",
      answer: "Я учу понимать математику и строить взаимосвязи, а не просто запоминать формулы. Мои ученики учатся мыслить математически."
    },
    {
      question: "Есть ли поддержка вне занятий?",
      answer: "Да! Ученики могут задать вопрос в группе или написать напрямую. Я или мой помощник всегда ответим."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">МатемАтика ОГЭ</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О занятиях</a>
            <a href="#teacher" className="text-gray-700 hover:text-blue-600 transition-colors">Преподаватель</a>
            <a href="#program" className="text-gray-700 hover:text-blue-600 transition-colors">Программа</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Записаться</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Записаться на пробное занятие
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                <Icon name="GraduationCap" size={16} className="mr-2" />
                Подготовка к ОГЭ по математике
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Математика через
                <span className="text-blue-600"> понимание</span>,
                а не зубрёжку
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Студент ДВФ с уникальной методикой: учим мыслить математически, 
                а не подставлять цифры в формулы. Результат — глубокое понимание предмета.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Записаться на пробное занятие
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Посмотреть программу
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Users" size={16} className="mr-2 text-blue-600" />
                  8-12 человек в группе
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" size={16} className="mr-2 text-blue-600" />
                  59 занятий в году
                </div>
                <div className="flex items-center">
                  <Icon name="Award" size={16} className="mr-2 text-blue-600" />
                  Призы за результат
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

      {/* Features Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Что особенного в моих занятиях</h2>
            <p className="text-lg text-gray-600">Уникальная методика, проверенная практикой</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Teacher Section */}
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

      {/* Program Section */}
      <section id="program" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Программа курса на год</h2>
            <p className="text-lg text-gray-600">59 основных занятий + 20 бесплатных бонусов</p>
          </div>
          
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="main">Основные занятия (59)</TabsTrigger>
              <TabsTrigger value="bonus">Бесплатные бонусы (20)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main">
              <div className="grid md:grid-cols-2 gap-4">
                {curriculum.slice(0, 20).map((lesson) => (
                  <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                          <p className="text-sm text-gray-500">Занятие {lesson.id}</p>
                        </div>
                        <Badge variant={lesson.type === "Алгебра" ? "default" : "secondary"}>
                          {lesson.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Посмотреть все 59 занятий
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="bonus">
              <div className="grid md:grid-cols-2 gap-4">
                {bonusLessons.map((lesson, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Gift" size={20} className="text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900">{lesson}</h4>
                          <p className="text-sm text-gray-500">Бесплатное занятие</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <p className="text-lg text-gray-600">Ответы на самые популярные вопросы родителей и учеников</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя родителя/ученика</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Класс ученика</label>
                  <Input 
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    placeholder="8 или 9 класс"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите об уровне знаний ученика, есть ли проблемные темы..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">МатемАтика ОГЭ</h3>
              <p className="text-gray-400">Подготовка к ОГЭ через понимание</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МатемАтика ОГЭ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index