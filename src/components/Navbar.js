import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LanguageSwitcher} from "./LanguageSwitcher";
import i18n from "../i18n";
import logo from "../img/logo.svg"
import logo1 from "../img/logo1.svg"
import logo2 from "../img/logo2.svg"
import logo3 from "../img/logo3.svg"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header w-full fixed top-0 z-10  shadow-[0 0 0 -2px #000] ${isScrolled? 'bg-[#0c0d16]' : 'bg-transparent'} font-[Mont]`}>
            <div className="wrapper w-full box-border text-white">
                {/*<div className="left-menu-wrap block absolute left-0 h-full" style={{zIndex:999}}>
                    <div className="left-menu-btn box-border flex h-full py-[1em] px-[1.5em] relative z-50 items-center text-[12px]">
                        <div onClick={toggleMenu} className="h-[17px] w-[17px] cursor-pointer text-white">
                            <div className={`mb-[4px] w-[17px] h-[3px] rounded-[1.5px] bg-white origin-top-left transform transition-all duration-600 ${isOpen ? 'rotate-[45deg] scale-x-[1.25] scale-y-60' : ''}`} />
                            <div className={`mb-[4px] w-[17px] h-[3px] rounded-[1.5px] bg-white transition-opacity duration-600 ${isOpen ? 'opacity-0' : ''}`} />
                            <div className={`mb-[4px] w-[17px] h-[3px] rounded-[1.5px] bg-white origin-bottom-left transform transition-all duration-600 ${isOpen ? '-rotate-[45deg] scale-x-[1.25] scale-y-60' : ''}`} />
                        </div>
                    </div>
                    <div className={` w-3/4 fixed h-screen top-0 left-0 z-40 bg-[#21284B] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ul className="border-t border-t-[#484d53] border-solid mt-[55px] p-0 list-none text-center max-w-full max-h-screen text-[12px]">
                            <li className={`pt-[1.5em] px-[1em] opacity-60 text-[1.2em] block text-left`}
                            ><span className={`text-[.9rem] leading-[2.6em] block box-border text-white`}
                            >Qfaps</span></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>*/}
                <nav className="flex items-center h-[45px] border-b border-b-white/[.2] border-solid text-center text-[12px] pb-[1px]">
                    <div className="flex justify-center items-center mx-auto my-0 relative px-0 whitespace-nowrap decoration-0">
                        <Link to={`/`}><img className={'w-[250px] h-[45px]'} src={logo3}/></Link>
                    </div>
                    <LanguageSwitcher/>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
