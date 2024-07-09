import React, {useEffect, useState} from "react";
import CoinLi from "./coinLI";

export const ExchangeAmount  = ({
                                    coins, copiedCoins,
                                    handleClick1, handleClick2 ,
                                    handleAmount2Change, handleAmount1Change,
                                    isOpen, isOpen2,
                                    activeCoin2, activeCoin1,
                                    toggleMenu1, toggleMenu2,
                                    amount1, amount2, findCoinById, updateExchangeDetails,
                                selectedCoin1, selectedCoin2, nearPrice, nearPrice2, selectedOption,
                                selectedPrice1, selectedPrice2,
                                selectedColor1, selectedColor2, switchCoins,
                                selectedIcon1, selectedIcon2, handleAddressChange, setValidError, valid}) => {

    const [searchValue, setSearchValue] = useState('');
    const [filteredCoins, setFilteredCoins] = useState(coins);

    useEffect(() => {
        setFilteredCoins(coins);
    }, [coins]);
    const handleSearchChange = (e) => {

        const searchValue = e.target.value;
        setSearchValue(searchValue);
        const filteredCoins = coins.filter((coin) => {
            const coinName = coin.name.toLowerCase();
            const coinSymbol = coin.symbol.toLowerCase();
            const searchValueLower = searchValue.toLowerCase();
            return coinName.includes(searchValueLower) || coinSymbol.includes(searchValueLower);
        });
        setFilteredCoins(filteredCoins);
    };

    const handleSearchChange2 = (e) => {

        const searchValue = e.target.value;
        setSearchValue(searchValue);
        const filteredCoins2 = copiedCoins.filter((coin) => {
            const coinName = coin.name.toLowerCase();
            const coinSymbol = coin.symbol.toLowerCase();
            const searchValueLower = searchValue.toLowerCase();
            return coinName.includes(searchValueLower) || coinSymbol.includes(searchValueLower);
        });
        setFilteredCoins(filteredCoins2);
    };

    useEffect(() => {
        updateExchangeDetails(activeCoin1, activeCoin2);
    }, [activeCoin1, activeCoin2]);

    const handleKeyPress = (e) => {
        // Блокуємо введення, якщо символ не є цифрою або крапкою
        const allowedCharacters = /^[0-9.]*$/;
        if (!allowedCharacters.test(e.key) && e.keyCode !== 8) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            .dynamic-placeholder::placeholder {
                color: ${selectedColor1};
            }
            .dynamic-placeholder2::placeholder {
                color: ${selectedColor2};
            }
        `;
        document.head.appendChild(style);

        // Прибирання стилю, коли компонент видаляється
        return () => {
            document.head.removeChild(style);
        };
    }, [selectedColor1, selectedColor2]);


    const clearSearchInput = () => {
      setSearchValue('');
      setFilteredCoins(coins)
    }


    return (
        <div id={'exchange-amount'} className={`flex flex-col mb-[1.05em] md:mb-[2.2em] relative w-full text-[12px] md:text-[16px] md:flex-row`}>

            <div id={'col'} className={'box-border'}>

                <div id={'wrap-header'} className={`flex justify-between items-end pb-[.4em] px-[1.2em]`} style={{color: selectedColor1}}>
                    <header className={'text-[.9em] text-left whitespace-nowrap overflow-hidden font-[MontMed] leading-[1.2]'}>
                        Send
                    </header>
                </div>

                <div className={'input-wabbr relative mt-[.2em] font-sans text-[16px]'} style={{color: selectedColor1}}>

                    <div
                        className={`ui-selector-outer items-stretch flex flex-col text-[1.4em] h-full left-0 top-0 fixed w-full z-50 font-sans text-[#8247e5] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                        <label  className={`ui-select bg-[#21284b] rounded-[.4em .4em 0 0] border-0 h-[3.575em] min-h-[3em] p-0 text-[${selectedColor1}] box-border cursor-pointer block relative z-10 select-none font-[Verdana]`}>

                            <div className={'ui-select-search flex opacity-100 p-[0 2.4em 0 0] bottom-0 left-0 absolute right-0 top-0 font-[Verdana] cursor-pointer'}>

                                <div className={'h-full mr-0 w-[46px] box-border flex items-center text-center justify-center'}>
                                    <div className={"float-left h-full mr-0 w-[1.7em] flex items-center text-center"}>
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill={selectedColor1} fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className={'ui-select-inner h-full font-[MontL] w-full'}>
                                    <input type="text" placeholder={"Type a currency or ticker"} value={searchValue} onChange={handleSearchChange} style={{color:selectedColor1}}
                                           className={`dynamic-placeholder text-left py-[.3em] px-0 box-border bg-none h-full w-full placeholder:font-[MontL] bg-transparent focus:outline-none`}
                                    />
                                </div>

                            </div>

                        </label>

                        <div
                            className={'ui-select-list relative flex-auto h-full border-0 rounded-[0 0 .4em .4em] box-border block left-0 mt-0 overflow-hidden pt-0 w-full z-50 select-none font-sans text-[12px]'}
                        >

                            <ul className={'pr-0 w-full max-h-none bg-[#21284b] pt-[.3em] block h-full overflow-x-hidden overflow-y-auto relative list-none m-0 outline-0 text-[1.4em]'}>

                                <li className={'box-border block m-0 w-full text-[#636363] text-[.8em] py-[.4em] px-[1.25em] font-[Verdana] overflow-hidden'}>
                                    Популярные валюты
                                </li>

                                {filteredCoins.map((coin) => (
                                    <CoinLi
                                        key={coin.id}
                                        coin={coin}
                                        isActive={coin.id === activeCoin1}
                                        onClick={handleClick1}
                                        updateExchangeDetails={updateExchangeDetails}
                                        clearSearchInput={clearSearchInput}
                                        setValidError={setValidError}
                                        valid={valid}
                                    />
                                ))}


                            </ul>
                        </div>


                    </div>
                    <div className={" flex flex-col gap-y-2"}>
                        <input autoComplete={'off'} required={true} placeholder={'Enter the amount'} type={'number'} maxLength={18} value={amount1} onChange={handleAmount1Change} onKeyDown={handleKeyPress}
                               className={'no-spinner select-amount-from bg-transparent border-transparent border-solid relative py-[.3em] pr-[4.4em] pl-[.7em] w-full box-border rounded-[.5rem] text-[1.625em] h-[2.2em] font-[MontMed]'}
                        >
                        </input>
                        <label
                               className={'right-0 items-center cursor-pointer flex text-[1.6em] h-[2.15em] pr-[.6em] absolute top-0 whitespace-nowrap font-sans text-[#8247e5]'}
                        >
                                    <span className={'mr-[.229em] min-w-[1.146em] text-center font-sans'}>
                                    </span>
                        </label>
                        <div className={'flex gap-x-4 ml-2.5'}>
                            <span className={'select-hinterror-from font-[MontSemi] text-[.8em] text-gray-400 leading-[1.15]'}>
                                1 {selectedCoin1} ~ {nearPrice} {selectedCoin2}
                            </span>
                            <span className={'select-hinterror-from font-[MontSemi] text-[.8em] text-gray-400'}>
                                {amount1 !== '' ? `${(selectedPrice1*amount1).toFixed(2)}$` : ''}
                            </span>
                        </div>
                        <div className={'select-label-from right-0 select-none items-center cursor-pointer flex text-[1.6em] h-[2.15em] pr-[.6em] absolute top-0 whitespace-nowrap'} onClick={toggleMenu1}>
                            <span className={`bg-[center_center] mr-[.229em] min-w-[1.146em] bg-no-repeat bg-contain h-[1.146em] text-center w-[1.146em]`}>
                                <img src={selectedIcon1} alt={selectedIcon1} className="w-full h-full" />
                            </span>
                            <span className={"coin-name flex-1 text-[.75em] flex flex-col items-start"}>
                                <span className={'name leading-[1] font-medium font-[MontMed]'}>
                                    {selectedCoin1}
                                </span>
                            </span>
                            <svg className={'ml-[.2em] rotate-180'} width="6px" height="6px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path style={{fill: selectedColor1}} d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div id={'col-middle'} className={"flex box-border justify-end pt-0 px-[1.1em] items-center h-[30px] mt-[-.6em]"}>
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className={"rotate-90 w-[30px] h-[30px] cursor-pointer"} onClick={()=> switchCoins(activeCoin1)}>
                    <path className={'translate-x-[10px] translate-y-[4px]'} style={{fill: selectedColor1}} d="M17.6,4.2l-4-3a1,1,0,0,0-1.05-.09A.977.977,0,0,0,12,2V4H1A1,1,0,0,0,1,6H12V8a.988.988,0,0,0,.55.89A.99.99,0,0,0,13.6,8.8l4-3a1,1,0,0,0,0-1.6Z"/>
                    <path className={'translate-x-[1px] translate-y-[6px]'} style={{fill: selectedColor2}} d="M.4,12.2l4-3a1,1,0,0,1,1.05-.09A.977.977,0,0,1,6,10v2H17a1,1,0,0,1,0,2H6v2a.988.988,0,0,1-.55.89A.99.99,0,0,1,4.4,16.8l-4-3a1,1,0,0,1,0-1.6Z"/>
                </svg>
            </div>

            <div id={'col2'} className={'box-border mb-[12px] mt-[-1em]'}>

                <div id={'wrap-header'} className={'flex justify-between items-end pb-[.4em] px-[1.2em] font-[Verdana] m-0 outline-0'} style={{color:selectedColor2}}>
                    <header className={'text-[.9em] text-left whitespace-nowrap overflow-hidden font-[MontMed] leading-[1.2]'}>
                        Receive
                    </header>
                </div>

                <div className={'input-wabbr relative mt-[.2em] font-sans text-[12px]'} style={{color:selectedColor2}}>

                    <div className={`ui-selector-outer items-stretch flex flex-col text-[1.4em] h-full left-0 top-0 fixed w-full font-sans text-[#8247e5] ${isOpen2 ? 'translate-x-0' : '-translate-x-full'}`}>

                        <label className={'ui-select bg-[#21284b] rounded-[.4em .4em 0 0] border-0 h-[3.575em] min-h-[3em] p-0 text-[#f7931a] box-border cursor-pointer block relative z-10 select-none font-[Verdana]'}>

                            <div className={'ui-select-search flex opacity-100 p-[0 2.4em 0 0] bottom-0 left-0 absolute right-0 top-0 font-[Verdana] cursor-pointer'}>

                                <div className={'h-full mr-0 w-[46px] box-border flex items-center text-center justify-center'}>
                                    <div className={"text-[#f7931a] float-left h-full mr-0 w-[1.7em] flex items-center text-center"}>
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill={selectedColor2} fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className={'ui-select-inner h-full font-[Arial] w-full'}>
                                    <input type="text" placeholder={"Type a currency or ticker"} style={{color:selectedColor2}} value={searchValue} onChange={handleSearchChange2}
                                           className={'dynamic-placeholder2 text-left py-[.3em] px-0 box-border bg-none h-full w-full placeholder:font-[MontL] placeholder:text-[rgba(247,147,26,0.5)] bg-transparent focus:outline-none'}
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

                                {filteredCoins.map((coin) => (
                                    <CoinLi
                                        key={coin.id}
                                        coin={coin}
                                        isActive={coin.id === activeCoin2}
                                        onClick={handleClick2}
                                        updateExchangeDetails={updateExchangeDetails}
                                        clearSearchInput={clearSearchInput}
                                        handleAddressChange={handleAddressChange}
                                        setValidError={setValidError}
                                        valid={valid}
                                    />
                                ))}

                            </ul>
                        </div>


                    </div>
                    <div className={'flex flex-col gap-y-2'}>
                        <input autoComplete={'off'} required={true} placeholder={''} type={selectedOption === 'float' ? 'text' : 'number'} maxLength={18} value={selectedOption === 'fixed' ? amount2 : amount2 === '' ? '' : `≈${amount2}`} onChange={handleAmount2Change} disabled={selectedOption === 'float'} onKeyDown={handleKeyPress}
                               className={`no-spinner select-amount-from bg-transparent border-transparent border-solid relative py-[.3em] pr-[4.4em] pl-[.7em] w-full box-border rounded-[.5rem] text-[1.625em] h-[2.2em] font-sans`}
                        >
                        </input>
                        <label onClick={toggleMenu2}
                               className={'right-0 items-center cursor-pointer flex text-[1.6em] h-[2.15em] pr-[.6em] absolute top-0 whitespace-nowrap font-sans text-[#8247e5]'}
                        >
                                    <span className={'mr-[.229em] min-w-[1.146em] text-center font-sans'}>
                                    </span>
                        </label>

                        <div className={'flex gap-x-4 ml-2.5'}>
                            <span className={'select-hinterror-from font-[MontSemi] text-[.8em] text-gray-400 ml-2.5 leading-[1.15]'}>
                                1 {selectedCoin2} ~ {nearPrice2} {selectedCoin1}
                            </span>
                            <span className={'select-hinterror-from font-[MontSemi] text-[.8em] text-gray-400'}>
                                {amount2 === '' ? '': `${(selectedPrice2*amount2).toFixed(2)}$`}
                            </span>
                            <div className={'select-label-from right-0 select-none items-center cursor-pointer flex text-[1.6em] h-[2.15em] pr-[.6em] absolute top-0 whitespace-nowrap'} onClick={toggleMenu2}>
                                <span className={'bg-[center_center] mr-[.229em] min-w-[1.146em] bg-no-repeat bg-contain h-[1.146em] text-center w-[1.146em]'}>
                                    <img src={selectedIcon2} alt={selectedIcon2} className="w-full h-full" />
                                </span>
                                <span className={"coin-name flex-1 text-[.75em] flex flex-col items-start"}>
                                <span className={'name leading-[1] font-medium font-[MontMed]'}>
                                    {selectedCoin2}
                                </span>
                            </span>
                                <svg className={'ml-[.2em] rotate-180'} width="6px" height="6px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path style={{fill: selectedColor2}} d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"/></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
