import "../app/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scroll from "../components/SmoothScroll";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


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
