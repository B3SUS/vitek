import React from "react";



function CoinLi({coin, isActive, onClick, updateExchangeDetails}){
    return(


        <li onClick={() => {
            updateExchangeDetails();
            onClick(coin.id);
        }}
            className={`py-[.5em] px-[1em] border-b-0 border-t-0 flex justify-between items-center relative box-border m-0 w-full cursor-pointer font-sans text-[#f7931a] ${isActive ? 'bg-[#29315C]' : 'bg-none '}`}
        >
            <div className={'float-right flex flex-col items-end order-2 justify-center min-h-[2em] cursor-pointer'}>
                <span className={'text-[.875em] font-semibold font-[Arial]'}>
                    {coin.symbol}
                </span>
            </div>
            <div className={'bg-auto float-left h-[1.8em] mr-[.6em] text-center w-[1.8em] bg-center bg-no-repeat'}></div>
            <div className={'items-center flex h-[1.5em] flex-1'}>
                <span className={'font-medium font-[Verdana]'}>
                    {coin.name}
                </span>
            </div>
        </li>
    );
}
export default CoinLi;
