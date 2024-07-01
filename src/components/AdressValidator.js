import React from "react";
import errorIco from '../svg/error.png'

export const AdressValidator  = ({isValid, address, setAddress, activeCoin2, selectedName1, selectedName2, valid, validError, setValidError, handleAddressChange}) => {



    const rateCheck = activeCoin2 === 'russian-ruble' || activeCoin2 === 'georgian-lari' ? 'Введите номер банковской карты' : `Ваш ${selectedName2} адрес`

    return (
        <div id={'field'} className={`relative rounded-[.5rem] mt-[.2em] pointer-events-auto text-center text-[12px] text-white`}>
            <input
                className={`rounded-[.5rem] h-[53px] pr-[6.8em] box-border bg-black/[.5] border border-solid border-transparent text-[1.1em] leading-[1] py-[1.05em] pl-[1em] w-full resize-none block overflow-hidden pointer-events-auto text-left focus:outline-none font-[MontMed]`}
                required={true} autoComplete={`off`} placeholder={rateCheck} value={address}
                onChange={(e) => handleAddressChange(e.target.value)}
            ></input>
            <div className={`${validError ? 'hidden' : ''} flex items-center justify-center receive-wallet-error bg-[#a90707] leading-[1.4] -mt-[.1em] border-0 border-solid rounded-[.5rem] text-[.875em] text-white left-[.9em] py-[.6em] px-[1.2em] min-h-[2.5em] absolute text-left z-20`}>
                <img className={'h-[1.3em]'} src={errorIco} alt={errorIco}/>
                Неверный адрес
            </div>
        </div>
    )
}
