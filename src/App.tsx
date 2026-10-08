import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Strengths from '@/components/Strengths';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F2942]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
