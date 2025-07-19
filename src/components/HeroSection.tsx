import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}