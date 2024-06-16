/* eslint-disable react/prop-types */
import { useTranslation } from "react-multi-lang";
import LinksInFooter from "./createLinksFooter";

export const SocialMediaItems = ({ picture }) => {
    return (
        <li className="w-6 lg:w-8 h-6 lg:h-8 border-2 border-white border-solid cursor-pointer">
            <img className="w-full h-full" src={"./" + picture} alt="Logo" />
        </li>
    );
}

export const Footer = () => {
    const translate = useTranslation()

    return (
        <footer className="w-full lg:h-[400px] bg-[#393E46] flex flex-wrap gap-y-4 md:gap-y-0 md:flex-nowrap justify-center gap-x-4 lg:gap-x-8 px-4 md:px-28 lg:px-48 py-12">
            <div className="w-full md:w-2/5 h-full p-2">
                <div className="w-full h-auto flex gap-x-2 items-center">
                    <div className="w-6 lg:w-9 h-6 lg:h-9">
                        <img className="w-full h-full" src="Logo.png" alt="Logo" />
                    </div>
                    <span className="text-white font-bold text-xs lg:text-sm">{translate('nameApplication')}</span>
                </div>
                <p className="w-full text-xs lg:text-sm text-[#F4F4F4] mt-4 lg:mt-8">
                    {translate('footer.paragraph')}
                </p>
                <ul className="w-full flex justify-center md:justify-start gap-x-2 p-1 mt-4 lg:mt-8">
                    <SocialMediaItems picture={"instagram.png"} />
                    <SocialMediaItems picture={"twetter.png"} />
                    <SocialMediaItems picture={"linkedin.png"} />
                    <SocialMediaItems picture={"facebook.png"} />
                </ul>
            </div>
            <ul className="w-full md:w-3/5 h-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-4 sm:gap-y-0 sm:gap-x-8">
                <LinksInFooter partName={translate('footer.table.home.titer')} link1={translate('footer.table.home.item1')} link2={translate('footer.table.home.item2')} link3={translate('footer.table.home.item3')} link4={translate('footer.table.home.item4')} />
                <LinksInFooter partName={translate('footer.table.course.titer')} link1={translate('footer.table.course.item1')} link2={translate('footer.table.course.item2')} link3={translate('footer.table.course.item3')} link4={translate('footer.table.course.item4')} />
                <LinksInFooter partName={translate('footer.table.article.titer')} link1={translate('footer.table.article.item1')} link2={translate('footer.table.article.item2')} link3={translate('footer.table.article.item3')} link4={translate('footer.table.article.item4')} />
                <LinksInFooter partName={translate('footer.table.contactUs.titer')} link1={translate('footer.table.contactUs.item1')} link2={""} link3={""} link4={""} />
            </ul>
        </footer>
    );
}