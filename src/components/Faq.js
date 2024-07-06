import React, {useState} from "react";

import plus1 from '../img/plus1.png'
import plus2 from '../img/plus2.png'
import arrow from '../img/faqarrow.png'
import {Link} from "react-router-dom";


export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null); // Храним только один активный индекс

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Переключаем активный элемент
    };

    return (
        <div className={'faq-wrapper mb-[4em]'}>
            <div className={'wrapper px-[1em] max-w-none box-border mx-auto w-full'}>
                <h2 className={'text-[2em] font-[MontBold] mb-[.7em] text-transparent bg-clip-text bg-grad leading-[1.15em]'}>
                    <span>
                        FAQ
                    </span>
                </h2>
                <ol className={'faq-list list-none text-white'}>
                    <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                        <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(0)}>
                            <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>1</div>
                            <span className={'flex-1'}>Как отследить мой заказ?</span>
                            <div className={`${activeIndex === 0 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                {activeIndex === 0 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                            </div>
                        </h4>
                        <div className={`${activeIndex === 0 ? 'h-[136.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                            <div className={'faq-inner pb-[1.4em]'}>
                                <p>
                                    Тремя способами: в реальном времени на нашем сайте, через подписку на email уведомления или путем просмотра транзакций в блокчейн по ссылкам из вашего заказа.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                        <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(1)}>
                            <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>2</div>
                            <span className={'flex-1'}>Почему я могу вам доверять?</span>
                            <div className={`${activeIndex === 1 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                {activeIndex === 1 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                            </div>
                        </h4>
                        <div className={`${activeIndex === 1 ? 'h-[136.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                            <div className={'faq-inner pb-[1.4em]'}>
                                <p>
                                    Никакой регистрации и удержания ваших средств, все обмены проходят с максимальной скоростью и в полностью автоматическом режиме.                                 </p>
                            </div>
                        </div>
                    </li>
                    <li className={'relative border-b border-[#7e7e7e] cursor-pointer'}>
                        <h4 className={'font-[Mont] text-[1.8em] flex justify-between items-center pb-[1.4rem] pt-[1.4rem]'} onClick={() => toggleActive(2)}>
                            <div className={'text-[2.111111em] w-[1.4em] min-w-[1.4em] block text-center mr-[.7em]'}>3</div>
                            <span className={'flex-1'}>Есть ли скрытые комиссии?</span>
                            <div className={`${activeIndex === 2 ? 'rotate-45 bg-[#008FDF]' : 'bg-[#008fdf33]'} transition-rotate rounded-[2em] text-[.833333em] p-[.55em]`}>
                                {activeIndex === 2 ? <img src={plus2} alt={plus2} className={'h-[22px] w-[22px]'}/> : <img src={plus1} alt={plus1} className={'h-[22px] w-[22px]'}/>}

                            </div>
                        </h4>
                        <div className={`${activeIndex === 2 ? 'h-[136.8px]' : 'h-0'} leading-[2em] ml-[8em] overflow-hidden box-border cursor-default transition-height`}>
                            <div className={'faq-inner pb-[1.4em]'}>
                                <p>
                                    Честность — наш главный приоритет, поэтому все наши комиссии максимально прозрачны:
                                </p>
                                <p>
                                    •  1% за фиксированный курс
                                    <br/>
                                    •  0.5% если вы выбираете плавающий курс
                                </p>
                            </div>
                        </div>
                    </li>
                    <div className={'faq-more text-right py-[2.34em]'}>
                        <Link to={'/faq'} className={'text-[#008FDF] flex font-[Mont] float-right items-center'}>
                            <span className={''}>Перейти на страницу FAQ</span>
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
