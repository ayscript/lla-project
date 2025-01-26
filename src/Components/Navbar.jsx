import logo from "../assets/img/Linkdin-local_logo.png";

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between bg-secondary sticky px-4 w-full">
            <div className=" flex items-center w-[60px] h-[52px]">
                <img src={logo} alt="logo"/>
            </div>
            <div className="flex items-center pr-5">
                <i className="fa-solid fa-bars text-2xl"></i>
            </div>
        </nav>
    )
}

export default Navbar;