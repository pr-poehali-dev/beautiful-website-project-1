import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-100/50 to-yellow-100/50 rounded-full translate-x-40 translate-y-40 animate-pulse delay-1000"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent mb-4">О моем пути</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
            Восемь лет личного опыта борьбы с болезнями научили меня ценности поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="Clock" size={16} className="text-primary group-hover:animate-spin" />
              </div>
              <div>
                <h3 className="font-semibold text-lg bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-2 group-hover:from-primary group-hover:to-secondary transition-all duration-300">Болею уже больше 8 лет</h3>
                <p className="text-gray-600">
                  Личный путь через множество диагнозов и лечений дал мне глубокое понимание 
                  того, что значит жить с болезнью каждый день.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="Heart" size={16} className="text-secondary group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-lg bg-gradient-to-r from-gray-900 to-secondary bg-clip-text text-transparent mb-2 group-hover:from-secondary group-hover:to-pink-500 transition-all duration-300">Желание помогать</h3>
                <p className="text-gray-600">
                  Мой опыт показал, что поддержка и понимание других людей — это то, 
                  что действительно помогает справляться с трудностями.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon name="MessageSquare" size={16} className="text-yellow-600 group-hover:animate-bounce" />
              </div>
              <div>
                <h3 className="font-semibold text-lg bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:from-yellow-600 group-hover:to-orange-500 transition-all duration-300">Сила общения</h3>
                <p className="text-gray-600">
                  Общение — это не просто слова. Это мост между людьми, который позволяет 
                  делиться болью и находить в этом силу двигаться дальше.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 group">
              <blockquote className="text-lg italic text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                "Когда мы делимся своими историями, мы перестаем быть одинокими в своей боли. 
                Мы находим друг друга и понимаем, что не одни в этом мире."
              </blockquote>
              <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Icon name="User" size={20} className="text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="font-semibold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">Анатолий</p>
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