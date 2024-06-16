/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { setLanguage } from "react-multi-lang";
import { useState } from "react";

const Translate = () => {
    const [lang, setLang] = useState('en')

    const changeLanguage = () => {
        if (lang === 'en') {
            document.documentElement.classList.add('dirRTL', 'fontFa')
            setLanguage('fa')
            setLang('fa')
        } else {
            document.documentElement.classList.remove('dirRTL', 'fontFa')
            setLanguage('en')
            setLang('en')
        }
    }

    return (
        <>
            <button onClick={changeLanguage} className='font-mono p-4 font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full fixed left-8 bottom-40'>
                {lang === 'en' ? 'FA' : 'EN'}
            </button>
        </>
    );
}

export default Translate;