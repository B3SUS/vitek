import React from "react";

import close from '../svg/close.png'

export const DIffPopup = ({diffActive, handleClick}) => {
    return (
        <div className={`${diffActive === false ? 'hidden' : '' } diffpopup pr-0 z-[100] box-border h-full left-0 fixed top-0 w-full font-[MontSemi]`}>
            <div className={'popup-bg h-full left-0 absolute top-0 w-full -z-10 blur-[10px] bg-[#21284b]/[.4]'}></div>
            <div className={'popup-wrap flex h-full overflow-auto text-[12px]'}>
                <div className={'popup-content flex flex-col text-[1.4em] h-full py-[2em] px-[1.8em] box-border bg-[#21284b] m-auto max-w-[650px] pointer-events-auto relative text-center w-full leading-[1.5]'}>
                    <div onClick={handleClick} className={'cursor-pointer py-[1em] px-[.7em] absolute top-0 right-0 z-[999]'}>
                        <img src={close} alt={close} className={`w-[25px] h-[25px]`}/>
                    </div>
                    <h3 className={'bg-grad text-[1.6em] pb-[.3em] text-transparent bg-clip-text leading-[1.15em] mb-[.7em]'}>
                        What is the difference between fixed and a float rates?
                    </h3>
                    <div className={'exchange-different-faq font-[Mont]'}>
                        <h3 className={'mb-[.2em] text-[1em] font-[MontBold] mt-[1em] text-left text-white pb-[.3em] leading-[1.15em]'}>
                            <b>
                                Fixed rate
                            </b>
                        </h3>
                        <p className={'mb-[.2em] leading-[1.2] indent-0 text-justify'}>
                            Opting for a fixed rate, you get the price you see at the point of initiating a transaction.
                        </p>
                        <ul className={'mb-[.5em] list-disc ml-[1.2em] text-left'}>
                            <li>
                                Pay just 1% + network fee.
                            </li>
                            <li>
                                Rates freeze for 10 minutes.
                            </li>
                            <li>
                                If the market rate changes by more than 1.2% before the appearance of your transaction on the blockchain network, you will be asked to make a refund or continue exchanging at the market rate.
                            </li>
                        </ul>
                        <p className={'indent-0 leading-[1.2] text-justify mb-[.2em] font-[MontIt]'}>
                            <em>
                                Attention! Your transaction must be received within 10 minutes and the amount must exactly match the amount of the order. Otherwise, you will be prompted to make a refund or continue the exchange at the market rate.
                            </em>
                        </p>
                        <h3 className={'mt-[1.4em] text-[1em] font-[MontBold] mb-[.3em] text-left text-white pb-[.3em]'}>
                            <b>
                                Float Rate
                            </b>
                        </h3>
                        <p className={'indent-0 leading-[1.2] text-justify mb-[.2em]'}>
                            The exchange rate is finally set when your transaction receives the necessary number of blockchain network confirmations. If the market goes up, you will get more cryptocurrency, if down - less. All fair.
                        </p>
                        <ul className={'mb-[.5em] list-disc ml-[1.2em] text-left'}>
                            <li>
                                Pay just 0.5% + network fee.
                            </li>
                            <li>
                                The exchange will be made at the market rate, which is finally set within 10 minutes after your transaction receives the required number of confirmations in the blockchain network.
                            </li>
                        </ul>
                        <p className={'pl-[1em] border-l-[#0171a6] border-solid border-l-[2px] text-[.9em] font-[MontIt] text-left indent-0 leading-[1.2]'}>
                            <strong className={'font-[MontBoldIt]'}>Example</strong>
                            : you are exchanging 1 BTC for 28.37362388 ETH. With a
                            <strong className={'font-[MontBoldIt]'}> fixed </strong>
                            rate, you will receive exactly 28.37362388 ETH. With a
                            <strong className={'font-[MontBoldIt]'}> float </strong>
                            exchange rate, the amount of ETH can change both up and down. It depends on changes in the market rate.
                        </p>
                    </div>
                    <div className={'popup-ctrl flex flex-wrap gap-[.5em] justify-center mt-[2em]'}>
                        <span onClick={handleClick} className={'bt-submit bg-[#0171a6] text-white ml-0 min-w-[100px] py-[1em] px-[1.5em] box-border border-0 rounded-[.25em] cursor-pointer inline-flex text-[1em] font-[MontSemi] leading-[1] relative text-center justify-center items-center'}>
                            Ok
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
