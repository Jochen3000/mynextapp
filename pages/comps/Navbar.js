import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={321} height={50} />
            </div>
            <div className={router.pathname == "/" ? "active" : ""}>
                <Link href='/'><a>Home</a></Link>
            </div>
            <div className={router.pathname == "/about" ? "active" : ""}>
                <Link href='/about'><a>About</a></Link>
            </div>
            <div className={router.pathname == "/events" ? "active" : ""}>
                <Link href='/events'><a>Events</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;