import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 animate-bounce">
            Место для открытого общения
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient-x">Позвольте рассказать</span><br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">о себе</span>
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in-up delay-400">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 hover:text-gray-700 transition-colors duration-300">
            Я не психолог и не врач, но уже восемь лет страдаю от множества болезней. 
            Я хочу помогать людям. Общение — это наш главный инструмент, который не только 
            помогает жить, но и вдохновляет.
          </p>
          <p className="text-base sm:text-lg text-gray-500 hover:text-gray-600 transition-colors duration-300">
            Эта визитка создана для общения с людьми которые болеют и хотят рассказать 
            о своих болезнях и найти поддержку.
          </p>
        </div>



        <div className="relative w-full max-w-2xl mx-auto animate-fade-in-up delay-600 group">
          <img 
            src="/img/b2c8431a-82ad-437f-80c5-7a6a83eec07d.jpg" 
            alt="Поддержка и забота"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-all duration-500"></div>
          {/* Floating elements around image */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 animate-bounce delay-100"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-secondary to-yellow-400 rounded-full opacity-50 animate-bounce delay-300"></div>
          <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40 animate-bounce delay-500"></div>
          <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-40 animate-bounce delay-700"></div>
        </div>
      </div>
    </section>
  );
}