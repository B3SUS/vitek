import React from "react";
import {Link} from "react-router-dom";

export const ExchangeTerms = () => {
    return (
        <div className={'exchange-terms mt-[1em] text-[.85em] text-center text-white/[.6] font-[MontL] relative w-full'}>
            By using the site and creating an exchange, you agree to the FixedFloat's <Link  className={'text-[#018fdf] font-[MontBold]'} to={'/terms'}>Terms of Services</Link> and <Link to={'/policy'} className={'text-[#018fdf] font-[MontBold]'}>Privacy Policy</Link>
        </div>
    )
}
