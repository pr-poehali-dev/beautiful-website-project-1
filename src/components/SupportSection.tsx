import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function SupportSection() {
  return (
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
  );
}