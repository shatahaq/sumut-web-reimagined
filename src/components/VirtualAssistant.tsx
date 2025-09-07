import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya adalah asisten virtual Provinsi Sumatera Utara. Saya siap membantu Anda dengan informasi tentang layanan pemerintah, wisata, sejarah, dan berbagai hal terkait Sumut. Ada yang bisa saya bantu?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined responses for demo purposes
  const getAssistantResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('halo') || message.includes('hai')) {
      return 'Halo! Senang bertemu dengan Anda. Ada informasi apa yang ingin Anda ketahui tentang Sumatera Utara?';
    } else if (message.includes('wisata') || message.includes('tempat wisata')) {
      return 'Sumatera Utara memiliki banyak destinasi wisata menarik seperti Danau Toba, Pulau Samosir, Bukit Lawang untuk melihat orangutan, Air Terjun Sipiso-piso, dan Istana Maimun di Medan. Apakah ada destinasi tertentu yang ingin Anda ketahui lebih detail?';
    } else if (message.includes('layanan') || message.includes('pemerintah')) {
      return 'Pemerintah Provinsi Sumut menyediakan berbagai layanan seperti E-Lapor untuk pengaduan masyarakat, perizinan online, portal satu data, dan berbagai aplikasi layanan publik lainnya. Layanan mana yang Anda butuhkan?';
    } else if (message.includes('sejarah')) {
      return 'Sumatera Utara memiliki sejarah yang kaya dengan berbagai kerajaan seperti Kerajaan Batak, Kesultanan Deli, dan Kesultanan Serdang. Provinsi ini juga dikenal dengan keragaman budaya dan bahasa daerahnya. Ingin tahu lebih detail tentang aspek sejarah tertentu?';
    } else if (message.includes('makanan') || message.includes('kuliner')) {
      return 'Sumut terkenal dengan kuliner khasnya seperti Bika Ambon, Soto Medan, Rendang Daging, Arsik, Mie Gomak, dan masih banyak lagi. Makanan khas mana yang ingin Anda ketahui resep atau tempatnya?';
    } else if (message.includes('gubernur') || message.includes('pimpinan')) {
      return 'Untuk informasi terkini tentang Gubernur dan Wakil Gubernur Sumatera Utara, Anda bisa mengecek di menu "Tentang Sumut" → "Gubernur dan Wakil" di website ini.';
    } else {
      return 'Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail, Anda bisa mengecek menu layanan yang tersedia di website ini, atau hubungi customer service kami di (061) 4511000. Ada hal lain yang bisa saya bantu?';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAssistantResponse(inputMessage),
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <Card className="w-80 h-96 shadow-xl border-0 gradient-card animate-scale-in">
          <CardHeader className="pb-2 gradient-primary text-primary-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">Asisten Virtual Sumut</CardTitle>
                  <p className="text-xs text-primary-foreground/80">Online • Siap membantu</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 p-0 text-primary-foreground hover:bg-white/10"
                >
                  <Minimize2 className="w-3 h-3" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 p-0 text-primary-foreground hover:bg-white/10"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-3 h-3" />
                        ) : (
                          <Bot className="w-3 h-3" />
                        )}
                      </div>
                      <div className={`rounded-lg px-3 py-2 text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground ml-2'
                          : 'bg-accent text-accent-foreground mr-2'
                      }`}>
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                        <Bot className="w-3 h-3" />
                      </div>
                      <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            <div className="p-3 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pertanyaan Anda..."
                  className="flex-1 text-sm"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm" 
                  disabled={!inputMessage.trim() || isTyping}
                  className="gradient-primary"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VirtualAssistant;