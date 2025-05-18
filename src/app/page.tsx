import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyFansPump from "@/components/WhyFansPump";
import Technology from "@/components/InnovativeTechnology";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer"; 

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>
        <section id="about">
          <WhyFansPump />
        </section>
        <section id="technology">
          <Technology />
        </section>
        <section id="tokenomics">
          <Tokenomics />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="faq">
          <Faq />
        </section>
      </main>
      <Footer />
    </div>
  );
} 
