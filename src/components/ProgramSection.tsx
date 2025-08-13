import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import Icon from '@/components/ui/icon'

const ProgramSection = () => {
  const fullCurriculum = [
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
    { id: 20, title: "Теорема о сумме углов треугольника", type: "Геометрия" },
    { id: 21, title: "Некоторые свойства прямоугольных треугольников", type: "Геометрия" },
    { id: 22, title: "Системы линейных уравнений", type: "Алгебра" },
    { id: 23, title: "Решение задач с помощью системы линейных уравнений из второй части", type: "Алгебра" },
    { id: 24, title: "Вероятность", type: "Алгебра" },
    { id: 25, title: "Обратная пропорциональность", type: "Алгебра" },
    { id: 26, title: "Многоугольники", type: "Геометрия" },
    { id: 27, title: "Параллелограмм. Признаки параллелограмма. Трапеция", type: "Геометрия" },
    { id: 28, title: "Прямоугольник. Ромб и квадрат", type: "Геометрия" },
    { id: 29, title: "Квадратные корни ч.1", type: "Алгебра" },
    { id: 30, title: "Квадратные корни ч.2", type: "Алгебра" },
    { id: 31, title: "Квадратные уравнения ч.1", type: "Алгебра" },
    { id: 32, title: "Квадратные уравнения ч.2", type: "Алгебра" },
    { id: 33, title: "Решение квадратных уравнений из второй части ч.1", type: "Алгебра" },
    { id: 34, title: "Решение квадратных уравнений из второй части ч.2", type: "Алгебра" },
    { id: 35, title: "Решение квадратных уравнений из второй части ч.3", type: "Алгебра" },
    { id: 36, title: "Площадь прямоугольника. Площадь параллелограмма. Площадь треугольника. Площадь трапеции. Ч.1", type: "Геометрия" },
    { id: 37, title: "Площади геометрических фигур ч.2", type: "Геометрия" },
    { id: 38, title: "Теорема Пифагора", type: "Геометрия" },
    { id: 39, title: "Решение задач по геометрии из второй части ч.1", type: "Геометрия" },
    { id: 40, title: "Решение задач по геометрии из второй части ч.2", type: "Геометрия" },
    { id: 41, title: "Решение задач из второй части ч.1 (21 номер)", type: "Алгебра" },
    { id: 42, title: "Решение задач из второй части ч.2", type: "Алгебра" },
    { id: 43, title: "Решение задач из второй части ч.3", type: "Алгебра" },
    { id: 44, title: "Решение картинок ч.1", type: "Геометрия" },
    { id: 45, title: "Решение картинок ч.2", type: "Геометрия" },
    { id: 46, title: "Подобные треугольники ч.1", type: "Геометрия" },
    { id: 47, title: "Подобные треугольники ч.2", type: "Геометрия" },
    { id: 48, title: "Подобные треугольники ч.3", type: "Геометрия" },
    { id: 49, title: "Решение задач из второй части на подобные треугольники", type: "Геометрия" },
    { id: 50, title: "Тригонометрия", type: "Алгебра" },
    { id: 51, title: "Линейные неравенства", type: "Алгебра" },
    { id: 52, title: "Степень с целым показателем", type: "Алгебра" },
    { id: 53, title: "Формулы", type: "Алгебра" },
    { id: 54, title: "Квадратичная функция", type: "Алгебра" },
    { id: 55, title: "Квадратичные неравенства", type: "Алгебра" },
    { id: 56, title: "Неравенства из второй части", type: "Алгебра" },
    { id: 57, title: "Числовые последовательности", type: "Алгебра" },
    { id: 58, title: "Соотношение в треугольнике", type: "Геометрия" },
    { id: 59, title: "Окружность и круг", type: "Геометрия" }
  ]
  
  const curriculum = fullCurriculum.slice(0, 8)

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

  return (
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
            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              {curriculum.map((lesson) => (
                <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm md:text-base leading-tight">{lesson.title}</h4>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Занятие {lesson.id}</p>
                      </div>
                      <Badge variant={lesson.type === "Алгебра" ? "default" : "secondary"} className="text-xs flex-shrink-0">
                        {lesson.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть все 59 занятий
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[85vh] w-[95vw] sm:w-full">
                  <DialogHeader>
                    <DialogTitle className="text-lg md:text-xl">Полная программа курса (59 занятий)</DialogTitle>
                    <DialogDescription className="text-sm md:text-base">
                      Детальный план подготовки к ОГЭ по математике на весь учебный год
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[65vh] pr-2 md:pr-4">
                    <div className="grid gap-2 md:gap-3">
                      {fullCurriculum.map((lesson) => (
                        <div key={lesson.id} className="flex items-start justify-between p-2 md:p-3 rounded-lg border hover:bg-gray-50 transition-colors gap-3">
                          <div className="flex items-start space-x-2 md:space-x-3 flex-1 min-w-0">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs md:text-sm font-medium flex-shrink-0">
                              {lesson.id}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm md:text-base leading-tight">{lesson.title}</h4>
                            </div>
                          </div>
                          <Badge variant={lesson.type === "Алгебра" ? "default" : "secondary"} className="text-xs flex-shrink-0">
                            {lesson.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
          
          <TabsContent value="bonus">
            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              {bonusLessons.map((lesson, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Gift" size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm md:text-base leading-tight">{lesson}</h4>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Бесплатное занятие</p>
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
  )
}

export default ProgramSection