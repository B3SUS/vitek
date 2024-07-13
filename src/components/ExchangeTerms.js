import React from "react";
import {Link} from "react-router-dom";
import {t} from 'i18next';

export const ExchangeTerms = () => {
    return (
        <div className={'exchange-terms mt-[1em] text-[.85em] text-center text-white/[.6] font-[MontL] relative w-full'}>
            {t('mainPage.hint')} <Link  className={'text-[#018fdf] font-[MontBold]'} to={'/terms'}>{t('mainPage.terms')}</Link> {t('mainPage.hint2')} <Link to={'/policy'} className={'text-[#018fdf] font-[MontBold]'}>{t('mainPage.policy')}</Link>
        </div>
    )
}
