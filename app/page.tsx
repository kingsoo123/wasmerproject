import Header from "@/components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
