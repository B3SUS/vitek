import React, {useState} from "react";
import logo1 from "../img/logo1.png";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full absolute top-0 z-10 bg-transparent shadow-[0 0 0 -2px #000]">
            <div className="w-full box-border text-white">
                <div className="block absolute left-0 h-full">
                    <div className="box-border cursor-pointer flex h-full px-[18px] py-[12px] relative z-20 items-center text-[12px]">
                        <button onClick={toggleMenu} className="flex flex-col items-center justify-center focus:outline-none">
                            <div className={`mb-[4px] w-[17px] h-[3px] rounded-[1.5px] bg-white origin-top-left transform transition-all duration-600 ${isOpen ? 'rotate-[45deg] scale-x-[1.25] scale-y-60' : ''}`} />
                            <div className={`mb-[4px] w-[17px] h-[3px] rounded-[1.5px] bg-white transition-opacity duration-600 ${isOpen ? 'opacity-0' : ''}`} />
                            <div className={`mb-[4px] w-[17px] h-[3px] rounded-[1.5px] bg-white origin-bottom-left transform transition-all duration-600 ${isOpen ? '-rotate-[45deg] scale-x-[1.25] scale-y-60' : ''}`} />
                        </button>
                    </div>
                    <div className={` w-3/4 fixed top-0 bottom-0 left-0 z-10 bg-[#21284B] opacity-[0.83] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ul className="border-t border-t-[#484d53] border-solid mt-[55px] p-0 list-none text-center max-w-full max-h-screen text-[12px]">
                            <li className={`pt-[1.5em] px-[1em] opacity-60 text-[1.2em] block text-left`}
                            ><span className={`text-[.9rem] leading-[2.6em] block box-border text-white`}
                            >Qfaps</span></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <nav className="border-b border-b-white/[.2] border-solid flex justify-between text-center">
                    <a className="inline-block float-none mx-auto my-0 text-center relative py-[1.125em] px-0 whitespace-nowrap decoration-0">
                        <img src={logo1} alt={logo1}/></a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
