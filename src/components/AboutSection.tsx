import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}