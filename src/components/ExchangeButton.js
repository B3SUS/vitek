import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const ExchangeButton = ({validateAddress, activeCoin2, valid, setValidError, amount1, amount2, selectedCoin1, selectedCoin2, selectedIcon1, selectedIcon2}) => {

    /*const handleClick = () => {
      if (activeCoin2 !== 'russian-ruble' && activeCoin2 !== 'georgian-lari'){
          validateAddress();
      }
    }*/
    {/*onClick={handleClick}*/}



    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        if (valid) navigate('/s', {state: {activeCoin2, valid, amount1, amount2, selectedCoin1, selectedCoin2, selectedIcon1, selectedIcon2}, replace: true})
        else setValidError(valid)
    }
    return (
        <div className={'exchange-button mt-[1em] text-center font-[Verdana] p-0 outline-0 text-white text-[12px]'}>
            <button className={'bg-white rounded-[.5em] border-0 cursor-pointer inline-block text-[1em] overflow-hidden h-[3.575em] p-0 text-center'}>
                <span onClick={handleClick} className={'w-auto box-border items-center justify-center bg-[#008fdf] flex text-white text-[1em] font-[MontSemi] h-full py-[.73em] px-[3em] text-center'}>
                    Exchange now
                </span>
            </button>
        </div>
    )
}
