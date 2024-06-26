import style from "./style.module.css"
import Link from "next/link"
import Cruz from "../icons/cruz"
import Doctor from "../icons/doctor"
import Phone from "../icons/phone"

const services = [
    {
        id: 1,
        title: "SERVICIOS",
        icon: <Cruz width={150} height={150} />,
        href: "/servicios"
    },
    {
        id: 2,
        title: "NOSOTROS",
        icon: <Doctor />,
        href: "/nosotros"
    },
    {
        id: 3,
        title: "CONTÁCTANOS",
        icon: <Phone width={130} height={130} />,
        href: "/contacto"
    }
]

const ServiceCards = () => {
    return (
        <div className={style.wrapper}>
            {services.map((service) => (
                <Link href={service.href} key={service.id}>
                    <div className={style.card} key={service.id}>
                        <div>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ServiceCards