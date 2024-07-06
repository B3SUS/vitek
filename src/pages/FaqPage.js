import React, {useState} from "react";
import Navbar from "../components/Navbar";
import {Footer} from "../components/Footer";
import plus2 from "../img/plus2.png";
import plus1 from "../img/plus1.png";
import {Link} from "react-router-dom";
import arrow from "../img/faqarrow.png";

export const FaqPage = () => {


    const [selectedOption, setSelectedOption] = useState('0');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [activeIndex, setActiveIndex] = useState(null); // Храним только один активный индекс

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Переключаем активный элемент
    };

    return (
        <div className={'text-white text-[12px] box-border bg-[#0c0d16] bg-cover min-h-full relative flex flex-col font-[Mont]'}>
            <Navbar/>
            <div className={'pt-[55px] mb-[1em] flex-[1_0_auto]'}>
                <div className={'wrapper px-[1em] mx-auto w-full'}>
                    <h1 className={'text-[3em] my-[.8125em] bg-grad text-transparent bg-clip-text font-[MontBold] leading-[1.15em]'}>
                        FAQ
                    </h1>
                    <div className={'fq-tabs mb-[2em]'}>
                        <label className={'faq-tab cursor-pointer inline-block mx-[6px]'}>
                            <input type={"radio"} value={'0'} className={'absolute hidden -z-50'} checked={selectedOption === '0'} onChange={handleOptionChange}/>
                            <span className={`${selectedOption === '0' ? 'text-[#008fdf] border border-[#008fdf]' : ''}  rounded-[.25em] block py-[.825em] px-[1.5em] relative`}>About FixedFloat</span>
                        </label>
                        <label className={'faq-tab cursor-pointer inline-block mx-[6px]'}>
                            <input type={"radio"} value={'1'} className={'absolute hidden -z-50'} checked={selectedOption === '1'} onChange={handleOptionChange}/>
                            <span className={`${selectedOption === '1' ? 'text-[#008fdf] border border-[#008fdf]' : ''} rounded-[.25em] block py-[.825em] px-[1.5em] relative`}>About exchange</span>
                        </label>
                        <label className={'faq-tab cursor-pointer inline-block mx-[6px]'}>
                            <input type={"radio"} value={'2'} className={'absolute hidden -z-50'} checked={selectedOption === '2'} onChange={handleOptionChange}/>
                            <span className={`${selectedOption === '2' ? 'text-[#008fdf] border border-[#008fdf]' : ''} rounded-[.25em] block py-[.825em] px-[1.5em] relative`}>About orders</span>
                        </label>
                    </div>
                    <div className={'faq-wrapper block'}>
                        <ol className={`${selectedOption === '0' ? '' : 'hidden'} faq-list list-none text-white`}>
                            <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(0)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>1</div>
                                    <span className={'flex-1'}>What is FixedFloat?</span>
                                    <div className={`${activeIndex === 0 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 0 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 0 ? 'h-[340.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner after:pb-[1.4em] after:block'}>
                                        <p>
                                            <strong>FixedFloat</strong>{' '}
                                            is a fully automated service for exchanging cryptocurrencies and tokens on favorable terms. FixedFloat is not custodial. The exchange takes place immediately after receiving the coins and the required number of network confirmations.
                                        </p>
                                        <p className={'mt-[1em]'}>FixedFloat was launched in 2018 by a team of blockchain specialists with extensive experience in developing rich web applications. In an effort to provide a convenient platform for cryptocurrency exchanges, FixedFloat is constantly actively developing and improving for its customers.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(1)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>2</div>
                                    <span className={'flex-1'}>Why FixedFloat is the smartest way to exchange cryptocurrency?</span>
                                    <div className={`${activeIndex === 1 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 1 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 1 ? 'h-[520.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>
                                            Our top priority is to provide a high quality cryptocurrency exchange service through our unique solutions that do not compromise speed and security.
                                        </p>
                                        <div className={'faq-gr-2-2 grid gap-y-[1em] gap-x-[3em] grid-cols-[1fr_1fr] mt-[1em]'}>
                                            <p>
                                                <b className={'text-[#008fdf]'}>1. Save your money.</b><br/>
                                                Make an exchange at the most favorable rate and with transparent commission. We always have the better offer.
                                            </p>
                                            <p>
                                                <b className={'text-[#008fdf]'}>2. Save your time.</b><br/>
                                                Use our fully automated processing and get an answer to any of your questions instantly with our supreme support.
                                            </p>
                                            <p>
                                                <b className={'text-[#008fdf]'}>3. Hassle-free exchange.</b><br/>
                                                No registration and unnecessary details. It is simple as 1-2-3.
                                            </p>
                                            <p>
                                                <b className={'text-[#008fdf]'}>4. Cross-platform.</b><br/>
                                                FixedFloat is designed with performance in mind and works perfectly on any device.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(2)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>3</div>
                                    <span className={'flex-1'}>Why should I trust FixedFloat?</span>
                                    <div className={`${activeIndex === 2 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 2 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 2 ? 'h-[180px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>
                                            For 4 years, FixedFloat has gained the trust of more than a million users from all over the world. We respect the anonymity and security of our customers — no data is required to make exchanges. FixedFloat works completely automatically and support is available on Live Chat 24/7.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                        <ol className={`${selectedOption === '1' ? '' : 'hidden'} faq-list list-none text-white`}>
                            <li className={'1 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(3)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>1</div>
                                    <span className={'flex-1'}>What is the difference between a fixed and a float rates?</span>
                                    <div className={`${activeIndex === 3 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 3 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 3 ? 'h-[895.317px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <h3 className={'mb-[.2em] text-[1.2em] font-[MontSemi] pb-[.3em] bg-grad bg-clip-text text-transparent leading-[1.15em]'}>
                                            <b>Fixed rate</b>
                                        </h3>
                                        <p className={'mb-[.2em]'}>
                                            Opting for a fixed rate, you get the price you see at the point of initiating a transaction.
                                        </p>
                                        <ul className={'list list-disc ml-[1.2em] text-left'}>
                                            <li>Pay just 1% + network fee.</li>
                                            <li>Rates freeze for 10 minutes.</li>
                                            <li>If the market rate changes by more than 1.2% <span>before the appearance of your transaction on the blockchain network</span>,
                                                you will be asked to make a refund or continue exchanging at the market
                                                rate.
                                            </li>
                                        </ul>
                                        <p className={'mt-[1em]'}><em>Attention! Your transaction must be received within 10 minutes and the amount must exactly match the amount of the order. Otherwise, you will be prompted to make a refund or continue the exchange at the market rate.</em></p>
                                        <h3 className={'mt-[1.4em] mb-[.7em] text-[1.2em] font-[MontSemi] pb-[.3em] bg-grad bg-clip-text text-transparent leading-[1.15em]'}>
                                            <b>Float rate</b>
                                        </h3>
                                        <p className={'mt-[1.4em]'}>The exchange rate is finally set when your transaction receives the necessary number of blockchain network confirmations. If the market goes up, you will get more cryptocurrency, if down - less. All fair.</p>
                                        <ul className={'list list-disc ml-[1.2em] text-left'}>
                                            <li>Pay just 0.5% + network fee.</li>
                                            <li>The exchange will be made at the market rate, which is finally set
                                                within 10 minutes after your transaction receives the required number of
                                                confirmations in the blockchain network.
                                            </li>
                                        </ul>
                                        <p className="faq-exchange-example"><strong>Example</strong>: you are exchanging
                                            1 BTC for 28.37362388 ETH. With a <strong>fixed</strong> rate, you will
                                            receive exactly 28.37362388 ETH. With a <strong>float</strong>&nbsp;exchange
                                            rate, the amount of ETH can change both up and down. It depends on changes
                                            in the market rate.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'2 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(4)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>2</div>
                                    <span className={'flex-1'}>What are FixedFloat fees?</span>
                                    <div className={`${activeIndex === 4 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 4 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 4 ? 'h-[389.9px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>You can choose from two exchange strategies:</p>
                                        <ul className={'list-disc ml-[1.2em] text-left'}>
                                            <li><b>Fixed rate</b>: FixedFloat&nbsp;fee 1% + network fee. The exchange
                                                rate is fixed at the time of order creation.
                                            </li>
                                            <li><b>Float rate</b>:&nbsp;FixedFloat&nbsp;fee 0.5% + network fee. The
                                                exchange rate is set only after your transaction arrives and is
                                                confirmed by the network. The order amount may change from the moment
                                                the order was created due to changes in the market rate, both up and
                                                down.
                                            </li>
                                        </ul>
                                        <p>The network fee is a payment to miners for processing a transaction, its amount is individual for each blockchain.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'3 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(5)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>3</div>
                                    <span className={'flex-1'}>How long does the exchange take?</span>
                                    <div className={`${activeIndex === 5 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 5 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 5 ? 'h-[232.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>As soon as your transaction arrives at our address and receives the required number of network confirmations, the exchange is automatically performed and a transaction is sent to your address. The waiting time for transaction confirmation depends on several factors: the network fee you specified when sending it and the speed of the blockchain network.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'4 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(6)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>4</div>
                                    <span className={'flex-1'}>What happens if I set low transactions fees?</span>
                                    <div className={`${activeIndex === 6 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 6 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 6 ? 'h-[232.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>If you send us a transaction with a low network fee, you risk spending a lot of time waiting for the order to be completed. The order will be executed automatically only after your transaction receives the required number of network confirmations. Due to the low fees, the transaction may have poor priority and not be confirmed by the network anytime soon.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'5 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(7)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>5</div>
                                    <span className={'flex-1'}>What can I do to speed up the transaction?</span>
                                    <div className={`${activeIndex === 7 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 7 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 7 ? 'h-[364.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>The average amount of the network fee is individual for each blockchain, and depending on the current load, it may change. The more you set the network fee, the higher the priority of the transaction and the faster it will be processed. Usually, the optimal network fee is automatically calculated by your wallet.</p>
                                        <p>If you have sent us a transaction on the Bitcoin or Ethereum network and are waiting for a network confirmation for a long time, you can increase the priority of your transaction on the network using the RBF feature.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'6 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(8)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>6</div>
                                    <span className={'flex-1'}>Why does sending a transaction take so long?</span>
                                    <div className={`${activeIndex === 8 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 8 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 8 ? 'h-[208.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>The speed of transaction processing depends on the bandwidth of the blockchain and the set fee of the network when it is sent. We automatically send transactions with the current network fee. Sometimes in the blockchain network there are increased loads beyond our control and untimely release of new blocks.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'7 relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(9)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>7</div>
                                    <span className={'flex-1'}>Why is my wallet address recognized as invalid?</span>
                                    <div className={`${activeIndex === 9 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 9 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 9 ? 'h-[232.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>Carefully check the network of the address you are trying to enter when creating the order, and the network of the currency you have selected in the "Receive" field. If your address is determined to be invalid, then your address network does not match the network of the selected currency.</p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                        <ol className={`${selectedOption === '2' ? '' : 'hidden'} faq-list list-none text-white`}>
                            <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(10)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>1</div>
                                    <span className={'flex-1'}>How can I track my order?</span>
                                    <div className={`${activeIndex === 10 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 10 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 10 ? 'h-[184.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>Order status is updated in real time. We recommend that you do not close the order page until it is completed. You can also subscribe to email notifications on the order page. When transactions enter the network, links to explorers appear on the order page to track them.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(11)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>2</div>
                                    <span className={'flex-1'}>What should I do if my order expired?</span>
                                    <div className={`${activeIndex === 11 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 11 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 11 ? 'h-[304.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <p>If your transaction has not arrived before the order time has passed, on the order page you will be able to choose:</p>
                                        <ul className={'list-none'}>
                                            <li>Continue the exchange at a floating rate. The order will be executed after the transaction is received and the required number of network confirmations is received.</li>
                                            <li>Make a refund of the amount sent for the exchange minus the network fee. To do this, you need to specify your address, to which the coins will be returned after receiving your transaction.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                                <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(12)}>
                                    <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>3</div>
                                    <span className={'flex-1'}>I accidentally closed the FixedFloat site, what should I do?</span>
                                    <div className={`${activeIndex === 12 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                        {activeIndex === 12 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                                    </div>
                                </h4>
                                <div className={`${activeIndex === 12 ? 'h-[184.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                                    <div className={'faq-inner pb-[1.4em]'}>
                                        <ul className={'list-none'}>
                                            <li>If you have entered a valid email address in your order, you will receive an email with a link to your order.</li>
                                            <li>You can return to the page through your browser history.</li>
                                            <li>You can ask for help in the Live Chat on the site.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
