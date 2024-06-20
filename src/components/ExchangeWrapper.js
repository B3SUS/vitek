import React, {useState} from "react";
import {ExchangeButton} from "./ExchangeButton";

export const ExchangeWrapper = ({validateAdress, selectedOption, handleOptionChange}) => {




    return (
        <div className={'exchange-wrapflex flex flex-col relative mt-[2.2em] mx-auto w-full justify-between text-[12px]'}>
            <div className={"exchange-option w-full flex flex-col items-start"}>
                <header className={'pt-0 px-[1.2em] pb-[.4em] text-[#ccc] font-semibold text-[12px] font-[Verdana]'}>
                    Тип заказа
                </header>
                <div className={'exchange-option-inner w-full mb-[.5em] box-border flex min-w-[24.9em]'}>
                    <label className={'m-0 relative w-1/2 cursor-pointer inline-block'}>
                        <input type={"radio"} value={"fixed"} className={'fixed-type absolute -z-50 hidden cursor-pointer'} checked={selectedOption === 'fixed'} onChange={handleOptionChange}/>
                        <span className={`${selectedOption === 'fixed' ? 'text-[#008fdf] border-[#008fdf]' : 'text-white/[.45] border-transparent'} font-[Verdana] font-medium border border-solid rounded-l-[.6em] box-border justify-center items-center bg-black/[.5] flex h-[3.575em] overflow-hidden overflow-ellipsis whitespace-nowrap px-0 py-[.625em] relative cursor-pointer`}>
                            Фиксированный (1.0%)
                        </span>
                    </label>
                    <label className={'m-0 relative w-1/2 cursor-pointer inline-block'}>
                        <input type={"radio"} value={"float"} className={'float-type absolute -z-50 hidden cursor-pointer'} checked={selectedOption === 'float'} onChange={handleOptionChange}/>
                        <span className={`className={ ${selectedOption === 'float' ? 'text-[#008fdf] border-[#008fdf]' : 'text-white/[.45] border-transparent'} font-[Verdana] font-medium border border-solid rounded-r-[.6em] box-border justify-center items-center bg-black/[.5] flex h-[3.575em] overflow-hidden overflow-ellipsis whitespace-nowrap px-0 py-[.625em] relative cursor-pointer`}>
                            Плавающий (0.5%)
                        </span>
                    </label>
                </div>
                <span className={'type-difference w-auto cursor-pointer block text-white whitespace-nowrap h-[2em] relative ml-[.5em]'}>
                    <div className={'exchange-option-diff-inner bg-transparent text-[#C5C5C5] relative items-center flex h-full left-0 top-0 rounded-[1em] cursor-pointer whitespace-nowrap'}>
                        <i className={'flex bg-black/[.5] rounded-[1em] items-center justify-center mr-[.5em] text-[1.2em] h-[2em] min-w-[2em] font-serif'}>
                            ?
                        </i>
                        <font className={'text-[1em] pr-[.9em] text-[#c5c5c5] whitespace-nowrap font-[Verdana]'}>
                            Какой курс выгоднее?
                        </font>
                    </div>
                </span>
            </div>
            <ExchangeButton validateAddress={validateAdress}/>
        </div>
    )
}
