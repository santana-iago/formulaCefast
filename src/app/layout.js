import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../app/styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Scroll from "../components/SmoothScroll";

config.autoAddCss = false;

export const metadata = {
  title: "Fórmula Cefast",
  description: "Site oficial da equipe Fórmula Cefast",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className="font-lato">
        <Scroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Scroll>
      </body>
    </html>
  );
}
