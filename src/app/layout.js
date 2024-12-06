import React from "react";
import "../app/styles/globals.css"; // Importação do CSS global do projeto
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importação do CSS do FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head"; // Importando o componente Head para Next.js

config.autoAddCss = false; // Previne o carregamento automático do CSS, ideal para Next.js

import Navbar from "../components/Navbar"; // Importar a Navbar
import Footer from "../components/Footer"; // Importar o Footer

export const metadata = {
  title: "Fórmula Cefast",
  description: "Site oficial da equipe Fórmula Cefast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-lato">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
