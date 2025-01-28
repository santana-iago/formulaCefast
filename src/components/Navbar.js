"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar dinâmica
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Evita scroll ao abrir o menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const links = ["Início", "Protótipos", "Sobre Nós", "Patrocinadores", "Contato"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[#1C2737] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image
            src="/images/cefastlogo.png"
            alt="Logo Fórmula Cefast"
            width={140}
            height={140}
            className="max-h-16"
          />
        </div>

        {/* Botão do Menu Responsivo */}
        <button
          aria-label="Abrir menu"
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Links Desktop */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase().replace(" ", "-")}`}
              className="text-white hover:text-gray-400 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Menu Overlay Centralizado */}
      {menuOpen && (
<div
  className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-95 z-50"
  aria-modal="true"
  role="dialog"
>
<div className="relative w-full max-w-xs h-auto bg-[#1C2737] rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
      {/* Botão Fechar */}
            <button
              aria-label="Fechar menu"
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Links do Menu */}
            <ul className="flex flex-col items-center space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white text-lg font-medium hover:text-gray-400 transition-transform duration-300 hover:scale-105"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ícones Sociais */}
            <div className="flex space-x-6 mt-4">
              <a href="https://www.instagram.com/formulacefast" className="text-white text-2xl hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/formulacefast" className="text-white text-2xl hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://youtube.com/formulacefast" className="text-white text-2xl hover:text-gray-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
