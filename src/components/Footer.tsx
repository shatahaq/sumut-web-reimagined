import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/40d17e1f-b922-4e44-b564-980fa0128519.png" 
                alt="Logo Sumut" 
                className="w-12 h-12 rounded-lg shadow-soft"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Pemprov <span className="text-secondary">Sumut</span>
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Pemerintah Provinsi Sumatera Utara
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Melayani masyarakat Sumatera Utara dengan transparansi, 
              akuntabilitas, dan inovasi untuk kemajuan daerah.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm">
                  Jl. Diponegoro No. 30, Medan, Sumatera Utara
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm">(061) 4511000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-sm">info@sumutprov.go.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm">Sen-Jum: 08:00 - 16:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Layanan Utama</h4>
            <ul className="space-y-3">
              {[
                "E-Lapor",
                "Perizinan Online",
                "Info Anggaran",
                "Pengumuman",
                "Berita Sumut",
                "Portal Data"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold mb-6">Tetap Terhubung</h4>
            <div className="flex space-x-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" }
              ].map(({ icon: Icon, label }) => (
                <Button 
                  key={label}
                  size="sm" 
                  variant="outline" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
            
            <div>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Dapatkan info terbaru via email
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-md text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-l-none">
                  Kirim
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Pemerintah Provinsi Sumatera Utara. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Kebijakan Privasi", "Syarat Penggunaan", "Sitemap"].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;