import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  return (
    <>
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
    </>
  );
}