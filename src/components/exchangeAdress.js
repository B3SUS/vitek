import React, {useState} from "react";
import {AdressValidator} from "./AdressValidator";

export const ExchangeAdress = ({address, setAddress, isValid}) => {



    return (
        <div id={'exchange-address'} className={`flex flex-col w-full relative mx-auto mt-[2.2em] text-white text-[12px]`}>
            <div id={'exchange-wallet'} className={`flex-1 max-h-[30em] opacity-100 pointer-events-auto`}>
                <div id={'wrap-header'} className={`px-[1.2em] pb-[.4em] pointer-events-auto text-center text-[12px]`}>
                    <h1 className={`text-[#ccc] text-[.9em] text-left overflow-hidden whitespace-nowrap font-[Arial]`}>
                        Destination
                    </h1>
                </div>

                <AdressValidator address={address} setAddress={setAddress} isValid={isValid}/>

            </div>
        </div>
    )
}
