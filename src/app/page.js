import styles from "./page.module.css";
import Image from "next/image";
import { kanit, katibeh } from "./ui/fonts";
import ServiceCards from "./ui/service-cards/service-cards";

export default function Home() {
  return (
    <>
      <div className={styles.top__wrapper}>
        <div className={styles.text}>
          <h2 className={katibeh.className}>¡Bienvenidos!</h2>
          <p className={kanit.className}>La salud es el motor de una vida feliz, en vital salud center creamos un espacio integral de medicina preventiva donde detectamos a tiempo anomalías en tu salud, te brindamos tratamiento oportuno con los mejores médicos y tecnología de vanguardia, te brindamos el cuidado de tu salud con seguridad, calidad y la confianza que necesitas.</p>
        </div>
        <div>
          <Image width={444} height={550} alt="main image" src="/main.png" />
        </div>
      </div>
      <ServiceCards />
    </>
  );
}
