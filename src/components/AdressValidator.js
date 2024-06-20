import React, {useState} from "react";
import Web3 from 'web3';
import {ExchangeButton} from "./ExchangeButton";

export const AdressValidator  = ({isValid, address, setAddress}) => {



    return (
        <div id={'field'} className={`relative rounded-[.5rem] mt-[.2em] pointer-events-auto text-center text-[12px] text-white`}>
            <input
                className={`rounded-[.5rem] h-[53px] pr-[6.8em] box-border bg-black/[.5] border border-solid border-transparent text-[1.1em] leading-[1] py-[1.05em] pl-[1em] w-full resize-none block overflow-hidden pointer-events-auto text-left focus:outline-none font-[Verdana]`}
                required={true} autoComplete={`off`} placeholder={`Ваш Bitcoin адрес`} value={address}
                onChange={(e) => setAddress(e.target.value)}
            ></input>
            {isValid !== null && (
                <p>Adress is {isValid ? 'valid' : 'invalid'}</p>
            )}
        </div>
    )
}
