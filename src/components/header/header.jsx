/* eslint-disable no-unused-vars */
// Translation Hook
import { useTranslation } from "react-multi-lang";

const Header = () => {

    const translate = useTranslation()

    return (
        <header className="w-full dark:bg-black gap-y-4 px-2.5 sm:px-[50px] py-4 flex justify-between items-center flex-wrap shadow-lg lg:justify-evenly lg:gap-y-0">
            {/* Logo */}
            <div className="w-2/5 flex justify-start gap-x-2 items-center lg:w-[150px]">
                <div className="w-[30px] h-[30px]">
                    <img src="./Logo.png" alt="Logo" className="w-full h-full" />
                </div>
                <span className="text-mainColor dark:text-white text-xs">{translate('nameApplication')}</span>
            </div>
            {/* Item in menu */}
            <ul className="w-full order-1 flex justify-between text-xs lg:w-2/5 lg:order-none sm:text-sm">
                <li className="itemMenu">{translate('menu.home')}</li>
                <li className="itemMenu">{translate('menu.course')}</li>
                <li className="itemMenu">{translate('menu.aboutUs')}</li>
                <li className="itemMenu">{translate('menu.article')}</li>
                <li className="itemMenu">{translate('menu.contact')}</li>
            </ul>
            {/* Btn to sing */}
            <div className="w-1/2 flex justify-between gap-x-1 lg:w-[20%] lg:gap-x-5">
                <div className="text-mainColor dark:text-white  border-2 border-mainColor border-solid entryBtn dark:hover:bg-blue-900/50">
                    {translate('button.logIn')}
                </div>
                <div className="registerBtn">
                    {translate('button.register')}
                </div>
            </div>
        </header>
    );
}

export default Header;