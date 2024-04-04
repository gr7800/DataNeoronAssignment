import { Link, useLocation, useNavigate } from 'react-router-dom'
import dataneronlogo from "../../utills/images/datanerornlogo.png"

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location?.pathname)

    return (
        <nav className="bg-white shadow-xl">
            <div className="mx-auto px-4 py-3 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img
                            src={dataneronlogo}
                            alt="Logo"
                            className="w-24 h-auto"
                        />
                    </Link>
                </div>
                <div>
                    <Link
                        to="resizable"
                        className={`px-4 py-2 text-black ${location.pathname === "/resizable" ? "text-red-500" : ""
                            }`}
                    >
                        Resizable Box
                    </Link >
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
