import style from "./style.module.css"
import Image from "next/image";
import { kanit, katibeh } from "../ui/fonts";
import Phone from "../ui/icons/phone";
import Mail from "../ui/icons/mail";

export default function Nosotros() {
  return (
    <div className={style.wrapper}>
        <div>
          <Image width={500} height={360} alt="main image" src="/contacto.png" />
        </div>
        <div className={style.text}>
            <h2 className={katibeh.className}>Contáctanos</h2>
            <ul>
                <li className={kanit.className}>
                    <Phone width={50} height={50} />
                    <p>938 571 905</p>
                </li>
                <li className={kanit.className}>
                    <Mail width={50} />
                    <p>vitalsalud.center24@gmail.com</p>
                </li>
                <li className={kanit.className}>
                    <p>¡O escríbenos a nuestras redes sociales!</p>
                </li>
            </ul>
        </div>
      </div>
  );
}
