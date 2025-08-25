import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">МЕГАВОЛЬТ</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>

          <Button 
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  Профессиональный сервис
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Ремонт кофемашин 
                  <span className="text-primary block">любой сложности</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Быстро, качественно и с гарантией. Более 10 лет опыта в обслуживании 
                  профессионального кофейного оборудования.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Отремонтировано</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/c06efe2c-f2a6-4736-89e2-a5a4f460557f.jpg" 
                  alt="Современный офис с кофемашинами" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Наши преимущества
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предоставляем полный спектр услуг по обслуживанию кофейного оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Быстрый ремонт",
                description: "Диагностика за 15 минут, ремонт в день обращения"
              },
              {
                icon: "Shield",
                title: "Гарантия качества",
                description: "12 месяцев гарантии на все виды ремонтных работ"
              },
              {
                icon: "Users",
                title: "Опытные мастера",
                description: "Сертифицированные специалисты с опытом более 10 лет"
              },
              {
                icon: "Wrench",
                title: "Оригинальные запчасти",
                description: "Используем только качественные комплектующие"
              },
              {
                icon: "Truck",
                title: "Выезд на дом",
                description: "Бесплатный выезд мастера по Москве и области"
              },
              {
                icon: "Star",
                title: "Лучший сервис",
                description: "500+ довольных клиентов и 5-звездочные отзывы"
              }
            ].map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={advantage.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Полный спектр услуг
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От простой очистки до капитального ремонта - мы решаем любые задачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Диагностика и ремонт",
                price: "от 1500₽",
                features: [
                  "Полная диагностика системы",
                  "Ремонт любой сложности",
                  "Замена деталей",
                  "Настройка параметров"
                ]
              },
              {
                title: "Профилактика",
                price: "от 800₽",
                features: [
                  "Чистка внутренних систем",
                  "Декальцинация",
                  "Смазка механизмов",
                  "Проверка работы"
                ]
              },
              {
                title: "Техническое обслуживание",
                price: "от 2000₽",
                features: [
                  "Регулярное ТО по графику",
                  "Замена расходников",
                  "Калибровка настроек",
                  "Гарантийное обслуживание"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground mb-2">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-6">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Наша команда
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Профессиональные мастера
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый специалист имеет профильное образование и сертификаты производителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Петров",
                role: "Ведущий мастер",
                experience: "12 лет опыта",
                avatar: "👨‍🔧"
              },
              {
                name: "Михаил Сидоров",
                role: "Специалист по итальянской технике",
                experience: "8 лет опыта",
                avatar: "👨‍🔬"
              },
              {
                name: "Дмитрий Иванов",
                role: "Эксперт по автоматическим машинам",
                experience: "15 лет опыта",
                avatar: "👨‍💼"
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <CardContent className="pt-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Готовы помочь вам 24/7. Звоните прямо сейчас!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Телефон</h3>
              <p className="text-lg opacity-90">+7 (495) 123-45-67</p>
              <p className="text-sm opacity-75">Круглосуточно</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-lg opacity-90">info@megavolt.ru</p>
              <p className="text-sm opacity-75">Ответим в течение часа</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Адрес</h3>
              <p className="text-lg opacity-90">г. Москва, ул. Тестовая, 123</p>
              <p className="text-sm opacity-75">Выезжаем по всей области</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-12 py-4 text-lg font-semibold"
              onClick={() => setChatOpen(true)}
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Открыть чат
            </Button>
          </div>
        </div>
      </section>

      {/* Online Chat */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border z-50 flex flex-col">
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Онлайн поддержка</h4>
              <p className="text-sm opacity-90">Мы онлайн</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Здравствуйте! Как дела с вашей кофемашиной? 👋</p>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Введите сообщение..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-lg font-bold">МЕГАВОЛЬТ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональный ремонт кофемашин с 2014 года
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Диагностика</li>
                <li>Ремонт</li>
                <li>Профилактика</li>
                <li>ТО</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@megavolt.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Работаем</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пн-Вс: 24/7</li>
                <li>Выезд: круглосуточно</li>
                <li>Консультации: бесплатно</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 МЕГАВОЛЬТ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;