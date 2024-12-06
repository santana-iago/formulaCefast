"use client";

import React, { useState } from "react";
import Link from "next/link";

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
];

export default function PrototiposPage() {
  const [selectedId, setSelectedId] = useState("es14");

  return (
    <div
      className="w-full p-8"
      style={{ backgroundColor: "#fafafa", minHeight: "180vh" }}
    >
      {/* Linha do Tempo */}
      <div className="flex items-center justify-between mb-8 relative overflow-x-auto">
        {/* Linha conectando os círculos */}
        <div className="absolute top-1/2 w-full h-1 bg-[#415A7E] -z-10"></div>

        {prototipos.map((carro) => (
          <div
            key={carro.id}
            className="flex flex-col items-center relative min-w-[60px]"
          >
            <Link href={`/prototipos/${carro.id}`}>
              <div
                onClick={() => setSelectedId(carro.id)}
                className={`relative cursor-pointer w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2 ${
                  selectedId === carro.id
                    ? "bg-[#AC0404] scale-125"
                    : "bg-[#1C2737] hover:bg-[#AC0404] hover:scale-125"
                }`}
                style={{ transition: "transform 0.3s ease-in-out" }}
                title={`Ver detalhes do ${carro.name}`}
              >
                {/* Ícone do Troféu para vencedores */}
                {carro.winner && (
                  <span
                    className="absolute text-yellow-500"
                    style={{ fontSize: "2rem" }}
                  >
                    🏆
                  </span>
                )}
              </div>
            </Link>
            {/* Nome do Modelo com Fonte Maior */}
            <span className="text-black text-sm md:text-base font-semibold">
              {carro.name}
            </span>
          </div>
        ))}
      </div>

      {/* Informações do Protótipo Selecionado */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-2xl font-bold text-[#AC0404] mb-2">
            ES14
          </h1>
          <p className="text-[#737A85] text-sm md:text-base ml-4">
            Foi um dos carros construídos mais rapidamente na história da equipe,
            com apenas 2 meses de manufatura. Ele participou da 20ª competição de
            Fórmula SAE Brasil, onde conquistou o 1º lugar na prova de design, 1º
            lugar na prova de aceleração, 1º lugar na prova de Autocross, 1º lugar
            na prova de enduro e 1º lugar na classificação geral. Pesando 210 kg e
            com mudanças significativas, como a troca dos pneus de 18” para 16”,
            uma revisão completa do pacote aerodinâmico, ganho de 10 cavalos e novos
            projetos de suspensão, freio e transmissão, o ES14 se tornou o novo
            detentor do recorde brasileiro na prova de aceleração, completando em
            3,84 segundos.
          </p>
          <Link href="/prototipos/es14">
            <button className="mt-4 bg-[#AC0404] text-white py-2 px-6 md:px-10 rounded-lg hover:bg-red-700">
              Conheça o time do ES14
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/images/es14.webp"
            alt="ES14"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Especificações do Protótipo */}
      <div
        className="mt-16 bg-[#1C2737] text-white p-6 sm:p-12 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
        style={{
          width: "100vw", // Expande a div para ocupar toda a largura da janela
          marginLeft: "calc(-50vw + 50%)", // Alinha a div ao centro enquanto ocupa 100% da largura
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">⏱️</span>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">
              ACELERAÇÃO
            </h3>
            <p className="text-xs sm:text-sm">0-70km/h em 3.54s</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">⚙️</span>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">
              POTÊNCIA DO MOTOR
            </h3>
            <p className="text-xs sm:text-sm">130 CV</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">⚖️</span>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">PESO</h3>
            <p className="text-xs sm:text-sm">210 kg</p>
          </div>
        </div>
      </div>

      {/* Espaço para futuras informações */}
      <div style={{ height: "200px", backgroundColor: "#fafafa" }}></div>
    </div>
  );
}
