import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [userName, setUserName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'support', time: string}>>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setIsNameSet(true);
      setMessages([{
        id: 1,
        text: `Привет, ${userName}! Добро пожаловать в наше сообщество поддержки. Расскажите, что вас беспокоит?`,
        sender: 'support',
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: currentMessage,
        sender: 'user' as const,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage('');
      
      // Автоответ от поддержки
      setTimeout(() => {
        const supportResponse = {
          id: messages.length + 2,
          text: 'Спасибо за ваше сообщение. Я понимаю, как это может быть сложно. Вы не одиноки в этом.',
          sender: 'support' as const,
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, supportResponse]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isNameSet) {
        handleNameSubmit();
      } else {
        handleSendMessage();
      }
    }
  };

  const handleClose = () => {
    // Сброс состояния при закрытии
    setUserName('');
    setIsNameSet(false);
    setMessages([]);
    setCurrentMessage('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Icon name="MessageCircle" className="text-primary" size={20} />
            <span>Чат поддержки</span>
          </DialogTitle>
        </DialogHeader>
        
        {!isNameSet ? (
          // Name input form
          <div className="flex-1 flex flex-col justify-center space-y-6 p-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Добро пожаловать!</h3>
              <p className="text-gray-600 text-sm">
                Представьтесь, пожалуйста, чтобы мы могли обращаться к вам по имени
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="userName">Ваше имя</Label>
                <Input
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Введите ваше имя"
                  className="mt-1"
                  autoFocus
                />
              </div>
              
              <Button 
                onClick={handleNameSubmit} 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!userName.trim()}
              >
                <Icon name="ArrowRight" size={16} className="mr-2" />
                Начать общение
              </Button>
            </div>
          </div>
        ) : (
          // Chat interface
          <div className="flex-1 flex flex-col h-full">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4 space-y-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {/* Input area */}
            <div className="border-t p-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Поддержка онлайн</span>
              </div>
              
              <div className="flex space-x-2">
                <Textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Напишите ваше сообщение..."
                  className="flex-1 min-h-[60px] resize-none"
                  rows={2}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim()}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 self-end"
                >
                  <Icon name="Send" size={16} />
                </Button>
              </div>
              
              <p className="text-xs text-gray-500">
                Нажмите Enter для отправки сообщения
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}