import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  onChatOpen: () => void;
}

export default function Navigation({ onChatOpen }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white/90 via-blue-50/80 to-white/90 backdrop-blur-md border-b border-blue-200 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group">
            <Icon name="Heart" className="text-primary group-hover:scale-110 transition-transform duration-300 animate-pulse" size={24} />
            <span className="font-semibold text-xl bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">Поддержка</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="relative text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 group">
              О себе
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#support" className="relative text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 group">
              Поддержка
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#stories" className="relative text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 group">
              Истории
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 group">
              Контакты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse hover:animate-none" onClick={onChatOpen}>
            <Icon name="MessageCircle" size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Написать
          </Button>
        </div>
      </div>
    </nav>
  );
}