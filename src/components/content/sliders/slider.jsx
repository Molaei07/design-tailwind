/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CreateItems from "./createItems/createItem";
import { useTranslation } from "react-multi-lang";

const Slider = () => {
    const translate = useTranslation()

    return (
        <div className="w-full flex justify-end p-4">
            <div className="w-full md:w-[90%] lg:w-[87%] h-full flex flex-wrap md:flex-nowrap gap-x-4">
                <div className="w-full md:w-3/12">
                    <a className="w-full text-mainColor text-xs lg:text-base" href="#">{translate('slider.tag')}</a>
                    <h1 className="w-full xl:w-8/12 text-2xl lg:text-3xl font-bold dark:text-white text-[#141E32] mt-4">{translate('slider.titer')}</h1>
                    <p className="text-grayText w-full mt-4 text-xs lg:text-base">{translate('slider.paragraph')}</p>
                </div>
                <div className="w-full md:w-9/12 flex flex-wrap gap-y-2 justify-center pt-4 sm:py-8">
                    <CreateItems />
                </div>
            </div>
        </div>
    );
}

export default Slider;