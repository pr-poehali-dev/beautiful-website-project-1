import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isChatOpen, setIsChatOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
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
            <Button className="bg-primary hover:bg-primary/90" onClick={() => setIsChatOpen(true)}>
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Место для открытого общения
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Позвольте рассказать<br />
              <span className="text-primary">о себе</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Я не психолог и не врач, но уже восемь лет страдаю от множества болезней. 
              Я хочу помогать людям. Общение — это наш главный инструмент, который не только 
              помогает жить, но и вдохновляет.
            </p>
            <p className="text-base sm:text-lg text-gray-500">
              Эта визитка создана для общения с людьми которые болеют и хотят рассказать 
              о своих болезнях и найти поддержку.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              <Icon name="Users" size={20} className="mr-2" />
              Присоединиться к сообществу
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <img 
              src="/img/b2c8431a-82ad-437f-80c5-7a6a83eec07d.jpg" 
              alt="Поддержка и забота"
              className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">О моем пути</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Восемь лет личного опыта борьбы с болезнями научили меня ценности поддержки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Clock" size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">8 лет опыта</h3>
                  <p className="text-gray-600">
                    Личный путь через множество диагнозов и лечений дал мне глубокое понимание 
                    того, что значит жить с болезнью каждый день.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Heart" size={16} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Желание помогать</h3>
                  <p className="text-gray-600">
                    Мой опыт показал, что поддержка и понимание других людей — это то, 
                    что действительно помогает справляться с трудностями.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="MessageSquare" size={16} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Сила общения</h3>
                  <p className="text-gray-600">
                    Общение — это не просто слова. Это мост между людьми, который позволяет 
                    делиться болью и находить в этом силу двигаться дальше.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Когда мы делимся своими историями, мы перестаем быть одинокими в своей боли. 
                  Мы находим друг друга и понимаем, что не одни в этом мире."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Автор проекта</p>
                    <p className="text-sm text-gray-500">Создатель сообщества поддержки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Как мы поможем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексная поддержка для людей, столкнувшихся с болезнями
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Сообщество поддержки</CardTitle>
                <CardDescription>
                  Общение с людьми, которые понимают ваш опыт и готовы поделиться своим
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} className="text-secondary" />
                </div>
                <CardTitle>Личные беседы</CardTitle>
                <CardDescription>
                  Возможность обсудить свои переживания в приватной обстановке
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-yellow-600" />
                </div>
                <CardTitle>Обмен опытом</CardTitle>
                <CardDescription>
                  Истории других людей, которые могут вдохновить и дать надежду
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <CardTitle>Безопасное пространство</CardTitle>
                <CardDescription>
                  Место, где можно быть собой без страха осуждения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Постоянная поддержка</CardTitle>
                <CardDescription>
                  Доступность общения в любое время, когда это необходимо
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-red-500" />
                </div>
                <CardTitle>Эмоциональная помощь</CardTitle>
                <CardDescription>
                  Понимание, сочувствие и поддержка в трудные моменты
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Истории надежды</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные истории людей, которые нашли поддержку и силы продолжать
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Мария, 34 года</p>
                    <p className="text-sm text-gray-500">Аутоиммунное заболевание</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Здесь я нашла людей, которые действительно понимают, что значит жить с 
                  хронической болью. Их поддержка помогла мне не опускать руки."
                </p>
                <Badge variant="secondary" className="text-xs">
                  3 года в сообществе
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Алексей, 28 лет</p>
                    <p className="text-sm text-gray-500">Онкология</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Когда узнал диагноз, казалось, что мир рухнул. Но благодаря общению 
                  здесь я понял, что жизнь продолжается и она может быть полноценной."
                </p>
                <Badge variant="secondary" className="text-xs">
                  1 год в сообществе
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Елена, 45 лет</p>
                    <p className="text-sm text-gray-500">Диабет</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Общение с людьми, которые прошли похожий путь, дало мне силы 
                  принять свою болезнь и научиться жить с ней полноценно."
                </p>
                <Badge variant="secondary" className="text-xs">
                  2 года в сообществе
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="Plus" size={16} className="mr-2" />
              Поделиться своей историей
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/img/9d47e6e5-fa27-4e63-92d7-a80c0cab70ef.jpg" 
              alt="Сообщество поддержки"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 shadow-lg"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Присоединяйтесь к нашему сообществу
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Здесь каждый может найти понимание и поддержку
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Начать общение
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Users" size={20} className="mr-2" />
              О сообществе
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-gray-600">
              Готов выслушать и поддержать. Не стесняйтесь обращаться
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-4">support@example.com</p>
                <Button variant="outline" size="sm">Написать</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageSquare" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                <p className="text-gray-600 mb-4">@support_community</p>
                <Button variant="outline" size="sm">Перейти</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-gray-600 mb-4">+7 (000) 000-00-00</p>
                <Button variant="outline" size="sm">Позвонить</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="font-semibold text-xl">Поддержка</span>
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">О себе</a>
              <a href="#support" className="text-gray-300 hover:text-white transition-colors">Поддержка</a>
              <a href="#stories" className="text-gray-300 hover:text-white transition-colors">Истории</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="Mail" size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="MessageSquare" size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="Phone" size={16} />
              </Button>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Сообщество поддержки. Создано с заботой о людях.</p>
          </div>
        </div>
      </footer>

      {/* Chat Modal */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
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
    </div>
  );
}