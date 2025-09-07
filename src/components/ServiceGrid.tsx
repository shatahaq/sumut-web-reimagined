import { useState } from "react";
import { 
  Users, 
  Building2, 
  FileText, 
  AlertCircle, 
  DollarSign, 
  Megaphone,
  Mail,
  Shield,
  Newspaper,
  MapPin,
  Award,
  Database
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceModal from "./ServiceModal";

const services = [
  {
    title: "Tentang Sumut",
    description: "Profil dan informasi umum Provinsi Sumatera Utara",
    icon: MapPin,
    category: "informasi",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Pemerintahan",
    description: "Struktur dan informasi pemerintahan daerah",
    icon: Building2,
    category: "pemerintahan",
    color: "from-green-500 to-green-600"
  },
  {
    title: "DPRD Sumut",
    description: "Dewan Perwakilan Rakyat Daerah Sumatera Utara",
    icon: Users,
    category: "pemerintahan",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Informasi Publik",
    description: "Informasi dan pengumuman untuk masyarakat",
    icon: AlertCircle,
    category: "informasi",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Anggaran Provinsi",
    description: "Pengelolaan dan transparansi anggaran daerah",
    icon: DollarSign,
    category: "transparansi",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Pengumuman",
    description: "Pengumuman resmi dari pemerintah provinsi",
    icon: Megaphone,
    category: "informasi",
    color: "from-red-500 to-red-600"
  },
  {
    title: "E-Lapor",
    description: "Layanan pengaduan masyarakat online",
    icon: FileText,
    category: "layanan",
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Aplikasi Layanan",
    description: "Berbagai aplikasi layanan digital",
    icon: Database,
    category: "layanan",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Mail Sumut",
    description: "Sistem email resmi pemerintah provinsi",
    icon: Mail,
    category: "internal",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "KPK Whistleblower",
    description: "Sistem pelaporan anti korupsi",
    icon: Shield,
    category: "transparansi",
    color: "from-rose-500 to-rose-600"
  },
  {
    title: "Berita Sumut",
    description: "Berita dan press release pemerintah",
    icon: Newspaper,
    category: "informasi",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Portal Satu Data",
    description: "Portal data terpadu Sumatera Utara",
    icon: Award,
    category: "transparansi",
    color: "from-violet-500 to-violet-600"
  }
];

const ServiceGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{title: string, category: string} | null>(null);

  const handleServiceClick = (service: {title: string, category: string}) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const categories = [
    { id: "semua", name: "Semua Layanan", count: services.length },
    { id: "layanan", name: "Layanan Publik", count: services.filter(s => s.category === "layanan").length },
    { id: "informasi", name: "Informasi", count: services.filter(s => s.category === "informasi").length },
    { id: "pemerintahan", name: "Pemerintahan", count: services.filter(s => s.category === "pemerintahan").length },
    { id: "transparansi", name: "Transparansi", count: services.filter(s => s.category === "transparansi").length }
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Layanan & Informasi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Akses cepat ke berbagai layanan pemerintah, informasi publik, 
            dan fasilitas digital untuk kemudahan masyarakat
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.id === "semua" ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name}
              <span className="ml-2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                onClick={() => handleServiceClick({title: service.title, category: service.category})}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-accent/50 text-accent-foreground text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal 
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            serviceTitle={selectedService.title}
            serviceCategory={selectedService.category}
          />
        )}
      </div>
    </section>
  );
};

export default ServiceGrid;