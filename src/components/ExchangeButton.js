import React from "react";

export const ExchangeButton = ({validateAddress, activeCoin2}) => {

    const handleClick = () => {
      if (activeCoin2 !== 'russian-ruble' && activeCoin2 !== 'georgian-lari'){
          validateAddress();
      }
    }

    return (
        <div className={'exchange-button mt-[1em] text-center font-[Verdana] p-0 outline-0 text-white text-[12px]'}>
            <button onClick={handleClick} className={'bg-white rounded-[.5em] border-0 cursor-pointer inline-block text-[1em] overflow-hidden h-[3.575em] p-0 text-center'}>
                <span className={'w-auto box-border items-center justify-center bg-[#008fdf] flex text-white text-[1em] font-[MontSemi] h-full py-[.73em] px-[3em] text-center'}>
                    Exchange now
                </span>
            </button>
        </div>
    )
}
