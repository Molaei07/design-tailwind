import { getLanguage } from "react-multi-lang";

/* eslint-disable react/prop-types */
const TestimonialItems = ({name, picture, type, paragraph}) => {
    const languageType = getLanguage()

    return (
        <div className="w-full sm:w-[48%] h-auto dark:bg-[#222222] flex flex-wrap gap-y-4 shadow-xl px-2 md:px-6 py-2 md:py-8 relative transition-all duration-200 hover:scale-105">
            <div className="w-full h-fit flex gap-x-2">
                <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
                    <img className="w-full h-full" src={"./" + picture} alt="Logo" />
                </div>
                <div className="flex flex-wrap gap-y-2 h-full">
                    <span className="text-xl font-bold dark:text-white w-full">{name}</span>
                    <span className="text-sm text-[#969696] w-full">{type}</span>
                </div>
            </div>
            <span className="w-1/3 sm:w-1/2 lg:w-1/3 h-7">
                <img className="w-full h-full" src="./star.png" alt="Star" />
            </span>
            <p className="text-[#646464] md:text-base dark:text-white w-full">“  {paragraph} “ </p>
            {languageType === 'en' ? <div className="triangle-en absolute top-0 right-0"></div> : <div className="triangle-fa absolute top-0 left-0"></div>}
        </div>
    );
}

export default TestimonialItems;