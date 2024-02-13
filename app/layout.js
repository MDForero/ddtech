import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });



export const links = [
  { name: "Inicio", url: "/" },
  { name: "Nosotros", url: "/nosotros" },
  { name: "Servicios", url: "/servicios" },
  { name: "Contacto", url: "/contacto" },
];

export const redes = [
  { name: "Facebook", url: "https://www.facebook.com", svg: '/images/svg/facebook.svg' },
  { name: "Instagram", url: "https://www.instagram.com", svg: '/images/svg/instagram.svg' },
  { name: "Twitter", url: "https://www.twitter.com", svg: '/images/svg/whatsapp.svg' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative z-50">
          <Nav links={links} />
        </header>
        <div>
          <section className="max-w-screen-2xl mx-auto flex flex-col space-y-36 items-center justify-center w-full">

            {children}
          </section>
          <footer>
            <Footer paginas={links}/>
          </footer>
        </div>
      </body>
    </html>
  );
}
