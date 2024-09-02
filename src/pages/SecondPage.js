import React, {Suspense, useEffect, useState} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import bg from '../img/bg.svg'
import arrow from '../img/arrow.png'
import Timer from "../components/Timer";
import {Footer} from "../components/Footer";
import {OrderInfo} from "../components/OrderInfo";
import QRCode from "react-qr-code";
import {t} from 'i18next'

export const SecondPage = () => {

    const location = useLocation();
    const {activeCoin2, valid, amount1, amount2, selectedCoin1, selectedCoin2, selectedIcon1, selectedIcon2, currentTime, randomCode, selectedColor1, selectedColor2, address, selectedOption} = location.state || {};
    const { initialTime } = location.state || { initialTime: 1800 };

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://66d42d0a5b34bcb9ab3ddbec.mockapi.io/address?id=${selectedCoin1}`);
                let data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedCoin1]);

    const [qr, setQr] = useState('1');

    const handleOptionChange = (e) => {
        setQr(e.target.value);
    };

    if (!valid){
        return <Navigate to='/' replace/>
    }

    const qrcodeValue = () => {
        if (loading) {
            return '';
        }
        if(qr==='1') return items[0].address
        else return `${items[0].prefix}:${items[0].address}?amount=${amount2}`
    }



    return (
        <Suspense fallback={"Loading..."}>
            <div className={'flex flex-col justify-stretch flex-auto font-[Mont]'}>
                <div className={'index-main bg-[#151b23] bg-gradient-to-t from-[#0c0d16] to-[#151b23] bg-cover bg-bottom bg-no-repeat relative w-full flex-1'}>
                    <Navbar/>
                    <div className={'wrapper max-w-none md:max-w-[1280px] xmd:text-[13px] lmd:text-[14px] lg:text-[16px] py-0 px-[1em] mx-auto my-0 w-full text-[12px]'}>
                        <section className={'mt-[4.5em] '}>
                            <div className={'order-body pb-[50px] '}>
                                <section style={{backgroundImage:`url(${bg})`}}  className={`order-direction text-[.8em] relative bg-cover bg-top rounded-[.5em] flex w-full mt-[2.5em] mb-[1em]`}>
                                    <div className={'dir-from md:p-[2em_2em_2em_1em] md:float-none px-[1em] py-[.85em] float-left box-border text-center w-1/2'}>
                                        <div className={'text-right'}>
                                            <div className={'coin-ico ml-[.5em] float-right h-[2.5em] w-[2.5em] md:h-[3.75em] md:w-[3.75em] text-center'}><img src={selectedIcon1} alt={selectedIcon1}/></div>
                                            <div className={'mr-[3.333em] text-[#bfbfbf] text-[.8125em] font-[MontL] leading-[1] opacity-80 uppercase whitespace-nowrap text-right'}>
                                                {t('second.send')}
                                            </div>
                                            <div className={`order-sed-value mr-[2.321em] text-[1.15em] md:text-[1.4em] leading-[1] pb-[2px] pt-[5px] text-right text-[${selectedColor1}]`}>
                                                {amount1} {selectedCoin1}
                                            </div>
                                            <div className={'coin-address invisible md:visible mr-[5.46875em] text-[#ababab] text-[.8em] font-[MontL]'}>
                                                {loading ? "Loading..." : items[0].address}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'dir-arrow flex items-center absolute h-full p-0 w-[2.5em] justify-left left-1/2 box-border float-left -translate-x-1/2'}>
                                        <img src={arrow} alt={arrow} className={'h-[20px] w-[20px]'}/>
                                    </div>
                                    <div className={'dir-to md:p-[2em_1em_2em_2em] py-[.85em] px-[1em] float-left box-border text-center w-1/2'}>
                                        <div className={'dir-cont text-left'}>
                                            <div className={'coin-ico mr-[.5em] float-left h-[2.5em] w-[2.5em] md:h-[3.75em] md:w-[3.75em] text-center'}><img src={selectedIcon2} alt={selectedIcon2}/></div>
                                            <div className={'ml-[3.333em] text-[#bfbfbf] text-[.8125em] font-[MontL] leading-[1] opacity-80 uppercase whitespace-nowrap text-left'}>
                                                {t('second.receive')}
                                            </div>
                                            <div className={`order-sed-value ml-[2.321em] text-[1.15em] md:text-[1.4em] leading-[1] pb-[2px] pt-[5px] text-[${selectedColor2}] text-left`}>
                                                {amount2} {selectedCoin2}
                                            </div>
                                            <div className={'coin-address invisible md:visible text-[#ababab] text-[.8em] font-[MontL]'}>
                                                {address}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className={'order-wrap-shadow'}>
                                    <div className={'order-action mt-[1em] mb-[1.6em]'}>
                                        <div className={'order-action-body grid grid-cols-[12em_1fr] justify-between xmd:flex'}>
                                            <div className={'order-qr min-w-[15.2em] max-w-[18em] rounded-[.5em] mx-auto xmd:mx-0 md:ml-[1em] col-start-2 row-start-1 text-center order-4 bg-white xmd:w-[16.3em]'}>
                                                <QRCode className={'p-[1.2em] max-h-[18em] md:max-h-none w-full'} value={qrcodeValue()}/>
                                                <div className={'qr-switcher rounded-b-[.5em] flex relative bg-white md:mt-0 -mt-[.5em] text-center'}>
                                                    <label className={`qr-type1 ${qr === '1' ? 'bg-white text-black' : 'bg-[#ececec] text-[#a6a6a6]'} rounded-tr-[.6em] border-0 rounded-b-[.5em] w-1/2 py-[.9em] px-[.3em] text-[.75em] cursor-pointer font-[MontSemi] relative box-border`}>
                                                        <input type={"radio"} value={"1"} className={'fixed-type absolute -z-50 hidden cursor-pointer'} checked={qr === '1'} onChange={handleOptionChange}/>
                                                        <span>{t('second.qr')}</span>
                                                    </label>


                                                    <label className={`qr-type1 ${qr === '2' ? 'bg-white text-black' : 'bg-[#ececec] text-[#a6a6a6]'} rounded-tl-[.6em] rounded-b-[.5em] w-1/2 py-[.9em] px-[.3em] text-[.75em] cursor-pointer font-[MontSemi] relative box-border`}>
                                                        <input type={"radio"} value={"2"} className={'fixed-type absolute -z-50 hidden cursor-pointer'} checked={qr === '2'} onChange={handleOptionChange}/>
                                                        <span>{t('second.qrWith')}</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div style={{backgroundImage:`url(${bg})`}} className={'order-info mr-[1em] row-start-1 order-1 px-[.8em] pt-[.3em] pb-[.7em] rounded-[.5em] text-center bg-cover'}>
                                                <div className={'order-info-inner text-center font-[Mont]'}>
                                                    <div className={'order-id-wrap py-[.6em] text-center text-[#879fab]'}>
                                                        <label className={'text-[.85em] whitespace-nowrap font-[Mont]'}>{t('second.info.id')}</label>
                                                        <div className={'flex items-center justify-center text-center'}>
                                                        <span onClick={() => {
                                                            navigator.clipboard.writeText(randomCode);}} className={'pseudo-hint-blue inline-flex items-center cursor-copy relative leading-[1.2] text-center'}>
                                                            <span className={`text-[1.4em] text-[${selectedColor2}]`}>{randomCode}</span>
                                                        </span>
                                                        </div>
                                                    </div>
                                                    <div className={'order-time py-[.6em] border-t border-gray-600'}>
                                                        <label className={'text-[.85em] whitespace-nowrap inline-block align-middle text-[#879fab]'}>
                                                            {t('second.info.time')}
                                                        </label>
                                                        <div className={''}>
                                                            <Timer initialTime={initialTime} selectedColor2={selectedColor2}/>
                                                        </div>
                                                    </div>
                                                    <div className={'py-[.6em] border-t border-gray-600'}>
                                                        <label className={'text-[#879fab] text-[.85em] whitespace-nowrap'}>
                                                            {t('second.info.type')}
                                                        </label>
                                                        <div className={'text-white'}>
                                                        <span>
                                                            {selectedOption === 'float' ? t('second.info.float') : t('second.info.fixed')}
                                                        </span>
                                                        </div>
                                                    </div>
                                                    <div className={'py-[.6em] border-t border-gray-600'}>
                                                        <label className={'text-[.85em] whitespace-nowrap inline-block align-middle text-[#879fab]'}>
                                                            {t('second.info.created')}
                                                        </label>
                                                        <div className={'text-white'}>
                                                        <span>
                                                            {currentTime}
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{backgroundImage:`url(${bg})`}} className={'order-details col-[1/3] mt-[1em] md:mt-0 w-full xmd:w-custom order-2 rounded-[.5em] box-border p-[1.5em] flex flex-col bg-cover'}>
                                                <div className={'order-data-details pb-[.5em] md:pb-[1.7em] flex-[1_0_auto]'}>
                                                    <div className={'order-p-wrap mb-[1.2em]'}>
                                                        <p className={'order-p-amount text-[.8em] xmd:break-words md:text-[1em] mb-[.3em] font-[Mont] text-[#879fab]'}>
                                                            {t('second.details.send')}{' '}
                                                            <b className={`relative font-[MontSemi] text-[1.4em] text-[${selectedColor1}]`}>
                                                                {amount1} {selectedCoin1}
                                                            </b>
                                                            {' '}{t('second.details.to')}
                                                        </p>
                                                        <p className={'order-p-address text-[.8em] md:text-[1em] mb-[.3em] font-[Mont] xmd:break-words'}>
                                                        <span className={'relative mt-[.375em] text-[.8em]'}>
                                                            <b className={'relative text-white font-[MontSemi] text-[1.5em] xmd:break-words'}>
                                                                {loading ? "Loading..." : items[0].address}
                                                            </b>
                                                        </span>
                                                        </p>
                                                    </div>
                                                    <p className={'order-attention text-[.8em] md:text-[1em] mb-[.3em] font-[Mont] mt-[1.4em] text-[#879fab] xmd:break-words'}>
                                                        {t('second.details.p1')}{' '}
                                                        <b className={'text-white font-[MontSemi] text-[.8em] md:text-[1em]'}>1</b>
                                                        {' '}{t('second.details.p2')}
                                                    </p>
                                                </div>
                                                <div className={'order-data-destination border-t border-gray-600'}>
                                                    <p className={'pt-[.9em] text-[.8em] md:text-[1em] mb-[.3em]'}>
                                                        <label className={'pb-[.3em] inline-block font-[Mont] text-[#879fab]'}>
                                                            {t('second.details.address')} {selectedCoin2}
                                                        </label>
                                                        <br/>
                                                        <span className={'text-white font-[MontSemi] block xmd:break-words'}>
                                                        {address}
                                                    </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <OrderInfo/>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Suspense>
    )
}
