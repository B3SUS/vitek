import React, {useEffect, useState} from "react";
import CoinLi from "./coinLI";
import {ReactComponent as SearchIcon} from '../svg/search-ico.svg';

export const ExchangeAmount  = ({
                                    coins, copiedCoins,
                                    handleClick1, handleClick2 ,
                                    handleAmount2Change, handleAmount1Change,
                                    isOpen, isOpen2,
                                    activeCoin2, activeCoin1,
                                    toggleMenu1, toggleMenu2,
                                    amount1, amount2, findCoinById, updateExchangeDetails,
                                selectedCoin1, selectedCoin2, nearPrice, nearPrice2, selectedOption}) => {




    useEffect(() => {
        updateExchangeDetails(activeCoin1, activeCoin2);
    }, [activeCoin1, activeCoin2]);






    return (
        <div id={'exchange-amount'} className={`flex flex-col mb-[2.2em] z-50 relative w-full text-[12px]`}>

            <div id={'col'} className={'box-border mb-[20px]'}>

                <div id={'wrap-header'} className={'flex justify-between items-end pb-[.4em] px-[1.2em] font-[Verdana] m-0 outline-0 text-[#f7931a]'}>
                    <header className={'text-[.9em] text-left whitespace-nowrap overflow-hidden font-medium  font-sans'}>
                        Отправляете
                    </header>
                </div>

                <div className={'input-wabbr relative mt-[.2em] font-sans text-[12px] text-[#f7931a]'}>

                    <div
                        className={`ui-selector-outer items-stretch flex flex-col text-[1.4em] h-full left-0 top-0 fixed w-full z-50 font-sans text-[#8247e5] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                        <label  className={'ui-select bg-[#21284b] rounded-[.4em .4em 0 0] border-0 h-[3.575em] min-h-[3em] p-0 text-[#f7931a] box-border cursor-pointer block relative z-10 select-none font-[Verdana]'}>

                            <div className={'ui-select-search flex opacity-100 p-[0 2.4em 0 0] bottom-0 left-0 absolute right-0 top-0 font-[Verdana] cursor-pointer'}>

                                <div className={'h-full mr-0 w-[46px] box-border flex items-center text-center justify-center'}>
                                    <SearchIcon className={"text-[#f7931a] float-left h-full mr-0 w-[1.7em] flex items-center text-center"}/>
                                </div>

                                <div className={'ui-select-inner h-full font-[Arial] w-full'}>
                                    <input type="text" placeholder={"Введите название или тикер"}
                                           className={'text-left py-[.3em] px-0 box-border bg-none h-full w-full placeholder:font-[Verdana] placeholder:text-[rgba(247,147,26,0.5)] bg-transparent focus:outline-none'}
                                    />
                                </div>

                            </div>

                        </label>

                        <div
                            className={'ui-select-list relative flex-auto h-full border-0 rounded-[0 0 .4em .4em] box-border block left-0 mt-0 overflow-hidden pt-0 w-full z-20 select-none font-sans text-[12px]'}
                        >

                            <ul className={'pr-0 w-full max-h-none bg-[#21284b] pt-[.3em] block h-full overflow-x-hidden overflow-y-auto relative list-none m-0 outline-0 text-[1.4em]'}>

                                <li className={'box-border block m-0 w-full text-[#636363] text-[.8em] py-[.4em] px-[1.25em] font-[Verdana]'}>
                                    Популярные валюты
                                </li>

                                {coins.map((coin) => (
                                    <CoinLi
                                        key={coin.id}
                                        coin={coin}
                                        isActive={coin.id === activeCoin1}
                                        onClick={handleClick1}
                                        updateExchangeDetails={updateExchangeDetails}
                                    />
                                ))}


                            </ul>
                        </div>


                    </div>
                    <div className={" flex flex-col gap-y-2"}>
                        <input autoComplete={'off'} required={true} placeholder={'Enter the amount'} type={'number'} maxLength={18} value={amount1} onChange={handleAmount1Change}
                               className={'no-spinner select-amount-from bg-transparent border-transparent border-solid relative py-[.3em] pr-[4.4em] pl-[.7em] w-full z-10 box-border rounded-[.5rem] text-[1.625em] h-[2.2em] font-sans'}
                        >
                        </input>
                        <label onClick={toggleMenu1}
                               className={'right-0 items-center cursor-pointer flex text-[1.6em] h-[2.15em] pr-[.6em] absolute top-0 whitespace-nowrap z-10 font-sans text-[#8247e5]'}
                        >
                                    <span className={'mr-[.229em] min-w-[1.146em] text-center font-sans'}>
                                    </span>
                        </label>
                        <span className={'select-hinterror-from font-[Arial] text-[.8em] text-gray-400 ml-2.5'}>
                        1 {selectedCoin1} ~ {nearPrice} {selectedCoin2}
                    </span>
                    </div>
                </div>
            </div>

            <div id={'col-middle'} className={"flex box-border justify-end pt-0 px-[1.1em] items-center h-[30px] mt-[-.7em]"}>
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className={"rotate-90 w-[30px] h-[30px]"}>
                    <path className={'translate-x-[10px] translate-y-[4px]'} fill="#f7931a" d="M17.6,4.2l-4-3a1,1,0,0,0-1.05-.09A.977.977,0,0,0,12,2V4H1A1,1,0,0,0,1,6H12V8a.988.988,0,0,0,.55.89A.99.99,0,0,0,13.6,8.8l4-3a1,1,0,0,0,0-1.6Z"/>
                    <path className={'translate-x-[1px] translate-y-[6px]'} fill="#53ae94" d="M.4,12.2l4-3a1,1,0,0,1,1.05-.09A.977.977,0,0,1,6,10v2H17a1,1,0,0,1,0,2H6v2a.988.988,0,0,1-.55.89A.99.99,0,0,1,4.4,16.8l-4-3a1,1,0,0,1,0-1.6Z"/>
                </svg>
            </div>

            <div id={'col2'} className={'box-border mb-[12px] mt-[-0.8em]'}>

                <div id={'wrap-header'} className={'flex justify-between items-end pb-[.4em] px-[1.2em] font-[Verdana] m-0 outline-0 text-[#53ae94]'}>
                    <header className={'text-[.9em] text-left whitespace-nowrap overflow-hidden font-medium  font-sans'}>
                        Отправляете
                    </header>
                </div>

                <div className={'input-wabbr relative mt-[.2em] font-sans text-[12px] text-[#53ae94]'}>

                    <div className={`ui-selector-outer items-stretch flex flex-col text-[1.4em] h-full left-0 top-0 fixed w-full z-50 font-sans text-[#8247e5] ${isOpen2 ? 'translate-x-0' : '-translate-x-full'}`}>

                        <label className={'ui-select bg-[#21284b] rounded-[.4em .4em 0 0] border-0 h-[3.575em] min-h-[3em] p-0 text-[#f7931a] box-border cursor-pointer block relative z-10 select-none font-[Verdana]'}>

                            <div className={'ui-select-search flex opacity-100 p-[0 2.4em 0 0] bottom-0 left-0 absolute right-0 top-0 font-[Verdana] cursor-pointer'}>

                                <div className={'h-full mr-0 w-[46px] box-border flex items-center text-center justify-center'}>
                                    <SearchIcon className={"text-[#f7931a] float-left h-full mr-0 w-[1.7em] flex items-center text-center"}/>
                                </div>

                                <div className={'ui-select-inner h-full font-[Arial] w-full'}>
                                    <input type="text" placeholder={"Введите название или тикер"}
                                           className={'text-left py-[.3em] px-0 box-border bg-none h-full w-full placeholder:font-[Verdana] placeholder:text-[rgba(247,147,26,0.5)] bg-transparent focus:outline-none'}
                                    />
                                </div>

                            </div>

                        </label>

                        <div
                            className={'ui-select-list relative flex-auto h-full border-0 rounded-[0 0 .4em .4em] box-border block left-0 mt-0 overflow-hidden pt-0 w-full z-20 select-none font-sans text-[12px]'}
                        >

                            <ul className={'pr-0 w-full max-h-none bg-[#21284b] pt-[.3em] block h-full overflow-x-hidden overflow-y-auto relative list-none m-0 outline-0 text-[1.4em]'}>

                                <li className={'box-border block m-0 w-full text-[#636363] text-[.8em] py-[.4em] px-[1.25em] font-[Verdana]'}>
                                    Популярные валюты
                                </li>

                                {copiedCoins.map((coin) => (
                                    <CoinLi
                                        key={coin.id}
                                        coin={coin}
                                        isActive={coin.id === activeCoin2}
                                        onClick={handleClick2}
                                        updateExchangeDetails={updateExchangeDetails}
                                    />
                                ))}

                            </ul>
                        </div>


                    </div>
                    <div className={'flex flex-col gap-y-2'}>
                        <input autoComplete={'off'} required={true} placeholder={''} type={selectedOption === 'float' ? 'text' : 'number'} maxLength={18} value={selectedOption === 'fixed' ? amount2 : `~${amount2}`} onChange={handleAmount2Change} disabled={selectedOption === 'float'}
                               className={`no-spinner select-amount-from bg-transparent border-transparent border-solid relative py-[.3em] pr-[4.4em] pl-[.7em] w-full z-10 box-border rounded-[.5rem] text-[1.625em] h-[2.2em] font-sans`}
                        >
                        </input>
                        <label onClick={toggleMenu2}
                               className={'right-0 items-center cursor-pointer flex text-[1.6em] h-[2.15em] pr-[.6em] absolute top-0 whitespace-nowrap z-10 font-sans text-[#8247e5]'}
                        >
                                    <span className={'mr-[.229em] min-w-[1.146em] text-center font-sans'}>
                                    </span>
                        </label>
                        <span className={'select-hinterror-from font-[Arial] text-[.8em] text-gray-400 ml-2.5'}>
                        1 {selectedCoin2} ~ {nearPrice2} {selectedCoin1}
                    </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
