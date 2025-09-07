import { Users, Building, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      title: "Jumlah Penduduk",
      value: "15.8 Juta",
      subtitle: "Jiwa",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Kabupaten/Kota",
      value: "33",
      subtitle: "Daerah",
      icon: Building,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Luas Wilayah",
      value: "72.981",
      subtitle: "km²",
      icon: MapPin,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Pertumbuhan Ekonomi",
      value: "5.2%",
      subtitle: "Per Tahun",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Sumatera Utara dalam Angka
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Data dan statistik terkini mengenai Provinsi Sumatera Utara
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-soft`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/80 mb-1">
                    {stat.subtitle}
                  </div>
                  <div className="text-xs text-primary-foreground/70">
                    {stat.title}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;