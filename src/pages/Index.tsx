import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [floodPhone, setFloodPhone] = useState('');
  const [floodCycles, setFloodCycles] = useState('10');
  const [floodNickname, setFloodNickname] = useState('ARMAT');
  const [searchPhone, setSearchPhone] = useState('');
  const [searchIP, setSearchIP] = useState('');
  const [results, setResults] = useState<any>(null);

  const handleFlood = async () => {
    if (!floodPhone) {
      toast({
        title: "Ошибка",
        description: "Введите номер телефона",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Успешно!",
        description: `Отправлено ${floodCycles} циклов на номер ${floodPhone}`,
      });
    }, 2000);
  };

  const handlePhoneSearch = async () => {
    if (!searchPhone) {
      toast({
        title: "Ошибка",
        description: "Введите номер телефона",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setResults({
        type: 'phone',
        data: {
          phone: searchPhone,
          country: 'Россия',
          region: 'Московская область',
          city: 'Москва',
          operator: 'МТС',
          phoneType: 'Mobile',
        }
      });
      setLoading(false);
    }, 1500);
  };

  const handleIPSearch = async () => {
    if (!searchIP) {
      toast({
        title: "Ошибка",
        description: "Введите IP-адрес",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setResults({
        type: 'ip',
        data: {
          ip: searchIP,
          country: 'RU',
          region: 'Moscow',
          city: 'Moscow',
          lat: '55.7558',
          lon: '37.6173',
          org: 'Digital Energy Technologies Limited',
        }
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8 space-y-2">
          <pre className="text-[#9b87f5] text-xs sm:text-sm font-mono inline-block">
{`
   █▓█     █     █▒▓    █░█░█░        ▒█    
 █▓  ▓█    ▓    ▓█      ▒   ▒█      ██  ██  
█▓    ▓█   █   █▓     ░█            ▓▓    ▒█
▓      ▓   ▓  ▓▓       █░            █      █
█      █   ▓█▓         ▒             ▓      ▒
▓▓░▓░▓░▓   █ ▒█        █             █▒▒█▒▒█
█      █   █  ▒█▒      ▒             ▓      ▒
▓      ▓   ▓    ▒█     █░      ░█    ▓      █
█      █   █     ▒█    █░      █     █      ▒
█      █   █      ▒█   ▒█░█░█░       ▓      █
`}
          </pre>
          <p className="text-[#7E69AB] text-sm">t.me/sferakill</p>
          <h1 className="text-3xl font-bold mt-4">О программе</h1>
        </div>

        <Tabs defaultValue="flood" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#2A2F3C]">
            <TabsTrigger value="flood" className="data-[state=active]:bg-[#9b87f5]">
              <Icon name="Zap" className="w-4 h-4 mr-2" />
              Флуд кодами
            </TabsTrigger>
            <TabsTrigger value="phone" className="data-[state=active]:bg-[#9b87f5]">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              По номеру
            </TabsTrigger>
            <TabsTrigger value="ip" className="data-[state=active]:bg-[#9b87f5]">
              <Icon name="Globe" className="w-4 h-4 mr-2" />
              По IP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flood">
            <Card className="bg-[#2A2F3C] border-[#3A3F4C]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Флуд кодами Telegram</CardTitle>
                <CardDescription className="text-gray-400">
                  Отправка множественных запросов кодов авторизации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+79991234567"
                    value={floodPhone}
                    onChange={(e) => setFloodPhone(e.target.value)}
                    className="bg-[#1A1F2C] border-[#3A3F4C]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cycles">Количество циклов</Label>
                  <Input
                    id="cycles"
                    type="number"
                    placeholder="10"
                    value={floodCycles}
                    onChange={(e) => setFloodCycles(e.target.value)}
                    className="bg-[#1A1F2C] border-[#3A3F4C]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nickname">Ник (опционально)</Label>
                  <Input
                    id="nickname"
                    type="text"
                    placeholder="ARMAT"
                    value={floodNickname}
                    onChange={(e) => setFloodNickname(e.target.value)}
                    className="bg-[#1A1F2C] border-[#3A3F4C]"
                  />
                </div>
                <Button 
                  onClick={handleFlood} 
                  disabled={loading}
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="w-4 h-4 mr-2" />
                      Начать флуд
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phone">
            <Card className="bg-[#2A2F3C] border-[#3A3F4C]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Пробив по номеру</CardTitle>
                <CardDescription className="text-gray-400">
                  Поиск информации о номере телефона
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="search-phone">Номер телефона</Label>
                  <Input
                    id="search-phone"
                    type="tel"
                    placeholder="+79991234567"
                    value={searchPhone}
                    onChange={(e) => setSearchPhone(e.target.value)}
                    className="bg-[#1A1F2C] border-[#3A3F4C]"
                  />
                </div>
                <Button 
                  onClick={handlePhoneSearch} 
                  disabled={loading}
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                      Поиск...
                    </>
                  ) : (
                    <>
                      <Icon name="Search" className="w-4 h-4 mr-2" />
                      Найти информацию
                    </>
                  )}
                </Button>

                {results && results.type === 'phone' && (
                  <div className="mt-4 p-4 bg-[#1A1F2C] rounded-lg space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Номер:</span>
                      <span>{results.data.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Страна:</span>
                      <span>{results.data.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Map" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Регион:</span>
                      <span>{results.data.region}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Building" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Город:</span>
                      <span>{results.data.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Radio" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Оператор:</span>
                      <span>{results.data.operator}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Smartphone" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Тип:</span>
                      <span>{results.data.phoneType}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ip">
            <Card className="bg-[#2A2F3C] border-[#3A3F4C]">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Пробив по IP</CardTitle>
                <CardDescription className="text-gray-400">
                  Поиск геолокации и информации об IP-адресе
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="search-ip">IP-адрес</Label>
                  <Input
                    id="search-ip"
                    type="text"
                    placeholder="8.8.8.8"
                    value={searchIP}
                    onChange={(e) => setSearchIP(e.target.value)}
                    className="bg-[#1A1F2C] border-[#3A3F4C]"
                  />
                </div>
                <Button 
                  onClick={handleIPSearch} 
                  disabled={loading}
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                      Поиск...
                    </>
                  ) : (
                    <>
                      <Icon name="Search" className="w-4 h-4 mr-2" />
                      Найти информацию
                    </>
                  )}
                </Button>

                {results && results.type === 'ip' && (
                  <div className="mt-4 p-4 bg-[#1A1F2C] rounded-lg space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Globe" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">IP:</span>
                      <span>{results.data.ip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Flag" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Страна:</span>
                      <span>{results.data.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Map" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Регион:</span>
                      <span>{results.data.region}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Building" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Город:</span>
                      <span>{results.data.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Широта:</span>
                      <span>{results.data.lat}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Долгота:</span>
                      <span>{results.data.lon}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Server" className="w-4 h-4 text-[#9b87f5]" />
                      <span className="text-[#9b87f5]">Организация:</span>
                      <span>{results.data.org}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Декодил Захотел • @sferakill</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
