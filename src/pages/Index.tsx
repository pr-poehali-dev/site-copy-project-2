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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Icon name="Building2" size={20} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-primary">МЕГАВОЛЬТ</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium">Команда</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>

          <Button 
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-primary hover:bg-secondary text-white px-6"
          >
            <Icon name="Phone" size={18} className="mr-2" />
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="border-primary text-primary bg-white mb-4">
                  Профессиональный сервисный центр
                </Badge>
                <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                  Техническое обслуживание 
                  <span className="text-foreground block">кофейного оборудования</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Комплексные решения для бизнеса. Сертифицированные специалисты, 
                  оригинальные запчасти, гарантийное обслуживание.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-secondary text-white px-8 py-3 font-medium">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Записаться на обслуживание
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-foreground hover:bg-gray-50 px-8 py-3 font-medium">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Коммерческое предложение
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Единиц оборудования</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground font-medium">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground font-medium">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
                <img 
                  src="/img/c06efe2c-f2a6-4736-89e2-a5a4f460557f.jpg" 
                  alt="Профессиональное кофейное оборудование" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-secondary text-secondary bg-white mb-4">
              Наши преимущества
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Корпоративные стандарты качества
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональное обслуживание с соблюдением всех технических регламентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Соблюдение сроков",
                description: "Строгое выполнение договорных обязательств и временных регламентов"
              },
              {
                icon: "Shield",
                title: "Официальная гарантия",
                description: "Документальное оформление гарантийных обязательств до 24 месяцев"
              },
              {
                icon: "Award",
                title: "Сертифицированные специалисты",
                description: "Аттестованные инженеры с допусками производителей оборудования"
              },
              {
                icon: "Settings",
                title: "Оригинальные комплектующие",
                description: "Прямые поставки запчастей от официальных дилеров"
              },
              {
                icon: "Truck",
                title: "Логистическая служба",
                description: "Организованный выезд специалистов в удобное время"
              },
              {
                icon: "FileCheck",
                title: "Документооборот",
                description: "Полный комплект отчетной документации по каждому заказу"
              }
            ].map((advantage, index) => (
              <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                    <Icon name={advantage.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-accent text-accent bg-white mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Комплексное техническое обслуживание
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные решения для корпоративных клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Диагностика и ремонт",
                price: "от 2500₽",
                features: [
                  "Комплексная техническая диагностика",
                  "Ремонт с использованием оригинальных запчастей",
                  "Послегарантийное обслуживание",
                  "Документальное оформление работ"
                ]
              },
              {
                title: "Плановое ТО",
                price: "от 1800₽",
                features: [
                  "Регламентное обслуживание по графику",
                  "Профилактическая очистка систем",
                  "Калибровка и настройка параметров",
                  "Отчетность для управляющих служб"
                ]
              },
              {
                title: "Сервисный контракт",
                price: "от 5000₽/мес",
                features: [
                  "Абонентское обслуживание",
                  "Приоритетное реагирование",
                  "Включенные расходные материалы",
                  "Персональный менеджер проекта"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center border-b border-gray-100">
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">{service.title}</CardTitle>
                  <div className="text-2xl font-semibold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-secondary text-white mt-6 font-medium">
                    Получить предложение
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary text-primary bg-white mb-4">
              Наша команда
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Квалифицированные инженеры
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сертифицированные специалисты с профильным техническим образованием
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Петров",
                role: "Ведущий инженер",
                experience: "Стаж 12 лет",
                credentials: "Сертификат Bosch Professional"
              },
              {
                name: "Михаил Сидоров",
                role: "Специалист по европейскому оборудованию",
                experience: "Стаж 8 лет",
                credentials: "Авторизация Jura, Franke"
              },
              {
                name: "Дмитрий Иванов",
                role: "Эксперт по промышленным системам",
                experience: "Стаж 15 лет",
                credentials: "Техническая поддержка WMF"
              }
            ].map((member, index) => (
              <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.experience}</p>
                  <p className="text-xs text-muted-foreground">{member.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">
              Корпоративные контакты
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Персональный менеджер для работы с корпоративными клиентами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Телефон</h3>
              <p className="text-lg">+7 (495) 123-45-67</p>
              <p className="text-sm opacity-75">Рабочие дни: 9:00-18:00</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-lg">b2b@megavolt.ru</p>
              <p className="text-sm opacity-75">Ответ в течение 2 часов</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Building" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Офис</h3>
              <p className="text-lg">г. Москва, Деловой центр</p>
              <p className="text-sm opacity-75">Прием по предварительной записи</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-12 py-4 text-lg font-semibold"
              onClick={() => setChatOpen(true)}
            >
              <Icon name="MessageSquare" size={20} className="mr-3" />
              Обратная связь
            </Button>
          </div>
        </div>
      </section>

      {/* Online Chat */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Техническая поддержка</h4>
              <p className="text-sm opacity-90">Консультант онлайн</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Добро пожаловать! Как можем помочь с обслуживанием оборудования?</p>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Опишите вашу задачу..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="sm" className="bg-primary hover:bg-secondary">
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
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <Icon name="Building2" size={16} className="text-white" />
                </div>
                <span className="text-lg font-semibold">МЕГАВОЛЬТ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональное обслуживание кофейного оборудования с 2014 года
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Техническая диагностика</li>
                <li>Ремонт и модернизация</li>
                <li>Плановое ТО</li>
                <li>Сервисные контракты</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>b2b@megavolt.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Режим работы</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пн-Пт: 9:00-18:00</li>
                <li>Сб: 10:00-16:00</li>
                <li>Экстренные вызовы: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 МЕГАВОЛЬТ. Профессиональное обслуживание кофейного оборудования.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;