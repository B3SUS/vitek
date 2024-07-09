import React, {useState} from "react";
import {AdressValidator} from "./AdressValidator";

export const ExchangeAdress = ({address, setAddress, isValid, activeCoin2, selectedName1, selectedName2, valid, validError, setValidError, handleAddressChange}) => {



    return (
        <div id={'exchange-address'} className={`flex flex-col w-full relative mx-auto text-white text-[12px] md:text-[16px]`}>
            <div id={'exchange-wallet'} className={`flex-1 max-h-[30em] opacity-100 pointer-events-auto`}>
                <div id={'wrap-header'} className={`px-[1.2em] pb-[.4em] pointer-events-auto text-center text-[12px] md:text-[16px]`}>
                    <h1 className={`text-[#ccc] text-[.9em] text-left overflow-hidden whitespace-nowrap font-[MontMed] leading-[1.2]`}>
                        Destination
                    </h1>
                </div>

                <AdressValidator address={address} setAddress={setAddress} isValid={isValid} activeCoin2={activeCoin2} selectedName1={selectedName1} selectedName2={selectedName2} valid={valid} validError={validError} setValidError={setValidError} handleAddressChange={handleAddressChange}/>

            </div>
        </div>
    )
}
