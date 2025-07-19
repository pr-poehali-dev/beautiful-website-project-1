import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  onChatOpen: () => void;
}

export default function Navigation({ onChatOpen }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-primary" size={24} />
            <span className="font-semibold text-xl text-gray-900">Поддержка</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О себе</a>
            <a href="#support" className="text-gray-600 hover:text-primary transition-colors">Поддержка</a>
            <a href="#stories" className="text-gray-600 hover:text-primary transition-colors">Истории</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90" onClick={onChatOpen}>
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Написать
          </Button>
        </div>
      </div>
    </nav>
  );
}