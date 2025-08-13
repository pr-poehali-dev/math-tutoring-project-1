import React from 'react'
import Icon from '@/components/ui/icon'

const Footer = () => {
  return (
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
  )
}

export default Footer