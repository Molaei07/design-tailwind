import { useTranslation } from "react-multi-lang";

/* eslint-disable react/prop-types */
const AvailableItems = ({price, name, viewNumber, videoNumber, teacherNumber, picture}) => {
    const translate = useTranslation(); 

    return (
        <div className="w-[48%] h-[250px] dark:bg-[#222222] xl:h-[300px] rounded-lg overflow-hidden flex flex-wrap justify-center shadow-xl transition-all duration-200 cursor-pointer hover:scale-105">
            <div className="w-full h-3/4 relative">
                <img className="w-full h-full" src={"./" + picture} alt="Logo" />
                <div className="absolute top-6 left-0 p-1 lg:p-2 bg-mainColor text-white">{translate('availableItems.tag')}</div>
                <div className="absolute bottom-2 right-2 text-white text-sm lg:text-xl lg:font-bold p-2 z-10">$ {price} USD</div>
                <div className="w-full h-14 bg-gradient-to-t from-black absolute bottom-0 left-0"></div>
            </div>
            <div className="w-full h-1/4 flex flex-wrap justify-between p-2">
                <h1 className="w-1/2 h-1/2 dark:text-white text-[#141E32] text-sm lg:text-base xl:text-xl xl:font-bold">{name}</h1>
                <span className="w-1/2 text-right text-xs lg:text-sm xl:text-base text-mainColor h-/1/2">{viewNumber} {translate('availableItems.view')}</span>
                <div className="w-full h-1/2 flex gap-x-2">
                    <span className="text-grayText text-xs lg:text-sm xl:text-base">{videoNumber} {translate('availableItems.video')}</span>
                    <span className="text-grayText text-xs lg:text-sm xl:text-base">{teacherNumber} {translate('availableItems.teacher')}</span>
                </div>
            </div>
        </div>
    );
}

export default AvailableItems;