import React from "react";



function CoinLi({coin, isActive, onClick, updateExchangeDetails, clearSearchInput}){


    return(


        <li onClick={() => {
            updateExchangeDetails(coin);
            onClick(coin.id);
            clearSearchInput();
        }}
            className={`px-[1em]  flex justify-between items-center relative m-0 w-full cursor-pointer font-sans text-[#f7931a] ${isActive ? 'bg-[#29315C]' : 'bg-none '}`}
        >
            <div className={'border border-solid border-t-0 border-x-0 border-b-gray-700 w-full py-[.5em]'}>
                <div className={'float-right flex flex-col items-end order-2 justify-center min-h-[2em] cursor-pointer'}>
                <span className={'text-[.875em] font-semibold font-[Arial]'} style={{color: coin.color}}>
                    {coin.symbol}
                </span>
                </div>
                <div className={"coin-ico bg-[auto_100%] float-left h-[1.8em] mr-[.6em] text-center w-[1.8em] bg-center bg-no-repeat"}>
                    <img src={coin.icon} alt={`${coin.name} icon`} className="w-full h-full" />
                </div>

                <div className={'items-center flex h-[1.5em] flex-1'}>
                <span className={'font-medium font-[Verdana]'} style={{color: coin.color}}>
                    {coin.name}
                </span>
                </div>
            </div>
        </li>
    );
}
export default CoinLi;
