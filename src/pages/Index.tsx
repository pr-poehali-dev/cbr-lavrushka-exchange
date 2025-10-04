import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const exchangeRates = [
    { 
      currency: 'Лаврушка', 
      code: 'LVR',
      buyRate: 542, 
      sellRate: 545,
      change: '+7.5%',
      trend: 'up' as const
    },
    { 
      currency: 'Листья Вини', 
      code: 'LVI',
      buyRate: 75, 
      sellRate: 78,
      change: '-2.1%',
      trend: 'down' as const
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Landmark" className="text-primary" size={32} />
              <h1 className="text-2xl font-display font-bold text-primary">ЦЕНТРАЛЬНЫЙ БАНК</h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('rates')}
                className={`font-medium transition-colors ${activeSection === 'rates' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Курсы валют
              </button>
              <button 
                onClick={() => setActiveSection('contacts')}
                className={`font-medium transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-display font-bold text-primary mb-4">
              Официальные курсы валют
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Актуальная информация о курсах валют, установленных Центральным Банком
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {exchangeRates.map((rate) => (
              <Card key={rate.code} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                      {rate.currency}
                    </h3>
                    <p className="text-sm text-muted-foreground">{rate.code}</p>
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded ${
                    rate.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    <Icon name={rate.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                    <span className="text-sm font-medium">{rate.change}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Покупка</p>
                    <p className="text-2xl font-semibold text-foreground">{rate.buyRate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Продажа</p>
                    <p className="text-2xl font-semibold text-foreground">{rate.sellRate}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setActiveSection('rates')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            >
              Подробные курсы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </section>
      )}

      {activeSection === 'rates' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">Курсы валют</h2>
          
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-display font-semibold text-foreground">Валюта</th>
                    <th className="px-6 py-4 text-left font-display font-semibold text-foreground">Код</th>
                    <th className="px-6 py-4 text-right font-display font-semibold text-foreground">Покупка</th>
                    <th className="px-6 py-4 text-right font-display font-semibold text-foreground">Продажа</th>
                    <th className="px-6 py-4 text-right font-display font-semibold text-foreground">Изменение</th>
                  </tr>
                </thead>
                <tbody>
                  {exchangeRates.map((rate, index) => (
                    <tr key={rate.code} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="px-6 py-4 font-medium text-foreground">{rate.currency}</td>
                      <td className="px-6 py-4 text-muted-foreground">{rate.code}</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">{rate.buyRate}</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">{rate.sellRate}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`inline-flex items-center gap-1 ${
                          rate.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <Icon name={rate.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                          {rate.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <Icon name="Info" className="inline mr-2" size={16} />
              Курсы обновляются ежедневно в 15:00 по московскому времени
            </p>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Неглинная, д. 12
                    <br />
                    107016, Российская Федерация
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 771-91-00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@centralbank.ru</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="font-display font-semibold text-2xl mb-4">Режим работы</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Понедельник - Четверг</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Пятница</span>
                  <span className="font-semibold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье</span>
                  <span className="font-semibold">Выходной</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Landmark" className="text-primary" size={24} />
              <span className="font-display font-semibold text-foreground">Центральный Банк</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
