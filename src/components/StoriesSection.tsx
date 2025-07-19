import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function StoriesSection() {
  return (
    <>
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
    </>
  );
}