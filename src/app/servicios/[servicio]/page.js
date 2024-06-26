'use client'
import style from './style.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { katibeh } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';

export default function Servicio() {
    const pathname = usePathname()
    const data = [
        {
            href: "/servicios/para-ellas",
            src: "/content/para-ellas.jpg",
            title: "Paquete de prevención integral para ELLAS",
            list: [
                "• Evaluación médica",
                "• Test de aliento para Helicobacter Pylori",
                "• Papanicolaou",
                "• Colocación de vitamina C y B endovenosa",
                "• Test Molecular VPH",
                "• Ecografía ginecológica",
                "• Examen de laboratorio: Hgma, Perfil lipídico"
            ]
        },
        {
            href: "/servicios/para-ellos",
            src: "/content/para-el.jpg",
            title: "Paquete de prevención integral para EL",
            list: [
                "• Evaluación médica",
                "• Test de aliento para Helicobacter Pylori",
                "• Ecografía Abdominal",
                "• Colocación de vitamina C y B endovenosa",
                "• Examen de laboratorio: Hgma, Perfil lipídico"
            ]
        },
        {
            href: "/servicios/aparatologia-cosmetica",
            src: "/content/aparatologia-cosmetica.jpg",
            title: "Aparatología Cosmética",
            text: ["A cargo de médico y profesionales de salud capacitados realizan el servicio de uso mediante tecnologías avanzadas no invasivas como ultrasonido, electromagnéticas, ondas rusas para el moldeamiento corporal y reducción de medidas, cuidado y mejora de la piel."],
            list_title: "Brinda servicios de:",
            list: [
                "• Ultra cavitación",
                "• Ultrasonido",
                "• Radiofrecuencia",
                "• Ondas Rusas",
                "• Laser"
            ]
        },
        {
            href: "/servicios/laboratorio-de-patologia",
            src: "/content/laboratorio-de-patologia.jpg",
            title: "Laboratorio de patología",
            text: ["A cargo de un médico especialista en Anatomía Patológica, junto a un equipo multidisciplinario de profesionales de la salud como tecnología medica, técnico en laboratorio de Anatomía Patológica realizan el procesamiento, y el medico especialista a cargo el análisis de muestras obtenidas por exfoliación, biopsias incisionales, escicionales, dirigida a mujeres y varones con el finprevención, diagnóstico , manejo y pronóstico de patologías entre otros servicios."],
            list_title: "Diagnosticos como:",
            list: [
                "• Citopatología",
                "• Histología",
                "• Biopsias Con Aguja Fina",
                "• Inmunohistoquímica",
                "• Patología Molecular: PCR Para Papiloma Virus Humano"
            ]
        },
        {
            href: "/servicios/cardiologia",
            src: "/content/cardiologia.jpg",
            title: "Cardiología",
            text: ["A cargo de médicos especialistas en cardiología clínica, se realiza evaluación y tratamiento de las enfermedades del corazón, riesgo cardiovascular entre otros servicios:"],
            list: [
                "• Electrocardiograma EKG",
                "• Monitorización ambulatoria de presión arterial",
                "• Monitor Holter de 24 hrs",
                "• Levantamiento de observaciones de salud ocupacional"
            ]
        },
        {
            href: "/servicios/biopsias",
            src: "/content/biopsias.jpg",
            title: "Biopsias",
            list: [
                "• Con aguja fina",
                "• Con aguja gruesa",
                "• Mama",
                "• Hígado",
                "• Tiroidea",
                "• Ganglios"
            ]
        },
        {
            href: "/servicios/laboratorio-clinico",
            src: "/content/laboratorio-clinico.jpg",
            title: "Laboratorio clínico",
            list: [
                "• Toma de muestras séricas o biológicas",
                "• Análisis clínicos en Bioquímica : Hemograma completo, perfil renal, perfil lipídico, perfil coronario, otros",
                "• Análisis clínicos en hematología",
                "• Análisis clínicos en microbiología",
                "• Análisis clínicos en Inmunoserologia",
                "• Hemograma Completo - Perfil Lipídico - Perfil Renal -perfil coronario",
                "• Perfil Prequirúrgico"
            ]
        },
        {
            href: "/servicios/mesoterapia-y-reflexologia",
            src: "/content/mesoterapia-y-reflexologia.jpg",
            title: "Mesoterapia y reflexología",
            text: ["A cargo de una especialista técnica en fisioterapia encargada de terapias corporales que alivian el estrés y promueven el bienestar físico y mental."],
            list_title: "Brinda los Servicios:",
            list: [
                "• Toma de muestras séricas o biológicas",
                "• Análisis clínicos en Bioquímica : Hemograma completo, perfil renal, perfil lipídico, perfil coronario, otros",
                "• Análisis clínicos en hematología",
                "• Análisis clínicos en microbiología",
                "• Análisis clínicos en Inmunoserologia",
                "• Hemograma Completo - Perfil Lipídico - Perfil Renal -perfil coronario",
                "• Perfil Prequirúrgico"
            ]
        },
        {
            href: "/servicios/topico-y-farmacia",
            src: "/content/topico-y-farmacia.jpg",
            title: "Tópico y farmacia",
            text: [
                "A cargo de una química farmacéutica encontrarás todas las marcas y productos de medicina al mejor precio. Contamos con diversas categorías de línea respiratoria, urológica, digestiva, cardiometabólica, analgésicaantiinflamatoria, salud mental y salud antiinfecciosa, vitaminas y cuidados de la piel, también disponemos con venta de material médico, entre otros.",
                "A cargo un médico y profesional de salud, licenciada en enfermería especialista en cuidados integral, paciente pediátrico y adulto. Brindan servicios en reposición de volumen-hidratación E.V, administración e tratamiento y manejo del dolor, administración de tratamiento intramuscular, control de glucosa capilar, retiro de puntos, curación de heridas, nebulizaciones, colocación de sonda nasogástrica, sonda Fowley y aperturas y mantenimiento de dispositivos invasivos: catéter Port, Picc line, catéter venoso central, control de presión arterial."
            ],
        },
        {
            href: "/servicios/imagenes",
            src: "/content/imagenes.jpg",
            title: "Imágenes",
            text: ["A cargo de un médico especialista en Radiodiagnóstico, junto a un equipo multidisciplinario de profesionales de la salud realizan el procesamiento de obtención de imágenes con fines diagnósticos, entre otros servicios como:"],
            list: [
                "• Ecografía de Cabeza Y Cuello, Ecografía de Abdomen, Ecografía de Renal, Ecografía de Próstata, Ecografía de Obstétricas, Ecografía de Musculoesqueléticas, entre otros",
                "• Biopsias por aspiración con aguja fina",
                "• Biopsias por aspiración con aguja gruesa – Trucut – Core",
                "• Drenajes",
                "• Ecografia 3D",
                "• Ecografía Doppler"
            ]
        },
        {
            href: "/servicios/oncologia",
            src: "/content/oncologia.jpg",
            title: "Oncología",
            text: ["A cargo de un médico especialista en Oncología, se realiza consulta médica ambulatoria dirigida a mujeres y varones en prevención, diagnóstico y tratamiento de patologías oncológicas entre otros servicios como:"],
            list: [
                "• Examen de descarte medico anual",
                "• Tratamiento",
                "• Seguimiento y control",
                "• Consultoría"
            ]
        },
        {
            href: "/servicios/inmunologia-y-alergia",
            src: "/content/inmunologia-y-alergia.jpg",
            title: "Inmunología y alergia",
            text: ["A cargo de un médico especialista en Inmunología y Alergia, realiza consulta medica ambulatoria dirigida a adultos y niños en diagnóstico de alergia respiratoria y alimentaria, entre otros séricos como:"],
            list: [
                "• Pruebas cutáneas de alergia a medicamentos",
                "• Pruebas cutáneas de alergenos ambientales (panel de 15)",
                "• Pruebas cutáneas de alergenos a alimentos (panel de 20)",
                "• Desensibilización"
            ]
        },
        {
            href: "/servicios/gastroenterologia",
            src: "/content/gastroenterologia.jpg",
            title: "Gastroenterología",
            text: ["A cargo de médicos especialistas en Gastroenterología, que realizan consulta médica ambulatoria dirigido a adultos en prevención, diagnostico y tratamiento de patologías gastrointestinales, entre otros servicios:"],
            list: [
                "• Endoscopia",
                "• Colonoscopia",
                "• Balón Gástrico",
                "• Detección de Helicobacter pylori por test del aliento"
            ]
        },
        {
            href: "/servicios/chequeos-preventivos",
            src: "/content/chequeos-preventivos.jpg",
            title: "Chequeos preventivos",
            text: ["Un chequeo médico anual es una visita médica preventiva enfocada en buscar situaciones de salud y detectarlas antes de que se manifiesten. En ella puedes discutir cualquier duda o inquietud que tengas sobre tu salud, y recibir consejos de tu médico de cuidado primario."],
        }
    ]

    return (
        <div>
            {
                data.filter(item => item.href === pathname).map((item) => {
                    return (
                        <div className={style.wrapper} key={item.href}>
                            <div className={style.text}>
                                <h2 className={katibeh.className}>{item.title}</h2>
                                {
                                    item.text && item.text.map((text, index) => (
                                        <p className={inter.className} key={index}>{text}</p>
                                    ))
                                }
                                {item.list && (
                                    <>
                                        <p className={style.list_title}>{item.list_title}</p>
                                        <ul>
                                            {item.list.map((listItem, index) => (
                                                <li className={inter.className} key={index}>{listItem}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <Image className={style.image} width={428} height={700} src={item.src} alt={item.title} />
                        </div>
                    )
                })
            }
        </div>
  );
}
