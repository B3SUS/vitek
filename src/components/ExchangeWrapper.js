import React, {useState} from "react";
import {ExchangeButton} from "./ExchangeButton";
import {DIffPopup} from "./DIffPopup";

export const ExchangeWrapper = ({validateAdress, selectedOption, handleOptionChange, activeCoin2, valid, setValidError, amount1, amount2, selectedCoin1, selectedCoin2, selectedIcon1, selectedIcon2}) => {


    const [diffActive, setDiffActive] = useState(false)



    const handleClick = () =>{
        setDiffActive(!diffActive)
    }


    return (
        <div className={'exchange-wrapflex flex flex-col relative mt-[2.2em] mx-auto w-full justify-between text-[12px] leading-[1.2]'}>
            <div className={"exchange-option w-full flex flex-col items-start"}>
                <header className={'pt-0 px-[1.2em] pb-[.4em] text-[#ccc] font-semibold text-[12px] font-[Verdana]'}>
                    Order Type
                </header>
                <div className={'exchange-option-inner w-full mb-[.5em] box-border flex min-w-[24.9em]'}>
                    <label className={'m-0 relative w-1/2 cursor-pointer inline-block'}>
                        <input type={"radio"} value={"fixed"} className={'fixed-type absolute -z-50 hidden cursor-pointer'} checked={selectedOption === 'fixed'} onChange={handleOptionChange}/>
                        <span className={`${selectedOption === 'fixed' ? 'text-[#008fdf] border-[#008fdf]' : 'text-white/[.45] border-transparent'} font-[MontMed] border border-solid rounded-l-[.6em] box-border justify-center items-center bg-black/[.5] flex h-[3.575em] overflow-hidden overflow-ellipsis whitespace-nowrap px-0 py-[.625em] relative cursor-pointer`}>
                            Fixed rate (1.0%)
                        </span>
                    </label>
                    <label className={'m-0 relative w-1/2 cursor-pointer inline-block'}>
                        <input type={"radio"} value={"float"} className={'float-type absolute -z-50 hidden cursor-pointer'} checked={selectedOption === 'float'} onChange={handleOptionChange}/>
                        <span className={`className={ ${selectedOption === 'float' ? 'text-[#008fdf] border-[#008fdf]' : 'text-white/[.45] border-transparent'} font-[MontMed] border border-solid rounded-r-[.6em] box-border justify-center items-center bg-black/[.5] flex h-[3.575em] overflow-hidden overflow-ellipsis whitespace-nowrap px-0 py-[.625em] relative cursor-pointer`}>
                            Float rate (0.5%)
                        </span>
                    </label>
                </div>
                <span className={'type-difference w-auto cursor-pointer block text-white whitespace-nowrap h-[2em] relative ml-[.5em]'}>
                    <div onClick={handleClick} className={'exchange-option-diff-inner bg-transparent text-[#C5C5C5] relative items-center flex h-full left-0 top-0 rounded-[1em] cursor-pointer whitespace-nowrap'}>
                        <i className={'flex bg-black/[.5] rounded-[1em] items-center justify-center mr-[.5em] text-[1.2em] h-[2em] min-w-[2em] font-[Mont]'}>
                            ?
                        </i>
                        <font className={'text-[1em] pr-[.9em] text-[#c5c5c5] whitespace-nowrap font-[MontMed]'}>
                            What is the difference
                        </font>
                    </div>
                </span>
            </div>
            <ExchangeButton validateAddress={validateAdress} activeCoin2={activeCoin2} valid={valid} setValidError={setValidError} amount1={amount1} amount2={amount2} selectedCoin1={selectedCoin1} selectedCoin2={selectedCoin2} selectedIcon1={selectedIcon1} selectedIcon2={selectedIcon2}/>
            <DIffPopup diffActive={diffActive} handleClick={handleClick}/>
        </div>
    )
}
