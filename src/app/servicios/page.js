import style from "./style.module.css"
import Image from "next/image";
import { kanit, katibeh } from "../ui/fonts";
import Link from "next/link";
import Phone from "../ui/icons/phone";
import Mail from "../ui/icons/mail";

export default function Nosotros() {
  return (
    <div className={style.wrapper}>
        <div>
          <Image className={style.image} width={450} height={423} alt="main image" src="/servicios.png" />
        </div>
        <div className={style.text}>
            <h2 className={katibeh.className}>Servicios</h2>
            <div>
              <ul>
                <li><Link href="/servicios/aparatologia-cosmetica">APARATOLOGÍA COSMÉTICA</Link></li>
                <li><Link href="/servicios/biopsias">BIOPSIAS</Link></li>
                <li><Link href="/servicios/cardiologia">CARDIOLOGÍA</Link></li>
                <li><Link href="/servicios/chequeos-preventivos">CHEQUEOS PREVENTIVOS</Link></li>
                <li><Link href="/servicios/cirugia-plastica">CIRUGÍA PLÁSTICA</Link></li>
              </ul>
              <ul>
                <li><Link href="/servicios/laboratorio-clinico">EXAMENES DE LAB CLÍNICO</Link></li>
                <li><Link href="/servicios/gastroenterologia">GASTROENTEROLOGÍA</Link></li>
                <li><Link href="/servicios/ginecologia">GINECOLOGÍA</Link></li>
                <li><Link href="/servicios/imagenes">IMÁGENES</Link></li>
                <li><Link href="/servicios/inmunologia-y-alergia">INMULOGÍA Y ALERGIA</Link></li>
              </ul>
              <ul>
                <li><Link href="/servicios/laboratorio-de-patologia">LABORATORIO DE PATOLOGÍA</Link></li>
                <li><Link href="/servicios/medicina-general">MEDICINA GENERAL</Link></li>
                <li><Link href="/servicios/mesoterapia-y-reflexologia">MESOTERAPIA Y REFLEXOLOGÍA</Link></li>
                <li><Link href="/servicios/oncologia">ONCOLOGÍA</Link></li>
                <li><Link href="/servicios/para-ellos">PARA EL</Link></li>
              </ul>
              <ul>
                <li><Link href="/servicios/para-ellas">PARA ELLAS</Link></li>
                <li><Link href="#">TEST DE ALIENTO</Link></li>
                <li><Link href="/servicios/topico-y-farmacia">TÓPICO Y FARMACIA</Link></li>
              </ul>
            </div>
        </div>
    </div>
  );
}
