import { Calendar, ArrowRight, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsSection = () => {
  const news = [
    {
      title: "Gubernur Sumut Resmikan Infrastruktur Jalan Baru di Medan",
      excerpt: "Pembangunan infrastruktur terus ditingkatkan untuk mendukung perekonomian daerah dan kemudahan akses masyarakat...",
      date: "2024-01-15",
      category: "Infrastruktur",
      views: "2.1k",
      image: "https://images.unsplash.com/photo-1558618666-fcd09c2cd2c8?w=400&h=200&fit=crop"
    },
    {
      title: "Program Bantuan UMKM Provinsi Sumut Capai Target 10.000 Penerima",
      excerpt: "Pemprov Sumut berhasil menyalurkan bantuan modal usaha kepada pelaku UMKM untuk meningkatkan kesejahteraan...",
      date: "2024-01-12",
      category: "Ekonomi",
      views: "1.8k",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
    },
    {
      title: "Festival Budaya Sumut 2024 Promosikan Kearifan Lokal",
      excerpt: "Event tahunan yang menampilkan berbagai kebudayaan dari seluruh kabupaten/kota di Sumatera Utara...",
      date: "2024-01-10",
      category: "Budaya",
      views: "3.2k",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Berita Terkini
            </h2>
            <p className="text-muted-foreground">
              Informasi dan perkembangan terbaru dari Pemprov Sumut
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Lihat Semua
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 gradient-primary text-primary-foreground">
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            Lihat Semua Berita
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;