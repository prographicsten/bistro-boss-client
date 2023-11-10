import { Link } from "react-router-dom";

const NavBar = () => {

    const navOptions = <>
        <li><Link className=" lg:text-white hover:text-red-600 lg:font-medium">Item 1</Link></li>
        <li><Link className=" lg:text-white hover:text-red-600 lg:font-medium">Item 3</Link></li>
    </>

    return (
        <>
            <div className=" max-w-screen-xl mx-auto fixed z-10 bg-opacity-20 navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" space-y-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                    </div>
                    <Link className=" text-white text-lg md:text-2xl lg:text-3xl font-bold">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Button</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;