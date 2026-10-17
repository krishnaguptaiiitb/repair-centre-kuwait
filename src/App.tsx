import { useRouter } from '@/lib/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  const { path } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {path === '/' && <Home />}
        {path === '/services' && <Services />}
        {path === '/about' && <About />}
        {path === '/contact' && <Contact />}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
