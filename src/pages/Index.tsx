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
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Scale" className="text-accent" size={32} />
            <div className="flex flex-col leading-tight">
              <span className="font-body text-xs text-primary-foreground/70 tracking-wider uppercase">Адвокатское бюро</span>
              <span className="font-heading font-bold text-xl text-primary-foreground">"Правовая Конструкция"</span>
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
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <a href="https://t.me/AlenaKozhushko" target="_blank" rel="noopener noreferrer">Консультация</a>
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
              <Badge className="bg-accent/20 text-accent border-accent/30 font-body">30 лет опыта</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Юридическая безопасность для вашей жизни и бизнеса без лишних рисков
              </h1>
              <p className="text-lg text-primary-foreground/90 font-body leading-relaxed">
                Адвокат <span className="font-semibold text-accent">Алена Юрьевна Кожушко</span>. Защита интересов предпринимателей, фрилансеров и владельцев бизнеса. Личная встреча или онлайн.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 animate-pulse">
                  <a href="https://t.me/AlenaKozhushko" target="_blank" rel="noopener noreferrer">Записаться на консультацию</a>
                </Button>
                <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 font-semibold">
                  Узнать стоимость
                </Button>
              </div>
              <a href="https://t.me/AlenaKozhushko" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 pt-6 hover:opacity-80 transition-opacity">
                <Icon name="MessageCircle" className="text-accent" size={24} />
                <div>
                  <p className="text-sm text-primary-foreground/60 font-body">Написать адвокату</p>
                  <p className="font-semibold text-lg">t.me/AlenaKozhushko</p>
                </div>
              </a>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/files/20f78ffa-de2c-4096-9e6d-23f9fe7c9ae7.jpg"
                alt="Адвокат Алена Юрьевна Кожушко"
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
                Неправильно составленные договоры. Споры с партнёрами, которые тянутся месяцами. Претензии от контролирующих органов. Незнание своих прав в критический момент — всё это реальность для предпринимателей без юридического сопровождения.
              </p>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <p className="text-sm text-muted-foreground font-body mb-4">Пример из практики:</p>
                <div className="flex items-start gap-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/fd6b7b8a-e698-416b-a0ce-c6273f53e3e5/files/6e49c509-6625-4b13-a4de-0a21639c4cb6.jpg"
                    alt="Елена К."
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="italic text-foreground/80 font-body leading-relaxed mb-3">
                      "Подписала договор с поставщиком, не проверив все пункты. Через два месяца поставщик исчез с предоплатой. Потеряла 300 тысяч рублей и три месяца на судебные разбирательства."
                    </p>
                    <p className="text-sm font-semibold text-foreground">— Елена К., владелица интернет-магазина</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-3xl font-bold text-destructive font-heading">87%</p>
                  <p className="text-sm text-muted-foreground font-body mt-1">бизнеса сталкиваются с рисками</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-3xl font-bold text-destructive font-heading">340 000 ₽</p>
                  <p className="text-sm text-muted-foreground font-body mt-1">средние потери</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/56ec4ceb-62a4-4441-80cc-95af80788404.jpg"
                alt="Владивосток - город возможностей"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-accent/10 text-accent border-accent/20">Решение</Badge>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Представьте: ваш бизнес под надёжной правовой защитой
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Вы открываете день с ясным пониманием: все договоры составлены профессионально. В случае спора вы защищены. У вас есть опытный юридический партнёр, который всегда на связи.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm max-w-2xl mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/ca9338e7-d03f-4c39-b2f7-97907cc08d45.png"
                  alt="Анна Р."
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 text-left">
                  <p className="font-semibold text-foreground font-body mb-1">Анна Р.</p>
                  <p className="text-sm text-muted-foreground font-body">Владелица сети салонов красоты</p>
                </div>
              </div>
              <p className="italic text-foreground/80 font-body leading-relaxed text-left">
                "После начала сотрудничества с Аленой Юрьевной я перестала бояться юридических вопросов. Все договоры оформлены правильно. За два года ни одного конфликта. Это дало мне возможность открыть три новых точки."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Юридические услуги для вашей жизни и бизнеса
            </h2>
            <p className="text-lg text-muted-foreground font-body">Комплексное правовое сопровождение по всем направлениям</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'FileText', title: 'Договоры и сделки', desc: 'Составление, экспертиза, сопровождение договоров любой сложности. Защита от рисков на этапе подписания.' },
              { icon: 'Shield', title: 'Защита прав предпринимателей', desc: 'Разрешение споров с партнёрами, контрагентами, контролирующими органами. Досудебное урегулирование и судебная защита.' },
              { icon: 'Heart', title: 'Семейное право', desc: 'Решение семейных вопросов с учётом интересов всех сторон. Разводы, алименты, раздел имущества, брачные договоры.' },
              { icon: 'Anchor', title: 'Морские споры', desc: 'Представительство в морских спорах, споры о морских перевозках, фрахте, столкновениях судов, морском страховании.' },
              { icon: 'Home', title: 'Недвижимость', desc: 'Юридическое сопровождение сделок с недвижимостью. Проверка чистоты сделок, оформление документов.' },
              { icon: 'Gavel', title: 'Судебное представительство', desc: 'Профессиональная защита интересов в судах любой инстанции. Подготовка документов, участие в заседаниях.' },
            ].map((service, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
                <Icon name={service.icon} className="text-accent mb-4" size={48} />
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Экспертиза, подтверждённая результатами</h2>
            <p className="text-lg text-primary-foreground/80 font-body">Цифры и факты о моей практике</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 30, suffix: ' лет', label: 'успешной юридической практики', icon: 'Calendar' },
              { number: 500, suffix: '+', label: 'успешно решённых дел', icon: 'Briefcase' },
              { number: 95, suffix: '%', label: 'клиентов рекомендуют нас', icon: 'Star' },
              { number: 87, suffix: '%', label: 'дел решены досудебно', icon: 'Handshake' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-3 animate-fade-in">
                <Icon name={stat.icon} className="text-accent mx-auto" size={48} />
                <p className="text-5xl font-bold text-accent font-heading">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/90 font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Отзывы клиентов — моя лучшая рекомендация
            </h2>
            <p className="text-lg text-muted-foreground font-body">Реальные истории успешного сотрудничества</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                author: 'Сергей М.',
                position: 'Владелец IT-компании',
                text: 'Обратился с серьёзным корпоративным спором — партнёр пытался вывести активы компании. Алена Юрьевна быстро разобралась, собрала доказательства и помогла решить вопрос досудебно. Профессионально, быстро, по делу.',
                result: 'Спор решён досудебно, активы защищены',
                image: 'https://cdn.poehali.dev/projects/fd6b7b8a-e698-416b-a0ce-c6273f53e3e5/files/9d22bb30-1089-402d-a855-6bb3b3432b8d.jpg'
              },
              {
                author: 'Анна Р.',
                position: 'Владелица сети салонов красоты',
                text: 'После консультации с Аленой Юрьевной я поняла, как правильно оформлять договоры с мастерами, арендодателями, поставщиками. Теперь у меня нет конфликтов, и я спокойна за свой бизнес.',
                result: 'Юридическое сопровождение бизнеса, 3 новых салона',
                image: 'https://cdn.poehali.dev/projects/fd6b7b8a-e698-416b-a0ce-c6273f53e3e5/files/f7237e51-065a-4623-a98a-b44dcf040ce8.jpg'
              },
              {
                author: 'Дмитрий К.',
                position: 'Предприниматель, ресторанный бизнес',
                text: 'Столкнулся с незаконными действиями контролирующих органов — пытались закрыть ресторан. Алена Юрьевна оперативно подготовила возражения, представляла в суде. Решение в нашу пользу.',
                result: 'Отменено предписание, ресторан продолжил работу',
                image: 'https://cdn.poehali.dev/projects/fd6b7b8a-e698-416b-a0ce-c6273f53e3e5/files/7383234f-dc02-4c54-87c7-51e93709932a.jpg'
              },
              {
                author: 'Елена Т.',
                position: 'Фрилансер, дизайнер',
                text: 'Заказчик отказался платить за выполненную работу. Алена Юрьевна помогла составить претензию, провела переговоры, и мы получили деньги без суда. Теперь все договоры оформляю после консультации.',
                result: 'Получена оплата 250 000 рублей',
                image: 'https://cdn.poehali.dev/projects/fd6b7b8a-e698-416b-a0ce-c6273f53e3e5/files/373c0baa-9764-437c-bd13-d3e2e73f7047.jpg'
              },
            ].map((review, i) => (
              <Card key={i} className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.image} 
                    alt={review.author}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground font-body">{review.author}</p>
                    <p className="text-sm text-muted-foreground font-body">{review.position}</p>
                  </div>
                </div>
                <p className="text-foreground/80 font-body italic leading-relaxed mb-4">"{review.text}"</p>
                <Badge className="bg-accent/10 text-accent border-accent/20">{review.result}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground font-body">Ответы на вопросы о сотрудничестве</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Сколько стоит юридическая консультация?',
                a: 'Стоимость консультации зависит от сложности вопроса и формата работы. Первичная консультация до 60 минут — 7 000 рублей. Стоимость развёрнутой консультации с анализом документов зависит от объема исследуемых документов и обсуждается индивидуально. Стоимость комплексного сопровождения обсуждается индивидуально.'
              },
              {
                q: 'Как быстро я получу ответ на свой вопрос?',
                a: 'Если вы обращаетесь в рабочее время (пн-пт, 10:00-17:00 по времени Владивостока), я отвечу на консультации в течение часа. Для сложных вопросов, требующих изучения документов — по договоренности.'
              },
              {
                q: 'Нужно ли приезжать в офис для консультации?',
                a: 'Нет, личный визит не обязателен. Консультации проводятся онлайн в заранее оговоренное время, через удобные вам мессенджеры (Telegram, WhatsApp). Однако если вам комфортнее встретиться лично — добро пожаловать в офис: г. Владивосток, ул. Петра Великого 2, оф. 400.'
              },
              {
                q: 'Вы работаете с клиентами из других регионов России?',
                a: 'Да, онлайн-консультации и юридическое сопровождение доступны для клиентов из любого региона России. Веду дела в арбитражных судах и судах общей юрисдикции дистанционно, используя системы электронного правосудия.'
              },
              {
                q: 'Какие гарантии результата вы даёте?',
                a: 'Я гарантирую профессиональный подход, использование всех законных способов защиты ваших интересов и полную отдачу в работе. Однако никто не может гарантировать 100% результат в судебных спорах — это зависит от множества факторов. Я честно оцениваю перспективы дела и не даю ложных обещаний.'
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-accent text-left">
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

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Не откладывайте решение правовых вопросов
              </h2>
              <p className="text-lg text-primary-foreground/80 font-body">
                Каждый день промедления увеличивает риски и потенциальные потери
              </p>
            </div>
            <Card className="p-8 border-border bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-body font-semibold text-foreground mb-2 block">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                      className="font-body"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body font-semibold text-foreground mb-2 block">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      type="tel"
                      required
                      className="font-body"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Опишите вашу ситуацию</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем юридическом вопросе..."
                    rows={5}
                    required
                    className="font-body"
                  />
                </div>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg">
                  <a href="https://t.me/AlenaKozhushko" target="_blank" rel="noopener noreferrer">Отправить заявку на консультацию</a>
                </Button>
                <p className="text-sm text-muted-foreground text-center font-body">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-2">
                <Icon name="MapPin" className="text-accent mx-auto" size={32} />
                <p className="font-semibold font-body">Адрес офиса</p>
                <p className="text-sm text-primary-foreground/80 font-body">Владивосток, ул. Петра Великого 2, оф. 400</p>
              </div>
              <div className="text-center space-y-2">
                <Icon name="Phone" className="text-accent mx-auto" size={32} />
                <p className="font-semibold font-body">Телефон</p>
                <p className="text-sm text-primary-foreground/80 font-body">+7 (914) 333-90-03</p>
              </div>
              <div className="text-center space-y-2">
                <Icon name="Clock" className="text-accent mx-auto" size={32} />
                <p className="font-semibold font-body">Режим работы</p>
                <p className="text-sm text-primary-foreground/80 font-body">Пн-Пт: 9:00-18:00 (UTC+10)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary/95 text-primary-foreground border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" className="text-accent" size={32} />
                <span className="font-heading font-bold text-xl">Правовая Конструкция</span>
              </div>
              <p className="text-sm text-primary-foreground/70 font-body">
                Адвокатское Бюро. Юридическое сопровождение бизнеса с 1995 года.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-primary-foreground/70 font-body">
                <p>690091, Владивосток</p>
                <p>ул. Петра Великого 2, оф. 400</p>
                <p>+7 (914) 333-90-03</p>
                <p>info@pravkonstrukcia.ru</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Icon name="MessageCircle" className="text-accent hover:scale-110 transition-transform cursor-pointer" size={28} />
                <Icon name="Send" className="text-accent hover:scale-110 transition-transform cursor-pointer" size={28} />
                <Icon name="Mail" className="text-accent hover:scale-110 transition-transform cursor-pointer" size={28} />
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-primary-foreground/60 font-body">
            <p>© 2025 Адвокатское Бюро "Правовая Конструкция". Все права защищены.</p>
            <p className="mt-2">Информация на сайте не является публичной офертой.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;