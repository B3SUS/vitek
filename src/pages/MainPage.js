import React from "react";
import Navbar from "../components/Navbar";
import Recent from "../components/Recent";
import background from "../img/new.svg";
import Exchange from "../components/Exchange";

export const MainPage = () => {
    return (
        <div className="flex-[1_0_auto] text-[12px] min-h-screen">
            <div className="box-border bg-[#151b23]  bg-cover text-white relative w-full min-h-screen pt-[55px]">
                <Navbar/>
                <div className="absolute w-full h-[120%] top-0 overflow-hidden z-0 bg-[#0c0d16]">
                    <img src={background} alt="background" className="w-full h-[67em] object-cover absolute top-0 left-1/2 transform -translate-x-1/2"/>
                </div>
               <Exchange/>
            </div>
        </div>
    );
}

