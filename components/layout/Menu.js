import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className=""><Link href="/">HOME</Link>
                    {/* <ul>
                        <li><Link href="/">Home Business</Link></li>
                        <li><Link href="/index-2">Home Consulting</Link></li>
                        <li><Link href="/index-3">Home Corporate</Link></li>
                        <li><Link href="/index-4">Home Software</Link></li>
                        <li><Link href="/index-5">Home Finance</Link></li>
                        <li><Link href="/index-6">Home Law Firm</Link></li>
                        <li><Link href="/index-7">Home Insurance</Link></li>
                        <li><Link href="/index-8">Home Psychologist</Link></li>
                        <li><Link href="/index-9">Home Auto Repai</Link></li>
                        <li><Link href="/index-10">Home Movers and Packers</Link></li>
                        <li><Link href="/index-11">Home Visa Consultant</Link></li>
                        <li><Link href="/index-12">Home Online Course</Link></li>
                        <li><Link href="/index-13">Home Construction</Link></li>
                        <li><Link href="/index-14">Home Architecture</Link></li>
                        <li><Link href="/index-15">Home Digital Agency</Link></li>
                    </ul> */}
                </li>
                <li className=""><Link href="/about-1">ABOUT US</Link>
                </li>
                <li className="dropdown"><Link href="#">SERVICES</Link>
                    <ul>
                        {/* <li><Link href="/services">Our All Services</Link></li> */}
                        <li><Link href="/caregiver-training">Caregiver Training</Link></li>
                        <li><Link href="/homecare-training">Homecare Training</Link></li>
                        <li><Link href="/predeparture-training">Pre-departure Training</Link></li>
                        <li><Link href="/leadership-training">Leadership Training</Link></li>
                        <li><Link href="/customer-service-training">Customer Service Training</Link></li>
                        <li><Link href="/recruitment-services">Recruitment Services</Link></li>
                    </ul>
                </li>
                <li className=""><Link href="/faq">FAQ</Link>
                </li>
                <li className=""><Link href="/contact-1">CONTACT US</Link>
                </li>  
            </ul>
        </>
    )
}
