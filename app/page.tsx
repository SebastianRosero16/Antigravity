import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionGrid from "@/components/CollectionGrid";
import BrandStatement from "@/components/BrandStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CollectionGrid />
        <BrandStatement />
      </main>
      <Footer />
    </div>
  );
}
