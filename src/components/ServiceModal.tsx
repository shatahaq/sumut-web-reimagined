import { useState } from "react";
import { 
  X, 
  ChevronRight, 
  FileText, 
  Video, 
  Users, 
  Building, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award,
  Camera,
  Music,
  Newspaper,
  BarChart3,
  Mail,
  Globe,
  Database
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  serviceCategory: string;
}

const menuData: Record<string, any[]> = {
  "informasi": [
    { title: "Berita", icon: Newspaper, description: "Berita terkini dari Pemprov Sumut" },
    { title: "Video", icon: Video, description: "Galeri video kegiatan pemerintah" },
    { title: "Surat Edaran", icon: FileText, description: "Surat edaran dan regulasi" },
    { title: "Statistik Sektoral", icon: BarChart3, description: "Data statistik berbagai sektor" },
    { title: "Pengumuman", icon: Mail, description: "Pengumuman resmi pemerintah" },
    { title: "Press Release", icon: Globe, description: "Siaran pers dan media" }
  ],
  "pemerintahan": [
    { title: "Visi Misi", icon: Award, description: "Visi misi Pemprov Sumut" },
    { title: "OPD", icon: Building, description: "Organisasi Perangkat Daerah" },
    { title: "Kota dan Kabupaten", icon: MapPin, description: "Profil daerah di Sumut" },
    { title: "Organisasi", icon: Users, description: "Struktur organisasi pemerintah" },
    { title: "Program Kerja", icon: Calendar, description: "Program kerja pemerintah" },
    { title: "RPJMD", icon: BookOpen, description: "Rencana Pembangunan Jangka Menengah" },
    { title: "RTRW", icon: MapPin, description: "Rencana Tata Ruang Wilayah" },
    { title: "JDIH", icon: FileText, description: "Jaringan Dokumentasi Hukum" }
  ],
  "tentang": [
    { title: "Sejarah", icon: BookOpen, description: "Sejarah Provinsi Sumatera Utara" },
    { title: "Identitas", icon: Award, description: "Identitas dan lambang Sumut" },
    { title: "Gubernur dan Wakil", icon: Users, description: "Profil pimpinan daerah" },
    { title: "Tempat Wisata", icon: Camera, description: "Destinasi wisata unggulan" },
    { title: "Pahlawan Sumut", icon: Award, description: "Tokoh pahlawan daerah" },
    { title: "Himne dan Mars", icon: Music, description: "Lagu daerah Sumut" }
  ],
  "layanan": [
    { title: "E-Lapor", icon: FileText, description: "Layanan pengaduan masyarakat" },
    { title: "Perizinan Online", icon: Globe, description: "Layanan perizinan digital" },
    { title: "LHKPN", icon: Database, description: "Laporan Harta Kekayaan Penyelenggara Negara" },
    { title: "Mail Sumut", icon: Mail, description: "Email resmi pemerintah" },
    { title: "Aplikasi Layanan", icon: Building, description: "Berbagai aplikasi layanan" },
    { title: "KPK System", icon: Award, description: "Sistem whistleblower KPK" }
  ],
  "transparansi": [
    { title: "Portal Satu Data", icon: Database, description: "Portal data terpadu Sumut" },
    { title: "Anggaran Provinsi", icon: BarChart3, description: "Informasi anggaran daerah" },
    { title: "Pengelolaan Anggaran", icon: FileText, description: "Transparansi pengelolaan anggaran" },
    { title: "Laporan Keuangan", icon: BookOpen, description: "Laporan pertanggungjawaban keuangan" },
    { title: "Pengadaan Barang/Jasa", icon: Building, description: "Informasi tender dan pengadaan" }
  ]
};

const ServiceModal = ({ isOpen, onClose, serviceTitle, serviceCategory }: ServiceModalProps) => {
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);
  
  const menuItems = menuData[serviceCategory] || [];

  const handleSubmenuClick = (submenu: string) => {
    setSelectedSubmenu(submenu);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-gradient-to-br from-background to-accent/10">
        <DialogHeader className="border-b border-border/50 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {serviceTitle}
              </DialogTitle>
              <p className="text-muted-foreground mt-1">
                Pilih layanan yang Anda butuhkan
              </p>
            </div>
            <Badge variant="outline" className="gradient-primary text-primary-foreground">
              {menuItems.length} Layanan
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 overflow-y-auto max-h-96">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onClick={() => handleSubmenuClick(item.title)}
                className="group p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-accent/20 hover:border-primary/30 cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border/50 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Butuh bantuan? Hubungi layanan customer service kami
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Tutup
              </Button>
              <Button className="gradient-primary">
                Bantuan
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;