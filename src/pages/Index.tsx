import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Алена Юрьевна свяжется с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Scale" className="text-accent" size={32} />
            <div className="flex flex-col leading-tight">
              <span className="font-body text-xs text-primary-foreground/70 tracking-wider uppercase">Адвокатское бюро</span>
              <span className="font-heading font-bold text-xl text-primary-foreground">Правовая Конструкция</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {['О подходе', 'Услуги', 'Экспертиза', 'Отзывы', 'FAQ', 'Контакты'].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(['pain', 'services', 'expertise', 'reviews', 'faq', 'contacts'][i])}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-body text-sm"
              >
                {item}
              </button>
            ))}
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg">
            <a href="tel:+79000000000">Позвонить</a>
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex">
                <Badge className="bg-accent/20 text-accent border-accent/30 font-body">30 лет опыта</Badge>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Юридическая безопасность для вашей жизни и бизнеса без лишних рисков
              </h1>
              <p className="text-lg text-primary-foreground/90 font-body leading-relaxed">
                Адвокат <span className="font-semibold text-accent">Алена Кожушко</span>. Защита интересов предпринимателей, фрилансеров и владельцев бизнеса. Личная встреча или онлайн за час.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => scrollToSection('contacts')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 shadow-xl">
                  Записаться на консультацию
                </Button>
                <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 font-semibold">
                  Узнать стоимость услуг
                </Button>
              </div>
              <div className="flex items-center gap-2 pt-6">
                <Icon name="Phone" className="text-accent" size={24} />
                <div>
                  <p className="text-sm text-primary-foreground/60 font-body">Позвонить адвокату</p>
                  <a href="tel:+79000000000" className="font-semibold text-lg hover:text-accent transition-colors">+7 (900) 000-00-00</a>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Адвокат Алена Кожушко"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pain" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-destructive/10 text-destructive border-destructive/20">Проблема</Badge>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Правовые риски угрожают стабильности вашего бизнеса
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Неправильно составленные договоры. Споры с партнёрами, которые тянутся месяцами и отвлекают от развития. Претензии от контролирующих органов, которые застают врасплох. Незнание своих прав в критический момент — всё это реальность для предпринимателей, которые не имеют постоянного юридического сопровождения.
              </p>
              <Card className="bg-destructive/5 border-destructive/20 p-6">
                <div className="flex gap-3">
                  <Icon name="Quote" className="text-destructive flex-shrink-0" size={24} />
                  <div>
                    <p className="font-body italic text-foreground mb-2">
                      "Подписала договор с поставщиком, не проверив все пункты. Через два месяца поставщик исчез с предоплатой. Потеряла 300 тысяч рублей и три месяца на судебные разбирательства."
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">— Елена К., владелица интернет-магазина</p>
                  </div>
                </div>
              </Card>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <p className="text-3xl font-bold text-destructive">87%</p>
                  <p className="text-sm text-muted-foreground mt-1">малого бизнеса сталкиваются с рисками</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <p className="text-3xl font-bold text-destructive">340 000 ₽</p>
                  <p className="text-sm text-muted-foreground mt-1">средние потери при ошибках</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-destructive/10 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Стресс от документов"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-destructive/10 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
                alt="Судебные издержки"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <Badge className="bg-destructive/10 text-destructive border-destructive/20">Последствия</Badge>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Цена ошибки — потеря бизнеса, времени и денег
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Проблема не решается сама собой. Неправильно составленный контракт оборачивается многомесячными судебными тяжбами. Пропущенный срок исковой давности означает потерю права на возврат денег.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'FileText', title: 'Штрафы от регуляторов', amount: 'от 50 000 до 500 000 ₽' },
                  { icon: 'Gavel', title: 'Судебные издержки', amount: '500 000 — 2 000 000 ₽' },
                  { icon: 'Clock', title: 'Потеря времени', amount: '3–6 месяцев на разбирательства' },
                  { icon: 'TrendingDown', title: 'Репутационные риски', amount: 'невосполнимы' },
                ].map((item, i) => (
                  <Card key={i} className="p-4 border-destructive/20 bg-destructive/5">
                    <div className="flex items-start gap-3">
                      <Icon name={item.icon as any} className="text-destructive flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-destructive font-bold mt-1">{item.amount}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-600/10 text-green-700 border-green-600/20">Надежда</Badge>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Представьте: ваш бизнес под надёжной правовой защитой
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Вы открываете день с ясным пониманием: все договоры составлены профессионально. В случае спора вы защищены. Ваши права не будут нарушены. У вас есть опытный юридический партнёр, который всегда на связи.
              </p>
              <div className="space-y-3">
                {[
                  'Все контракты проверены и защищают ваши интересы',
                  'Споры решаются в досудебном порядке или с минимальными издержками',
                  'Вы концентрируетесь на развитии бизнеса, а не на юридических проблемах',
                  'Вы уверены в законности каждого своего действия',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground font-body">{item}</p>
                  </div>
                ))}
              </div>
              <Card className="bg-white border-green-600/20 p-6 mt-6">
                <div className="flex gap-3">
                  <Icon name="Quote" className="text-green-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-body italic text-foreground mb-2">
                      "После начала сотрудничества с Аленой я перестала бояться юридических вопросов. Все договоры оформлены правильно. За два года ни одного конфликта. Это дало мне возможность открыть три новых точки."
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">— Анна Р., владелица сети салонов красоты</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-green-600/10 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="Успешный бизнес"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">Решение</Badge>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Экспертное юридическое сопровождение с 30-летним опытом
            </h2>
            <p className="text-primary-foreground/90 font-body text-lg max-w-3xl mx-auto">
              Я — адвокат Алена Кожушко, 30 лет практики в юриспруденции. Моя задача — обеспечить вашу правовую безопасность, чтобы вы могли сосредоточиться на развитии.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'Zap', title: 'Оперативность', desc: 'Консультация онлайн в течение часа в рабочее время' },
              { icon: 'Video', title: 'Удобство', desc: 'Консультации онлайн или в офисе во Владивостоке' },
              { icon: 'Briefcase', title: 'Комплексный подход', desc: 'От составления договоров до представительства в суде' },
              { icon: 'Award', title: 'Опыт 30 лет', desc: 'Три десятилетия успешной практики, сотни выигранных дел' },
              { icon: 'FileCheck', title: 'Прозрачность', desc: 'Фиксированная стоимость услуг, понятные условия' },
              { icon: 'Shield', title: 'Гарантии', desc: 'Профессиональная защита ваших интересов' },
            ].map((item, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur border-white/20 p-6 hover:bg-white/15 transition-all">
                <Icon name={item.icon as any} className="text-accent mb-3" size={40} />
                <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 font-body text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <h3 className="font-heading font-bold text-2xl mb-6 text-center">Мой подход к работе</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Глубокий анализ', desc: 'Изучаю вашу ситуацию со всех сторон' },
                { num: '02', title: 'Стратегия решения', desc: 'Разрабатываю план с учётом ваших целей' },
                { num: '03', title: 'Реализация', desc: 'Беру на себя все юридические задачи' },
                { num: '04', title: 'Результат', desc: 'Достигаю целей с минимальными издержками' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold text-accent/30 mb-2">{step.num}</div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-primary-foreground/80 font-body text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-6">95% моих клиентов рекомендуют меня своим партнёрам</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('contacts')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 shadow-xl">
                Записаться на консультацию
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent bg-white hover:bg-white/90 font-semibold">
                <a href="tel:+79000000000">Позвонить прямо сейчас</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Юридические услуги для вашей жизни и бизнеса
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Комплексное правовое сопровождение по всем направлениям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'FileText',
                title: 'Договоры и сделки',
                desc: 'Составление, экспертиза, сопровождение договоров любой сложности',
                bg: 'bg-secondary',
              },
              {
                icon: 'ShieldCheck',
                title: 'Защита прав предпринимателей',
                desc: 'Разрешение споров с партнёрами, контрагентами, контролирующими органами',
                bg: 'bg-muted',
              },
              {
                icon: 'Heart',
                title: 'Семейное право',
                desc: 'Решение семейных вопросов с учётом интересов всех сторон',
                bg: 'bg-secondary',
              },
              {
                icon: 'Users',
                title: 'Трудовое право',
                desc: 'Защита трудовых прав работников и работодателей',
                bg: 'bg-muted',
              },
              {
                icon: 'Home',
                title: 'Недвижимость',
                desc: 'Юридическое сопровождение сделок с недвижимостью',
                bg: 'bg-secondary',
              },
              {
                icon: 'Gavel',
                title: 'Судебное представительство',
                desc: 'Защита ваших интересов в судах любой инстанции',
                bg: 'bg-muted',
              },
            ].map((service, i) => (
              <Card key={i} className={`${service.bg} border p-6 hover:shadow-xl transition-all hover:-translate-y-1`}>
                <Icon name={service.icon as any} className="text-accent mb-4" size={48} />
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-body">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Экспертиза, подтверждённая результатами
            </h2>
            <p className="text-primary-foreground/90 font-body text-lg">
              Цифры и факты о моей практике
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 30, suffix: ' лет', label: 'успешной юридической практики', icon: 'Calendar' },
              { num: 500, suffix: '+', label: 'успешно решённых дел', icon: 'Briefcase' },
              { num: 95, suffix: '%', label: 'клиентов рекомендуют нас', icon: 'Star' },
              { num: 87, suffix: '%', label: 'дел решены досудебно', icon: 'Handshake' },
            ].map((stat, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur border-white/20 p-6 text-center">
                <Icon name={stat.icon as any} className="text-accent mx-auto mb-4" size={48} />
                <div className="text-5xl font-bold text-accent mb-2">
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/80 font-body">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'Award', title: 'Квалификация адвоката', desc: 'Член Адвокатской палаты Приморского края' },
              { icon: 'BookOpen', title: 'Непрерывное обучение', desc: 'Регулярное повышение квалификации' },
              { icon: 'Focus', title: 'Индивидуальный подход', desc: 'Каждое дело уникально' },
            ].map((item, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur border-white/20 p-6 text-center">
                <Icon name={item.icon as any} className="text-accent mx-auto mb-3" size={40} />
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 font-body text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Отзывы клиентов — моя лучшая рекомендация
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Реальные истории успешного сотрудничества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Сергей М.',
                position: 'Владелец IT-компании',
                text: 'Обратился к Алене с серьёзным корпоративным спором — партнёр пытался вывести активы компании. Алена быстро разобралась в ситуации, собрала доказательную базу и помогла решить вопрос в досудебном порядке. Сохранили и деньги, и репутацию.',
                result: 'Спор решён досудебно, активы защищены',
              },
              {
                name: 'Анна Р.',
                position: 'Владелица сети салонов красоты',
                text: 'После консультации с Аленой я поняла, как правильно оформлять договоры с мастерами, арендодателями, поставщиками. Теперь у меня нет конфликтов, и я спокойна за свой бизнес. За два года работы открыла три новых точки.',
                result: 'Юридическое сопровождение бизнеса, 3 новых салона',
              },
              {
                name: 'Дмитрий К.',
                position: 'Предприниматель, ресторанный бизнес',
                text: 'Столкнулся с незаконными действиями контролирующих органов — пытались закрыть ресторан по надуманным основаниям. Алена оперативно подготовила возражения, представляла интересы в суде. Решение в нашу пользу, бизнес продолжает работать.',
                result: 'Отменено предписание, ресторан продолжил работу',
              },
              {
                name: 'Елена Т.',
                position: 'Фрилансер, дизайнер',
                text: 'Заказчик отказался платить за выполненную работу — сумма была большая, я растерялась. Алена помогла составить претензию, провела переговоры, и мы получили деньги без суда. Теперь все договоры оформляю только после консультации.',
                result: 'Получена оплата 250 000 рублей',
              },
            ].map((review, i) => (
              <Card key={i} className="bg-card border p-6 hover:shadow-xl transition-all">
                <div className="flex gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                <p className="font-body italic text-foreground mb-4">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.position}</p>
                  <Badge className="mt-2 bg-accent/10 text-accent border-accent/20">{review.result}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Гарантии профессионального сервиса
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Почему вы можете мне доверять
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'DollarSign', title: 'Прозрачная стоимость', desc: 'Фиксированные тарифы, обсуждаются заранее' },
              { icon: 'Lock', title: 'Конфиденциальность', desc: 'Все данные защищены адвокатской тайной' },
              { icon: 'Award', title: 'Опыт 30 лет', desc: 'Проверенная временем экспертиза' },
              { icon: 'Clock', title: 'Удобный формат', desc: 'Консультации онлайн или в офисе' },
              { icon: 'UserCheck', title: 'Личное ведение', desc: 'Я лично веду каждое дело' },
            ].map((item, i) => (
              <Card key={i} className="bg-muted border p-6 text-center hover:shadow-lg transition-all">
                <Icon name={item.icon as any} className="text-accent mx-auto mb-3" size={40} />
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Часто задаваемые вопросы
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Ответы на вопросы о сотрудничестве
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Сколько стоит юридическая консультация?',
                a: 'Стоимость консультации зависит от сложности вопроса и формата работы. Первичная консультация длительностью до 30 минут — 3 000 рублей. Развёрнутая консультация с анализом документов — от 5 000 рублей. Стоимость комплексного юридического сопровождения обсуждается индивидуально.',
              },
              {
                q: 'Как быстро я получу ответ на свой вопрос?',
                a: 'Если вы обращаетесь в рабочее время (пн-пт, 9:00-18:00 по времени Владивостока), я отвечу в течение часа. Для сложных вопросов, требующих изучения документов — до 24 часов. Срочные вопросы обсуждаются отдельно.',
              },
              {
                q: 'Нужно ли приезжать в офис для консультации?',
                a: 'Нет, личный визит не обязателен. Консультации проводятся онлайн через удобные вам мессенджеры (Telegram, WhatsApp, Zoom, Skype). Однако если вам комфортнее встретиться лично — добро пожаловать в офис по адресу: Владивосток, ул. Петра Великого 2, оф. 400.',
              },
              {
                q: 'Какие документы нужны для консультации?',
                a: 'Это зависит от вашего вопроса. Для первичной консультации достаточно краткого описания ситуации. Если речь о договорах — понадобятся копии контрактов. Для судебных споров — исковые заявления, решения судов, переписка. На первой консультации мы обсудим, какие документы потребуются.',
              },
              {
                q: 'Вы работаете с клиентами из других регионов России?',
                a: 'Да, онлайн-консультации и юридическое сопровождение доступны для клиентов из любого региона России. Я веду дела в арбитражных судах и судах общей юрисдикции дистанционно, используя системы электронного правосудия.',
              },
              {
                q: 'Как происходит оплата услуг?',
                a: 'Оплата происходит поэтапно после согласования стоимости и плана работы. Для разовых консультаций — оплата перед началом. Для ведения дел — предоплата и окончательный расчёт после завершения этапов. Принимаю оплату по безналичному расчёту и наличными в офисе.',
              },
              {
                q: 'Какие гарантии результата вы даёте?',
                a: 'Я гарантирую профессиональный подход, использование всех законных способов защиты ваших интересов и полную отдачу в работе. Однако никто не может гарантировать 100% результат в судебных спорах. Я честно оцениваю перспективы дела и не даю ложных обещаний.',
              },
              {
                q: 'Можно ли заключить договор на постоянное юридическое сопровождение?',
                a: 'Да, я предлагаю услугу постоянного юридического сопровождения (абонентское обслуживание). Это включает: консультации по текущим вопросам, проверку договоров, сопровождение сделок, представительство в государственных органах. Стоимость обсуждается индивидуально.',
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-left hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Не откладывайте решение правовых вопросов
          </h2>
          <p className="text-primary-foreground/90 font-body text-lg max-w-3xl mx-auto mb-6">
            Каждый день промедления увеличивает риски и потенциальные потери. Запишитесь на консультацию прямо сейчас и получите профессиональную оценку вашей ситуации и план действий.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Консультация в течение часа', 'Профессиональная оценка ситуации', 'Чёткий план решения', 'Прозрачная стоимость'].map((item, i) => (
              <Badge key={i} className="bg-accent/20 text-accent border-accent/30 font-body px-4 py-2">
                <Icon name="CheckCircle2" className="mr-2" size={16} />
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('contacts')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 shadow-xl animate-pulse">
              Записаться на консультацию
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent bg-white hover:bg-white/90 font-semibold">
              <a href="tel:+79000000000">Позвонить адвокату</a>
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-primary text-primary-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Scale" className="text-accent" size={32} />
                <div>
                  <p className="font-heading font-bold text-lg">Правовая Конструкция</p>
                  <p className="text-sm text-primary-foreground/70">Адвокатское бюро</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 font-body text-sm">
                Адвокат Алена Кожушко<br />
                30 лет опыта в юриспруденции
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" className="text-accent flex-shrink-0 mt-1" size={16} />
                  <p className="text-primary-foreground/80">690091, г. Владивосток,<br />ул. Петра Великого 2, офис 400</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" className="text-accent" size={16} />
                  <a href="tel:+79000000000" className="text-primary-foreground/80 hover:text-accent transition-colors">+7 (900) 000-00-00</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" className="text-accent" size={16} />
                  <a href="mailto:info@pravkonstrukcia.ru" className="text-primary-foreground/80 hover:text-accent transition-colors">info@pravkonstrukcia.ru</a>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Clock" className="text-accent flex-shrink-0 mt-1" size={16} />
                  <p className="text-primary-foreground/80">Пн-Пт: 9:00 — 18:00<br />Сб-Вс: по записи</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Форма обратной связи</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                />
                <Textarea
                  placeholder="Опишите вашу ситуацию"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 min-h-20"
                  required
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm text-primary-foreground/60">
            <p className="mb-2">© 2025 Адвокатское Бюро "Правовая Конструкция". Все права защищены.</p>
            <p>Информация на сайте не является публичной офертой. Стоимость услуг определяется индивидуально после консультации.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
