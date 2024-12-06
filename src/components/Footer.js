import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="text-white py-16 px-8 bg-[#1C2737]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo e Slogan */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/cefastlogo.png"
            alt="Logo Fórmula Cefast"
            width={150}
            height={150}
            className="w-24 sm:w-32"
          />
          <p className="mt-4 text-center text-sm">To be fast, be Cefast.</p>
        </div>

        {/* Navegação */}
        <div>
          <h2 className="font-bold mb-4 text-lg text-center sm:text-left">
            Navegação
          </h2>
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a href="/" className="hover:underline text-sm">
                Início
              </a>
            </li>
            <li>
              <a href="/prototipos" className="hover:underline text-sm">
                Protótipos
              </a>
            </li>
            <li>
              <a href="/sobre-nos" className="hover:underline text-sm">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="/patrocinadores" className="hover:underline text-sm">
                Patrocinadores
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:underline text-sm">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Sede NEAC */}
        <div>
          <h2 className="font-bold mb-4 text-lg text-center sm:text-left">
            Sede NEAC
          </h2>
          <p className="text-sm text-center sm:text-left">
            CEFET/MG - Campus II / Oficina NEAC <br />
            Av. Amazonas, 7675. <br />
            Belo Horizonte - MG, 30510-000
          </p>
        </div>

        {/* Fórmula Cefast */}
        <div>
          <h2 className="font-bold mb-4 text-lg text-center sm:text-left">
            Fórmula Cefast
          </h2>
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a href="/processo-seletivo" className="hover:underline text-sm">
                Processo Seletivo
              </a>
            </li>
            <li>
              <a
                href="/patrocinadores#torne-se-patrocinador"
                className="hover:underline text-sm"
              >
                Torne-se patrocinador
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha de Separação e Copyright */}
      <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-center sm:text-left mt-2 sm:mt-0">
          Projeto e Execução: Iago Santana
        </p>
        <p className="text-center sm:text-right mt-2 sm:mt-0">
          © 2024 Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
