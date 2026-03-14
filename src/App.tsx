/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Pizza, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  Menu as MenuIcon, 
  X,
  Utensils,
  Truck,
  Award
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Sabores', href: '#menu' },
    { name: 'Contato', href: '#contact' },
  ];

  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511965485354&text&type=phone_number&app_absent=0";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img 
            src="https://clientefiel-historico.s3.us-east-1.amazonaws.com/dados_aplicativos/pizzaria_belissima/img_selo/20180411123639_img_selo.png" 
            alt="Logo Pizzaria Belíssima" 
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-gold">PIZZARIA BELÍSSIMA</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gold text-dark font-bold text-sm rounded-full"
          >
            PEDIR AGORA
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gold text-dark font-bold rounded-xl mt-2 text-center"
              >
                PEDIR AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511965485354&text&type=phone_number&app_absent=0";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=80" 
          alt="Pizza artesanal" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-6">
            A Melhor da Vila Ema
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 text-gradient">
            A ARTE DA PIZZA <br /> EM CADA FATIA.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Sabores exclusivos que atravessam fronteiras. Da clássica Siciliana à exótica Coreana, 
            uma experiência gastronômica luxuosa no coração da Vila Ema.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gold text-dark font-bold rounded-full flex items-center gap-2 shadow-2xl shadow-gold/20"
            >
              PEDIR AGORA <ChevronRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass text-white font-bold rounded-full"
            >
              NOSSA HISTÓRIA
            </motion.button>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-gold/50 text-xs font-bold uppercase tracking-[0.4em]"
          >
            a melhor da vila ema
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const AuthorityStrip = () => {
  const items = [
    "MASSA DE LONGA FERMENTAÇÃO",
    "INGREDIENTES IMPORTADOS",
    "FORNO A LENHA",
    "SABORES EXCLUSIVOS",
    "ENTREGA PREMIUM",
    "VILA EMA - SP",
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-dark-accent overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {items.map((item) => (
              <span key={item} className="text-2xl md:text-4xl font-serif font-black text-white/10 tracking-tighter">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-gold font-bold tracking-widest text-xs uppercase">Diferenciais</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 tracking-tighter">O QUE NOS TORNA <br /> <span className="italic text-gold uppercase">PIZZARIA BELÍSSIMA</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Bento Grid Item 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&w=1200&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              alt="Massa"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Utensils className="text-gold" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Sabores do Mundo</h3>
              <p className="text-white/60 max-w-md">
                Dezenas de sabores que vão além do tradicional. Experimente nossas criações exclusivas como a Coreana e a Cubana.
              </p>
            </div>
          </motion.div>

          {/* Bento Grid Item 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-gold rounded-3xl p-10 flex flex-col justify-between text-dark"
          >
            <div className="w-12 h-12 bg-dark/10 rounded-xl flex items-center justify-center">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">Delivery Elite</h3>
              <p className="font-medium opacity-80 mb-6">
                Sua pizza chega quente e impecável. Embalagens térmicas de alta tecnologia para manter a crocância.
              </p>
              <a 
                href="https://www.ifood.com.br/delivery/sao-paulo-sp/pizzaria-belissima-vila-ema/772ec807-55ea-46d6-8426-ddd6fe8f2f44"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-dark/20 hover:border-dark transition-all"
              >
                PEDIR PELO IFOOD <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Bento Grid Item 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass rounded-3xl p-10 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
              <Award className="text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Tradição Vila Ema</h3>
              <p className="text-white/60 text-sm">
                Referência em qualidade e sabor na região. Um ponto de encontro para os amantes da verdadeira pizza.
              </p>
            </div>
          </motion.div>

          {/* Bento Grid Item 4 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass rounded-3xl p-10 flex items-center gap-8 relative overflow-hidden group"
          >
            <div className="relative z-10 flex-1">
              <h3 className="text-3xl font-serif font-bold mb-4">Pizzas Doces</h3>
              <p className="text-white/60">
                Finalize sua experiência com nossas irresistíveis pizzas doces. Combinações perfeitas de chocolate, frutas e cremes artesanais.
              </p>
            </div>
            <div className="relative z-10 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" 
                className="w-48 h-48 object-cover rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500"
                alt="Pizza Doce"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511965485354&text&type=phone_number&app_absent=0";
  const highlights = [
    { name: 'Siciliana', desc: 'Molho pelati, mozzarella, champignon, bacon e orégano.', price: 'Premium', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80' },
    { name: 'Coreana', desc: 'Uma fusão ousada com ingredientes orientais selecionados, exclusividade da casa.', price: 'Exclusiva', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Baiana', desc: 'Calabresa moída, ovos, pimenta, cebola e um toque especial de temperos.', price: 'Clássica', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
    { name: 'Cubana', desc: 'Sabor tropical com ingredientes selecionados que remetem ao Caribe.', price: 'Especial', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section id="menu" className="py-32 px-6 bg-dark-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-6">SABORES QUE <br /> <span className="text-gold italic">ENCANTAM</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Explore dezenas de opções, desde as tradicionais até as nossas criações internacionais exclusivas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-gold text-dark font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider">
                  {item.price}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">{item.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-white/10 rounded-full hover:bg-white hover:text-dark transition-all font-bold"
          >
            PEDIR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "Pizzas muito bem recheadas e massa deliciosa. O atendimento é nota 10! A melhor da Vila Ema.", author: "Maria Oliveira", role: "Cliente Fiel" },
    { text: "Melhor pizzaria da região. A pizza chega sempre quentinha e os ingredientes são de primeira qualidade.", author: "João Silva", role: "Crítico Gastronômico" },
    { text: "A pizza doce de chocolate com morango é divina. Recomendo a todos que buscam uma experiência premium.", author: "Ana Costa", role: "Entusiasta Gourmet" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-gold text-gold" />)}
        </div>
        
        <div className="relative h-[200px] md:h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0"
            >
              <h2 className="text-2xl md:text-4xl font-serif font-medium italic leading-tight mb-8">
                "{reviews[activeIndex].text}"
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold font-bold">
                  {reviews[activeIndex].author[0]}
                </div>
                <div className="text-left">
                  <p className="font-bold">{reviews[activeIndex].author}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{reviews[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-gold' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-accent pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="https://clientefiel-historico.s3.us-east-1.amazonaws.com/dados_aplicativos/pizzaria_belissima/img_selo/20180411123639_img_selo.png" 
                alt="Logo Pizzaria Belíssima" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-3xl font-bold text-gold block">PIZZARIA BELÍSSIMA</span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Tradição e inovação na Vila Ema. Dezenas de sabores de pizzas artesanais e doces preparados com paixão e os melhores ingredientes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-gold">Localização</h4>
            <div className="space-y-4 text-white/60 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-gold" />
                Av. Vila Ema, 3177 - Vila Ema<br />São Paulo - SP, 03281-000
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                (11) 2216-7725
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-gold">Horários</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p className="flex justify-between"><span>Seg - Qui</span> <span>18:00 – 00:00</span></p>
              <p className="flex justify-between"><span>Sex - Sáb</span> <span>18:00 – 00:00</span></p>
              <p className="flex justify-between"><span>Dom</span> <span>18:00 – 23:58</span></p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2026 PIZZARIA BELÍSSIMA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold">Privacidade</a>
            <a href="#" className="hover:text-gold">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <AuthorityStrip />
        <Features />
        <MenuPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
