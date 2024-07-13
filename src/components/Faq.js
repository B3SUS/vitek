import React, {useState} from "react";

import plus1 from '../img/plus1.png'
import plus2 from '../img/plus2.png'
import arrow from '../img/faqarrow.png'
import {Link} from "react-router-dom";
import {t} from 'i18next'


export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null); // Храним только один активный индекс

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Переключаем активный элемент
    };

    return (
        <div className={'faq-wrapper mb-[4em] md:mb-[14em]'}>
            <div className={'wrapper px-[1em] max-w-none box-border mx-auto w-full md:max-w-[1280px] md:px-[2em]'}>
                <h2 className={'text-[2em] font-[MontBold] mb-[.7em] text-transparent bg-clip-text bg-grad leading-[1.15em]'}>
                    <span>
                        FAQ
                    </span>
                </h2>
                <ol className={'faq-list list-none text-white'}>
                    <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                        <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(0)}>
                            <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>1</div>
                            <span className={'flex-1'}>{t('faq.title1')}</span>
                            <div className={`${activeIndex === 0 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                {activeIndex === 0 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                            </div>
                        </h4>
                        <div className={`${activeIndex === 0 ? 'h-[136.8px] md:h-[86.4px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                            <div className={'faq-inner pb-[1.4em]'}>
                                <p>
                                    {t('faq.text1')}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                        <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(1)}>
                            <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>2</div>
                            <span className={'flex-1'}>{t('faq.title2')}</span>
                            <div className={`${activeIndex === 1 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                {activeIndex === 1 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                            </div>
                        </h4>
                        <div className={`${activeIndex === 1 ? 'h-[124.8px] md:h-[102.4px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                            <div className={'faq-inner pb-[1.4em]'}>
                                <p>
                                    {t('faq.text2')}                              </p>
                            </div>
                        </div>
                    </li>
                    <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                        <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(2)}>
                            <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>3</div>
                            <span className={'flex-1'}>{t('faq.title3')}</span>
                            <div className={`${activeIndex === 2 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                {activeIndex === 2 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                            </div>
                        </h4>
                        <div className={`${activeIndex === 2 ? 'h-[148.8px] md:h-[134.4px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                            <div className={'faq-inner pb-[1.4em]'}>
                                <p>
                                    {t('faq.text3')}
                                </p>
                                <p>
                                    •  {t('faq.fix')}
                                    <br/>
                                    •  {t('faq.float')}
                                </p>
                            </div>
                        </div>
                    </li>
                    <div className={'faq-more text-right py-[2.34em]'}>
                        <Link to={'/faq'} className={'text-[#008FDF] flex font-[Mont] float-right items-center'}>
                            <span className={''}>{t('faq.goto')}</span>
                            <div className={`bg-[#008fdf33] rounded-full text-[1.5em] p-[.55em] inline-block ml-[1em]`}>
                                <img src={arrow} alt={arrow} className={'w-[18px]'}/>
                            </div>
                        </Link>
                    </div>
                </ol>
            </div>
        </div>
    )
}
