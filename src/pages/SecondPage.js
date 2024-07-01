import React from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import bg from '../img/bg.svg'
import arrow from '../img/arrow.png'

export const SecondPage = () => {

    const location = useLocation();
    const {activeCoin2, valid, amount1, amount2, selectedCoin1, selectedCoin2, selectedIcon1, selectedIcon2} = location.state || {};


    if (!valid){
        return <Navigate to='/' replace/>
    }

    return (
        <div className={'flex flex-col justify-stretch flex-auto'}>
            <div className={'index-main bg-[#151b23] bg-gradient-to-t from-[#0c0d16] to-[#151b23] bg-cover bg-bottom bg-no-repeat relative w-full flex-1'}>
                <Navbar/>
                <div className={'wrapper max-w-none py-0 px-[1em] mx-auto my-0 w-full  text-[12px]'}>
                    <section className={'mt-[4.5em] '}>
                        <div className={'order-body pb-[50px] '}>
                            <section style={{backgroundImage:`url(${bg})`}}  className={`order-direction text-[.8em] relative bg-cover bg-top rounded-[.5em] flex w-full mt-[2.5em] mb-[1em]`}>
                                <div className={'dir-from px-[1em] py-[.85em] float-left box-border text-center w-1/2'}>
                                    <div className={'text-right'}>
                                        <div className={'coin-ico ml-[.5em] float-right h-[2.5em] w-[2.5em] text-center'}><img src={selectedIcon1} alt={selectedIcon1}/></div>
                                        <div className={'mr-[3.333em] text-[#bfbfbf] text-[.8125em] font-[MontL] leading-[1] opacity-80 uppercase whitespace-nowrap text-right'}>
                                            Вы отправляете
                                        </div>
                                        <div className={'order-sed-value mr-[2.321em] text-[1.15em] leading-[1] pb-[2px] pt-[5px] text-right text-white'}>
                                            {amount1} {selectedCoin1}
                                        </div>
                                    </div>
                                </div>
                                <div className={'dir-arrow flex items-center absolute h-full p-0 w-[2.5em] justify-left left-1/2 box-border float-left -translate-x-1/2'}>
                                    <img src={arrow} alt={arrow} className={'h-[20px] w-[20px]'}/>
                                </div>
                                <div className={'dir-to py-[.85em] px-[1em] float-left box-border text-center w-1/2'}>
                                    <div className={'dir-cont text-left'}>
                                        <div className={'coin-ico mr-[.5em] float-left h-[2.5em] w-[2.5em] text-center'}><img src={selectedIcon2} alt={selectedIcon2}/></div>
                                        <div className={'ml-[3.333em] text-[#bfbfbf] text-[.8125em] font-[MontL] leading-[1] opacity-80 uppercase whitespace-nowrap text-left'}>
                                            Вы получаете
                                        </div>
                                        <div className={'order-sed-value ml-[2.321em] text-[1.15em] leading-[1] pb-[2px] pt-[5px] text-white text-left'}>
                                            {amount2} {selectedCoin2}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className={'order-wrap-shadow'}>
                                <div className={'order-action mt-[1em] mb-[1.6em]'}>
                                    <div className={'order-action-body grid grid-cols-[12em_1fr] justify-between'}>
                                        <div className={'order-qr col-start-2 row-start-1 text-center order-4 h-[237.2px] bg-white'}>

                                        </div>
                                        <div style={{backgroundImage:`url(${bg})`}} className={'order-info mr-[1em] row-start-1 order-1 px-[.8em] pt-[.3em] pb-[.7em] rounded-[.5em] text-center bg-cover'}>
                                            <div className={'order-info-inner text-center font-[Mont]'}>
                                                <div className={'order-id-wrap py-[.6em] text-center text-[#879fab]'}>
                                                    <label className={'text-[.85em] whitespace-nowrap font-[Mont]'}>Номер заказа</label>
                                                    <div className={'flex items-center justify-center text-center'}>
                                                        <span onClick={() => {
                                                            navigator.clipboard.writeText('EB4CF4');}} className={'pseudo-hint-blue inline-flex items-center cursor-copy relative leading-[1.2] text-center'}>
                                                            <span className={'text-[1.4em]'}>EB4CF4</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={'order-time py-[.6em] border-t border-gray-600'}>
                                                    <label className={'text-[.85em] whitespace-nowrap inline-block align-middle text-[#879fab]'}>
                                                        Времени осталось
                                                    </label>
                                                </div>
                                                <div className={'py-[.6em] border-t border-gray-600'}>
                                                    <label className={'text-[#879fab] text-[.85em] whitespace-nowrap'}>
                                                        Тип курса
                                                    </label>
                                                    <div className={'text-white'}>
                                                        <span>
                                                            Плавающий
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={'py-[.6em] border-t border-gray-600'}>
                                                    <label className={'text-[.85em] whitespace-nowrap inline-block align-middle text-[#879fab]'}>
                                                        Время создания
                                                    </label>
                                                    <div className={'text-white'}>
                                                        <span>
                                                            30.06.2024 17:36
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{backgroundImage:`url(${bg})`}} className={'order-details col-[1/3] mt-[1em] w-full order-2 rounded-[.5em] box-border p-[1.5em] flex flex-col bg-cover'}>
                                            <div className={'order-data-details pb-[.5em] flex-[1_0_auto]'}>
                                                <div className={'order-p-wrap mb-[1.2em]'}>
                                                    <p className={'order-p-amount text-[.8em] mb-[.3em] font-[Mont] text-[#879fab]'}>
                                                        Отправьте{' '}
                                                        <b className={'relative font-[MontSemi] text-[1.4em] text-[#53ae94]'}>
                                                            50 USDT
                                                        </b>
                                                        {' '}на адрес
                                                    </p>
                                                    <p className={'order-p-address text-[.8em] mb-[.3em] font-[Mont]'}>
                                                        <span className={'relative mt-[.375em] text-[.8em]'}>
                                                            <b className={'relative text-white font-[MontSemi] text-[1.5em]'}>
                                                                TTVvHKrM7sXAvB5fgHcFL6nUj7QP4kxdQS
                                                            </b>
                                                        </span>
                                                    </p>
                                                </div>
                                                <p className={'order-attention text-[.8em] mb-[.3em] font-[Mont] mt-[1.4em] text-[#879fab]'}>
                                                    Курс будет зафиксирован после получения{' '}
                                                    <b className={'text-white font-[MontSemi] text-[.8em]'}>1</b>
                                                    {' '}подтверждений сети
                                                </p>
                                            </div>
                                            <div className={'order-data-destination border-t border-gray-600'}>
                                                <p className={'pt-[.9em] text-[.8em] mb-[.3em]'}>
                                                    <label className={'pb-[.3em] inline-block font-[Mont] text-[#879fab]'}>
                                                        Адрес получения BTC
                                                    </label>
                                                    <br/>
                                                    <span className={'text-white font-[MontSemi] block'}>
                                                        bc1qk2jpzqsm4t77w2dyc3ck7sg8eg28ggzq6yu2jr
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
