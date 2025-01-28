'use client'
import Image from 'next/image';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SimpleSlider from './carousel';

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-header-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Conheça nosso time</h1>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-left">Nossa História</h2>
          <p className="text-md leading-relaxed text-left mb-8">
            A equipe Fórmula Cefast foi fundada por alunas do curso de Engenharia Mecânica no ano de 2005, inicialmente com nome de Equipe Atena. Desde então ganha, cada vez mais, grande destaque por seus projetos e resultados.
            Os protótipos são nomeados com a sigla ES, em homenagem ao professor Eduardo Schirm, que sempre apoiou os estudantes e ajudou na concepção do projeto.
          </p>
          <div className="flex justify-between mt-8">
            <div className="text-center">
              <p className="text-6xl font-bold text-red-600">45</p>
              <p className="text-4sm text-red-600">MEMBROS</p>
              <p className="text-sm">apaixonados por competir</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-red-600">20</p>
              <p className="text-4sm text-red-600">PROJETOS</p>
              <p className="text-sm">de carros completos</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-red-600">30</p>
              <p className="text-4sm text-red-600">CONQUISTAS</p>
              <p className="text-sm">em competições pelo mundo</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <Image
            src="/path-to-image.jpg"
            alt="Team History"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-16 lg:px-32">
        <h2 className="text-4xl font-bold mb-6 text-center">Veja um pouco da nossa história</h2>
        <div className="w-full max-w-5xl mx-auto">
        <SimpleSlider>
          
        </SimpleSlider>
        </div>
      </section>
    </div>
  );
}
