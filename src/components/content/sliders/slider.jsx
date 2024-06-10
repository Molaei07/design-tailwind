/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CreateItems } from "./createItems/createItem";

export const Slider = () => {
    return (
        <div className="w-full flex justify-end p-4">
            <div className="w-full md:w-[90%] lg:w-[87%] h-full flex flex-wrap md:flex-nowrap gap-x-4">
                <div className="w-full md:w-[25%]">
                    <a className="w-full text-[#545BE8] text-xs lg:text-base" href="#">WHAT WE GIVE</a>
                    <h1 className="w-full xl:w-8/12 text-2xl lg:text-3xl font-[700] text-[#141E32] mt-4">What do You Get From Us</h1>
                    <p className="text-[#969696] w-full mt-4 text-xs lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                </div>
                <div className="w-full md:w-[75%] flex flex-wrap gap-y-2 justify-center pt-4 sm:py-8">
                    <CreateItems />
                </div>
            </div>
        </div>
    );
}