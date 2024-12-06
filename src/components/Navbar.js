"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-[#1C2737]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/cefastlogo.png"
            alt="Logo Fórmula Cefast"
            width={140}
            height={140}
            className="h-12"
          />
        </div>

        {/* Botão do Menu Mobile */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links de Navegação */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#1C2737] md:bg-transparent z-50 md:z-auto p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
        >
          <a
            href="/"
            className="block text-white text-base transition duration-300 ease-in-out hover:text-gray-400"
          >
            Início
          </a>
          <a
            href="/prototipos"
            className="block text-white text-base transition duration-300 ease-in-out hover:text-gray-400"
          >
            Protótipos
          </a>
          <a
            href="/sobre-nos"
            className="block text-white text-base transition duration-300 ease-in-out hover:text-gray-400"
          >
            Sobre Nós
          </a>
          <a
            href="/patrocinadores"
            className="block text-white text-base transition duration-300 ease-in-out hover:text-gray-400"
          >
            Patrocinadores
          </a>
          <a
            href="/contato"
            className="block text-white text-base transition duration-300 ease-in-out hover:text-gray-400"
          >
            Contato
          </a>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.instagram.com/formulacefast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/formulacefast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://youtube.com/formulacefast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
