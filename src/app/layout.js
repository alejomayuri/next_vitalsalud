'use client'

import { inter } from "./ui/fonts";
import "./globals.css";
import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FacebookFooter from "./ui/icons/facebook_f";
import InstagramFooter from "./ui/icons/instagram_f";
import WhatsAppFooter from "./ui/icons/whatsapp_f";
import MailFooter from "./ui/icons/mail_f";
import Pin from "./ui/icons/pin";
import { kanit } from "./ui/fonts";
import Menu from "./ui/icons/menu";
import Close from "./ui/icons/close";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [menu, setMenu] = useState(false);
  const handleOpen = () => setMenu(!menu);

  const deviceWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vital Salud Center</title>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={inter.className}>
        <header className={style.header}>
          <Link href="/">
            <Image className={style.logo_l} width={488} height={140} src="/logo-b.png" alt="Logo" />
            <Image className={style.logo_m}  width={300} height={86} src="/logo-b.png" alt="Logo" />
            <Image className={style.logo_s} width={200} height={50} src="/logo-b.png" alt="Logo" />
          </Link>
          <nav  className={style.movDesktop} style={{
            display: menu ? "flex" : "none",
          }}>
            <ul>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contáctanos</Link>
              </li>
            </ul>
          </nav>
          <nav className={style.navDesktop}>
            <ul>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contáctanos</Link>
              </li>
            </ul>
          </nav>
          {!menu ? <Menu onClick={handleOpen} width={30} height={30} className={style.hamburguer}/> : <Close onClick={handleOpen} width={30} height={30} className={style.hamburguer}/>}
        </header>
        <main>{children}</main>
        <footer className={style.footer}>
          <div>
            <div className={style.topFooter}>
              <Link href="/">
                <Image className={style.logo_l} width={488} height={120} src="/logo-w.png" alt="Logo" />
                <Image className={style.logo_m} width={300} height={70} src="/logo-w.png" alt="Logo" />
                <Image className={style.logo_s} width={200} height={50} src="/logo-w.png" alt="Logo" />
              </Link>
              <div>
                <p className={kanit.className}>REDES SOCIALES</p>
                <Link href="https://www.facebook.com/profile.php?id=61558309880308&amp;mibextid=LQQJ4d"><FacebookFooter width={deviceWidth  > 796 ? 58 : 30} height={deviceWidth  > 796 ? 58 : 30}/></Link>
                <Link href="https://www.instagram.com/vital_salud_center_?igsh=ZWdlbjljcmNvbDM1"><InstagramFooter width={deviceWidth  > 796 ? 58 : 30} height={deviceWidth  > 796 ? 58 : 30}/></Link>
                <Link href="https://wa.me/938571905?text=Hola%20quiero%20más%20información"><WhatsAppFooter width={deviceWidth  > 796 ? 58 : 30} height={deviceWidth  > 796 ? 58 : 30}/></Link>
                <Link href="mailto:vitalsalud.center24@gmail.com?subject=Consulta"><MailFooter width={deviceWidth  > 796 ? 58 : 30} height={deviceWidth  > 796 ? 58 : 30}/></Link>
              </div>
            </div>
            <div className={style.bottomFooter}>
              <Pin className={style.logo_l} width={51} height={67}/>
              <Pin className={style.logo_m} width={25} height={33}/>
              <p>Av. Petit Thouars 3547, San Isidro</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
