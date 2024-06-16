import { useTranslation } from "react-multi-lang";
import AvailableItems from "./createAvailableItems";

const AvailableCourses = () => {
    const translate = useTranslation(); 

    return (
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-y-8 sm:gap-y-0 justify-center gap-x-4 lg:gap-x-8 px-4 md:px-28 lg:px-36 xl:px-44 py-2 md:py-12">
            <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-2 lg:gap-4 lg:p-4">
                <AvailableItems price={20} name={translate('availableItems.item1.name')} viewNumber={"1,500"} videoNumber={150} teacherNumber={2} picture={"HTML & CSS.png"} />
                <AvailableItems price={20} name={translate('availableItems.item2.name')} viewNumber={"1,500"} videoNumber={100} teacherNumber={2} picture={"Photographer.png"} />
                <AvailableItems price={20} name={translate('availableItems.item3.name')} viewNumber={"1,500"} videoNumber={150} teacherNumber={2} picture={"Javascript.png"} />
                <AvailableItems price={20} name={translate('availableItems.item4.name')} viewNumber={"1,500"} videoNumber={100} teacherNumber={2} picture={"Desain Grafis.png"} />
            </div>
            <div className="w-full order-[-1] sm:order-1 sm:w-1/3 pt-2">
                <a className="text-mainColor text-sm xl:text-base w-full" href="#">{translate('availableCourses.tag')}</a>
                <h1 className="w-2/3 dark:text-white text-[#141E32] text-2xl xl:text-4xl font-bold xl:mt-4">{translate('availableCourses.titer')}</h1>
                <p className="w-full xl:w-3/4 text-sm text-grayText xl:mt-4">{translate('availableCourses.paragraph')}</p>
                <button className="registerBtn mt-2 xl:mt-4">{translate('button.availableCourses')}</button>
            </div>
        </div>
    );
}

export default AvailableCourses;