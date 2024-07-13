import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import triangle from "../flags/triangle.png";
import ru from "../flags/ru.png";
import en from "../flags/en.png";
import de from "../flags/de.png";
import fr from "../flags/fr.png";
import pl from "../flags/pl.png";
import it from "../flags/it.png";
import ch from "../flags/ch.png";
import sk from "../flags/sk.png";
import jap from "../flags/jap.png";
import tk from "../flags/tk.png";
import nl from "../flags/nl.png";
import sp from "../flags/sp.png";
import pr from "../flags/pr.png";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const langs = {
        en: { flag: en, full: 'English' },
        sp: { flag: sp, full: 'Español' },
        de: { flag: de, full: 'Deutsch' },
        fr: { flag: fr, full: 'Français' },
        pr: { flag: pr, full: 'Português' },
        ru: { flag: ru, full: 'Русский' },
        pl: { flag: pl, full: 'Polski' },
        nl: { flag: nl, full: 'Nederlands' },
        tk: { flag: tk, full: 'Türkçe' },
        it: { flag: it, full: 'Italiano' },
        ch: { flag: ch, full: '中文' },
        sk: { flag: sk, full: '한국어' },
        jap: { flag: jap, full: '日本の' },


    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
        window.location.reload();
        console.log(i18n.language);
    };

    const currentFlag = langs[i18n.language]?.flag || en;

    return (
        <div className="cta absolute top-0 right-0 h-full justify-center items-center md:w-1/3 flex text-[12px] md:text-[16px]">
            <div className="language-selector flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <img className="h-[20px] md:h-[27px]" src={currentFlag} alt="Flag" />
                <img className="triangle invisible md:visible h-[1em]" src={triangle} alt="Triangle" />
            </div>
            <div className={`language-popup md:max-h-[40em] box-border bg-[#21284B] rounded-[.5rem] text-[#808191] absolute w-screen h-screen md:h-fit top-[100%] md:w-fit md:-translate-x-1/3 md:transition-none transition-transform duration-300 ${open ? 'md:visible' : 'invisible translate-x-2/3'}`}>
                <ul className="flex flex-col pl-[.6em]">
                    {Object.entries(langs).map(([key, { flag, full }]) => (
                        <li
                            key={key}
                            onClick={() => { changeLanguage(key); setOpen(!open); }}
                            className={`${i18n.language === key ? 'active' : ''} flex rounded-l-[.5rem] items-center gap-x-2 py-[.5em] pr-[2.5em] pl-[1.25em] cursor-pointer hover:text-[#008FDF] hover:bg-[#008fdf33] transition-background duration-250`}
                        >
                            <img className="h-[30px]" src={flag} alt="Flag" />
                            <h5 className="font-[MontSemi] text-[.9em]">
                                {full}
                            </h5>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`md:hidden shadow-body bg-[#000] bottom-0 top-0 left-0 right-0 opacity-70 fixed transition-[opacity_.3s_ease] -z-50 ${open ? '' : 'hidden'}`}></div>
        </div>
    );
};
