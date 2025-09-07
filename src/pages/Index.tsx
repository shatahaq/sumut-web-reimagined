import Header from "@/components/Header";
import ServiceGrid from "@/components/ServiceGrid";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import VirtualAssistant from "@/components/VirtualAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceGrid />
      <StatsSection />
      <NewsSection />
      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default Index;
