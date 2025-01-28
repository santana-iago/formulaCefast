"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faCog,
  faWeightHanging,
  faAnglesRight,
  faAnglesDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const prototipos = [
  { id: "es14", name: "ES14", winner: true },
  { id: "es13", name: "ES13", winner: true },
  { id: "es12b", name: "ES12B", winner: true },
  { id: "es12a", name: "ES12A", winner: true },
  { id: "es11", name: "ES11", winner: false },
  { id: "es10", name: "ES10", winner: true },
  { id: "es09", name: "ES09", winner: false },
  { id: "es08", name: "ES08", winner: false },
  { id: "es07b", name: "ES07B", winner: false },
  { id: "es06", name: "ES06", winner: false },
  { id: "es05", name: "ES05", winner: false },
  { id: "es04", name: "ES04", winner: false },
  { id: "es03", name: "ES03", winner: false },
  { id: "es02", name: "ES02", winner: false },
  { id: "es01", name: "ES01", winner: false },
  { id: "es00", name: "ES00", winner: false },
  { id: "es99", name: "ES99", winner: false },
];

export default function PrototiposPage() {
  const [selectedId, setSelectedId] = useState("es14");
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.style.scrollBehavior = "smooth";
    }
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full pt-8 bg-[#fafafa] min-h-screen mt-20 md:mt-18">
      {/* Linha do Tempo */}
      <div className="mb-6 relative flex items-center justify-center gap-4">
        {/* Botão Esquerdo */}
        <button
          className="absolute left-16 top-6 transform -translate-y-1/2 text-[#1C2737] hover:text-[#AC0404] transition"
          onClick={handleScrollLeft}
          aria-label="Scroll Left"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>

        {/* Conteúdo da Linha do Tempo */}
        <div
          className="relative flex items-center gap-4 overflow-x-scroll scroll-smooth"
          ref={scrollRef}
          style={{ width: "75%" }}
        >
{/* Linha conectando os círculos */}
<div
  className="absolute bg-gray-400"
  style={{
    height: "4px", // Espessura da linha
    top: "50%", // Centraliza no ponto médio vertical dos círculos
    left: "0", // Alinha à esquerda do contêiner
    width: `${prototipos.length * 140}px`, // Tamanho dinâmico baseado na quantidade de círculos
    transform: "translateY(-50%)",
    zIndex: 0,
  }}
></div>


          <div
            className="relative flex items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24"
            role="scrollbar"
            aria-label="Linha do tempo dos protótipos"
          >
            {prototipos.map((carro) => (
              <div
                key={carro.id}
                className="relative flex flex-col items-center z-10"
              >
                <Link
                  href={`/prototipos/${carro.id}`}
                  aria-label={`Ver detalhes do ${carro.name}`}
                >
                  <div
                    onClick={() => setSelectedId(carro.id)}
                    className={`relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300
                      ${
                        selectedId === carro.id
                          ? "bg-[#AC0404] scale-110"
                          : "bg-[#1C2737] hover:bg-[#AC0404] hover:scale-110"
                      }`}
                    title={`Ver detalhes do ${carro.name}`}
                  >
                    {carro.winner && (
                      <span
                        className="text-yellow-500 text-xs sm:text-sm md:text-base"
                        aria-hidden="true"
                      >
                        🏆
                      </span>
                    )}
                  </div>
                </Link>
                <span className="text-black text-xs sm:text-sm md:text-base font-bold mt-2">
                  {carro.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Direito */}
        <button
          className="absolute right-16 top-6 transform -translate-y-1/2 text-[#1C2737] hover:text-[#AC0404] transition"
          onClick={handleScrollRight}
          aria-label="Scroll Right"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>

      {/* Informações do Protótipo Selecionado */}
      <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#AC0404] mb-4 px-4 sm:px-6 md:px-8">
            ES14
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#737A85] px-6 sm:px-10">
            Foi um dos carros construídos mais rapidamente na história da equipe,
            com apenas 2 meses de manufatura. Pesando 210 kg e com mudanças
            significativas, como a troca dos pneus de 18” para 16”, uma revisão
            completa do pacote aerodinâmico, ganho de 10 cavalos e novos projetos
            de suspensão, freio e transmissão, o ES14 se tornou o novo detentor do
            recorde brasileiro na prova de aceleração, completando em 3,84
            segundos.
          </p>
        </div>
        <div className="lg:w-1/2 px-4 sm:px-10 md:px-16">
          <img
            src="/images/es14.webp"
            alt="Imagem do protótipo ES14"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* Especificações */}
      <div className="w-screen mt-6 bg-[#1C2737] text-white py-6 px-2 sm:px-6 md:px-10">
        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <h3 className="text-xl sm:text-2xl font-bold">Especificações</h3>
            <p className="text-lg sm:text-xl font-bold">do protótipo</p>
          </div>
          <FontAwesomeIcon icon={faAnglesDown} className="text-2xl sm:text-3xl text-white" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 mt-6 px-6">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faGauge} className="text-3xl text-white" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">3.84 S</h3>
                <p className="text-base text-[#D72323] font-bold">ACELERAÇÃO</p>
                <p className="text-base text-[#D72323] font-bold">0-100KM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCog} className="text-3xl text-white" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">90 CV</h3>
                <p className="text-base text-[#D72323] font-bold">POTÊNCIA DO MOTOR</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faWeightHanging} className="text-3xl text-white" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">210 KG</h3>
                <p className="text-base text-[#D72323] font-bold">PESO DO PROTÓTIPO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold">Especificações do protótipo</h3>
            <FontAwesomeIcon icon={faAnglesRight} className="text-3xl text-white" aria-hidden="true" />
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faGauge} className="text-3xl text-white" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">3.84 S</h3>
                <p className="text-base text-[#D72323] font-bold">ACELERAÇÃO</p>
                <p className="text-base text-[#D72323] font-bold">0-100KM</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCog} className="text-3xl text-white" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">90 CV</h3>
                <p className="text-base text-[#D72323] font-bold">POTÊNCIA DO MOTOR</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faWeightHanging} className="text-3xl text-white" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">210 KG</h3>
                <p className="text-base text-[#D72323] font-bold">PESO DO PROTÓTIPO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conquistas */}
      <div className="mt-10 pb-10 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-[#1C2737]">
          CONQUISTAS DA TEMPORADA 2024
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="../images/es14-1.webp" alt="Premiação Fórmula SAE Brasil" className="w-full h-16 sm:h-24 object-cover" loading="lazy" />
            <div className="p-2">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#AC0404] mb-1">
                FORMULA SAE BRASIL
              </h3>
              <ul className="text-[#737A85] text-xs sm:text-sm md:text-base leading-relaxed">
                <li>🏆 1º lugar - Design</li>
                <li>🏆 1º lugar - Aceleração</li>
                <li>🏆 1º lugar - Autocross</li>
                <li>🏆 1º lugar - Enduro</li>
                <li>🏆 1º lugar - Classificação Geral</li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="../images/es14-2.webp" alt="Quebra de Recorde Brasileiro" className="w-full h-16 sm:h-24 object-cover" loading="lazy" />
            <div className="p-2">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#AC0404] mb-1">
                QUEBRA-RECORDES
              </h3>
              <p className="text-[#737A85] text-xs sm:text-sm md:text-base leading-relaxed">
                ES14 tornou-se o novo detentor do <strong>recorde brasileiro</strong> na prova de aceleração,
                completando o trajeto em impressionantes <strong>3.84 segundos</strong>.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="../images/es14-3.webp" alt="Equipe do ES14" className="w-full h-16 sm:h-24 object-cover" loading="lazy" />
            <div className="p-2">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#AC0404] mb-1">
                TEAMWORK E INOVAÇÃO
              </h3>
              <p className="text-[#737A85] text-xs sm:text-sm md:text-base leading-relaxed">
                Construído em apenas <strong>2 meses</strong>, o ES14 destaca o esforço da equipe em inovação,
                excelência em engenharia e busca por resultados históricos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
