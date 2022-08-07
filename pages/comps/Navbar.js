import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter();
    return (
        <nav>
            <div className="logo">
                <h1>List</h1>
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