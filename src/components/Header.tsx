import { Search, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="relative gradient-hero shadow-soft">
      <div className="container mx-auto px-4 py-6">
        {/* Logo and Nav */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/40d17e1f-b922-4e44-b564-980fa0128519.png" 
              alt="Logo Sumut" 
              className="w-12 h-12 rounded-lg shadow-soft"
            />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">
                Sumut<span className="text-secondary">.go.id</span>
              </h1>
              <p className="text-sm text-primary-foreground/80">
                Website Resmi Pemerintah Provinsi Sumatera Utara
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Globe className="w-4 h-4 mr-2" />
              ID
            </Button>
            <Button size="sm" className="text-primary-foreground hover:bg-white/10">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Selamat Datang di Portal
            <span className="block text-secondary">Pemerintah Sumatera Utara</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Akses mudah ke layanan publik, informasi terkini, dan berbagai fasilitas 
            pemerintah daerah untuk masyarakat Sumut
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Cari layanan, informasi, atau dokumen..."
              className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-medium"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 gradient-primary">
              Cari
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;