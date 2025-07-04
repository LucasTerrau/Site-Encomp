
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programacao from '@/components/Programacao';
import Gallery from '@/components/Gallery';
import Minicursos from '@/components/Minicursos';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import FormPatrocinio from '@/components/FormPatrocinio';
import FormRegistro from '@/components/FormRegistro';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-before');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-encomp-black text-white font-roboto">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Programacao />
      <Minicursos />
      <FormRegistro />
      <FormPatrocinio />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
