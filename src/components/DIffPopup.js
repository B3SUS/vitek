import React from "react";
import close from '../svg/close.png'
import {t} from 'i18next'

export const DIffPopup = ({diffActive, handleClick}) => {
    return (
        <div className={`${diffActive === false ? 'hidden' : '' } md:rounded-[.5em] diffpopup pr-0 z-[100] box-border h-full left-0 fixed top-0 w-full font-[MontSemi]`}>

            <div className={'popup-wrap flex overflow-y-auto text-[12px] bg-[#21284b] bg-opacity-40 h-full'}>
                <div className={'popup-content bg-[#21284b] flex flex-col text-[1.4em] py-[2em] px-[1.8em] box-border  m-auto max-w-[650px] pointer-events-auto relative text-center w-full leading-[1.5]'}>
                    <div onClick={handleClick} className={'cursor-pointer py-[1em] px-[.7em] absolute top-0 right-0 z-[999]'}>
                        <img src={close} alt={close} className={`w-[25px] h-[25px]`}/>
                    </div>
                    <h3 className={'bg-grad text-[1.6em] pb-[.3em] text-transparent bg-clip-text leading-[1.15em] mb-[.7em]'}>
                        {t('popup.title')}
                    </h3>
                    <div className={'exchange-different-faq font-[Mont]'}>
                        <h3 className={'mb-[.2em] text-[1em] font-[MontBold] mt-[1em] text-left text-white pb-[.3em] leading-[1.15em]'}>
                            <b>
                                {t('popup.fix.text')}
                            </b>
                        </h3>
                        <p className={'mb-[.2em] leading-[1.2] indent-0 text-justify'}>
                            {t('popup.fix.1')}
                        </p>
                        <ul className={'mb-[.5em] list-disc ml-[1.2em] text-left'}>
                            <li>
                                {t('popup.fix.p1')}
                            </li>
                            <li>
                                {t('popup.fix.p2')}
                            </li>
                            <li>
                                {t('popup.fix.p3')}
                            </li>
                        </ul>
                        <p className={'indent-0 leading-[1.2] text-justify mb-[.2em] font-[MontIt]'}>
                            <em>
                                {t('popup.fix.att')}
                            </em>
                        </p>
                        <h3 className={'mt-[1.4em] text-[1em] font-[MontBold] mb-[.3em] text-left text-white pb-[.3em]'}>
                            <b>
                                {t('popup.float.title')}
                            </b>
                        </h3>
                        <p className={'indent-0 leading-[1.2] text-justify mb-[.2em]'}>
                            {t('popup.float.text')}
                        </p>
                        <ul className={'mb-[.5em] list-disc ml-[1.2em] text-left'}>
                            <li>
                                {t('popup.float.p1')}
                            </li>
                            <li>
                                {t('popup.float.p2')}
                            </li>
                        </ul>
                        <p className={'pl-[1em] border-l-[#0171a6] border-solid border-l-[2px] text-[.9em] font-[MontIt] text-left indent-0 leading-[1.2]'}>
                            <strong className={'font-[MontBoldIt]'}>{t('popup.float.ex')}</strong>
                            {t('popup.float.t1')}
                            <strong className={'font-[MontBoldIt]'}> {t('popup.float.fixed')} </strong>
                            {t('popup.float.t2')}
                            <strong className={'font-[MontBoldIt]'}> {t('popup.float.float')} </strong>
                            {t('popup.float.t3')}
                        </p>
                    </div>
                    <div className={'popup-ctrl flex flex-wrap gap-[.5em] justify-center mt-[2em]'}>
                        <span onClick={handleClick} className={'bt-submit bg-[#0171a6] text-white ml-0 min-w-[100px] py-[1em] px-[1.5em] box-border border-0 rounded-[.25em] cursor-pointer inline-flex text-[1em] font-[MontSemi] leading-[1] relative text-center justify-center items-center'}>
                            Ok
                        </span>
                    </div>
                </div>
            </div>
            <div className={'absolute h-full left-0 top-0 w-full -z-10 backdrop-blur-[10px] bg-[#21284b66]'}>

            </div>
        </div>
    )
}
