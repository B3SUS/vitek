import React from "react";

import timerico from '../img/timer2.png'
import calcul from '../img/calc.png'
import thunder from '../img/thunder.png'
import btcico from '../img/btcico.png'
import bg from '../img/bginfo.svg'

export const OrderInfo = () => {



    return (
        <div className={'order-info flex-col flex font-[Mont]'}>
            <div className={'order-info-known w-full p-[1.5em] box-border bg-[#21284b] rounded-[.5em] text-[#fff]'}>
                <h3 className={'mb-[.75em] text-[2em] font-[MontSemi] pb-[.3em] text-transparent bg-clip-text bg-grad leading-[1.15em]'}>Что нужно знать?</h3>
                <div className={'order-note box-border flex leading-[1.15em] mb-[1em] min-h-[2.5em] relative'}>
                    <img className={'mr-[1em] w-[2.5em] h-[2.5em] p-[.5em] bg-white rounded-full'} src={thunder} alt={thunder}/>
                    <span className={'self-center leading-[1.4]'}>
                        Нужно всего <strong>1</strong> подтверждение блокчейна TRX для осуществления обмена
                    </span>
                </div>
                <div className={'order-note box-border flex leading-[1.15em] mb-[1em] min-h-[2.5em] relative'}>
                    <img className={'mr-[1em] w-[2.5em] h-[2.5em] p-[.5em] bg-white rounded-full'} src={btcico} alt={btcico}/>
                    <span className={'self-center leading-[1.4]'}>
                        Скорость подтверждения транзакции Bitcoin зависит от уровня загруженности сети блокчейн
                    </span>
                </div>
                <div className={'order-note box-border flex leading-[1.15em] mb-[1em] min-h-[2.5em] relative'}>
                    <img className={'mr-[1em] w-[2.5em] h-[2.5em] p-[.5em] bg-white rounded-full'} src={calcul} alt={calcul}/>
                    <span className={'self-center leading-[1.4]'}>
                        Если сумма отправленной вами транзакции будет отличаться от первоначальной суммы указанной в заказе с плавающим курсом, заказ будет автоматически пересчитан.
                    </span>
                </div>
                <div className={'order-note box-border flex leading-[1.15em] mb-[1em] min-h-[2.5em] relative'}>
                    <img className={'mr-[1em] w-[2.5em] h-[2.5em] p-[.5em] bg-white rounded-full'} src={timerico} alt={timerico}/>
                    <span className={'self-center leading-[1.4]'}>
                        Если ваша транзакция поступит после истечения заказа, но в течение 24 часов, то данная транзакция автоматически отобразится в заказе. Вы сможете самостоятельно продолжить заказ или осуществить возврат средств.
                    </span>
                </div>
            </div>
            <div style={{backgroundImage:`url(${bg})`, backgroundPosition: '84% 0'}} className={`order-notice w-full mt-[1em] bg-no-repeat bg-cover h-auto overflow-hidden rounded-[.5em] text-white relative`}>
                <div className={'p-[1.5em] w-full relative h-auto flex flex-col box-border min-h-full '}>
                    <h3 className={'text-[2em] left-[1.5] font-[MontSemi] pb-[.3em] text-transparent bg-grad bg-clip-text mb-[.7em]'}>
                        Уведомления о статусе заказа
                    </h3>
                    <div className={'notice-to-subscribe min-h-[12em]'}>
                        <p className={'text-[.9em] leading-[1.4] w-full mb-[1em]'}>
                            Введите свой email, если хотите получать уведомления об изменении статуса этого заказа.
                        </p>
                        <div className={'input-email flex relative'}>
                            <input type={"text"} value={''} className={'box-border bg-transparent border border-white/[.2] rounded-[.25em] text-white text-[1em] py-[.8334em] px-[.6666667em] w-full'}/>
                            <label className={'text-[#828282] bg-transparent rounded-[.7em] left-[1px] leading-[1.2] p-[.8334em_.2em_.8334em_.6666667em] pointer-events-none absolute top-[1px]'}>Email</label>
                        </div>
                        <button className={'w-full mt-[1em] text-[1em] py-[1em] px-[1.5em] box-border bg-[#008fdf] rounded-[.25em] text-white cursor-pointer inline-flex font-[MontSemi] leading-[1em] relative text-center align-middle justify-center items-center'}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
