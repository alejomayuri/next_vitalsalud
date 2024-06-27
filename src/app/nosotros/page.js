import style from "./style.module.css"
import Image from "next/image";
import { kanit, katibeh } from "../ui/fonts";

export default function Nosotros() {
  return (
    <div className={style.wrapper}>
        <div>
          <Image className={style.image} width={374} height={400} alt="main image" src="/nosotros.png" />
        </div>
        <div className={style.text}>
          <h2 className={katibeh.className}>Sobre Nosotros</h2>
          <p className={kanit.className}>Somos un centro médico especializado en medicina preventiva y diagnóstica, te brindamos un tratamiento oportuno con médicos especialistas y tecnología de vanguardia, con la seguridad, calidad y confianza que necesitas en el cuidado de tu salud.</p>
        </div>
      </div>
  );
}
