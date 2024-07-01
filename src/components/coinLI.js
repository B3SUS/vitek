import React from "react";



function CoinLi({coin, isActive, onClick, updateExchangeDetails, clearSearchInput, handleAddressChange, setValidError, valid}){


    return(


        <li onClick={() => {
            updateExchangeDetails(coin);
            onClick(coin.id);
            clearSearchInput();
            setValidError(!valid);
        }}
            className={`px-[1em]  flex justify-between items-center relative m-0 w-full cursor-pointer text-[#f7931a] ${isActive ? 'bg-[#29315C]' : 'bg-none '}`}
        >
            <div className={'border border-solid border-t-0 border-x-0 border-b-gray-700 w-full py-[.5em] flex items-center'}>
                <div className={'float-right flex flex-col items-end order-2 justify-center min-h-[2em] cursor-pointer h-full'}>
                    <span className={'text-[.875em] font-[MontSemi]'} style={{color: coin.color}}>
                        {coin.symbol}
                    </span>
                </div>
                <div className={"coin-ico bg-[auto_100%] float-left h-[1.8em] mr-[.6em] text-center w-[1.8em] bg-center bg-no-repeat"}>
                    <img src={coin.icon} alt={`${coin.name} icon`} className="w-full h-full" />
                </div>

                <div className={'flex min-h-[1.5em] flex-1'}>
                    <span className={'font-[MontMed]'} style={{color: coin.color}}>
                        {coin.name}
                    </span>
                </div>
            </div>
        </li>
    );
}
export default CoinLi;
