import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function SupportSection() {
  return (
    <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full translate-x-36 -translate-y-36 animate-pulse delay-500"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full -translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent mb-4">Как мы поможем</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексная поддержка для людей, столкнувшихся с болезнями
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="Users" size={24} className="text-primary group-hover:animate-bounce" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors duration-300">Сообщество поддержки</CardTitle>
              <CardDescription>
                Общение с людьми, которые понимают ваш опыт и готовы поделиться своим
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="MessageCircle" size={24} className="text-secondary group-hover:animate-pulse" />
              </div>
              <CardTitle className="group-hover:text-secondary transition-colors duration-300">Личные беседы</CardTitle>
              <CardDescription>
                Возможность обсудить свои переживания в приватной обстановке
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="BookOpen" size={24} className="text-yellow-600 group-hover:animate-bounce" />
              </div>
              <CardTitle className="group-hover:text-yellow-600 transition-colors duration-300">Обмен опытом</CardTitle>
              <CardDescription>
                Истории других людей, которые могут вдохновить и дать надежду
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="Shield" size={24} className="text-green-600 group-hover:animate-pulse" />
              </div>
              <CardTitle className="group-hover:text-green-600 transition-colors duration-300">Безопасное пространство</CardTitle>
              <CardDescription>
                Место, где можно быть собой без страха осуждения
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="Clock" size={24} className="text-purple-600 group-hover:animate-spin" />
              </div>
              <CardTitle className="group-hover:text-purple-600 transition-colors duration-300">Постоянная поддержка</CardTitle>
              <CardDescription>
                Доступность общения в любое время, когда это необходимо
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="Heart" size={24} className="text-red-500 group-hover:animate-pulse" />
              </div>
              <CardTitle className="group-hover:text-red-500 transition-colors duration-300">Эмоциональная помощь</CardTitle>
              <CardDescription>
                Понимание, сочувствие и поддержка в трудные моменты
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}