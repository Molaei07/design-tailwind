/* eslint-disable react/prop-types */
export const AvailableItems = ({price, name, viewNumber, videoNumber, teacherNumber, picture}) => {
    return (
        <div className="w-[48%] h-[250px] dark:bg-[#222222] xl:h-[300px] rounded-lg overflow-hidden flex flex-wrap justify-center shadow-xl transition-all duration-200 cursor-pointer hover:scale-105">
            <div className="w-full h-3/4 relative">
                <img className="w-full h-full" src={"./" + picture} alt="Logo" />
                <div className="absolute top-6 left-0 p-1 lg:p-2 bg-mainColor text-white">Best Course</div>
                <div className="absolute bottom-2 right-2 text-white text-sm lg:text-xl lg:font-bold p-2 z-10">$ {price} USD</div>
                <div className="w-full h-14 bg-gradient-to-t from-black absolute bottom-0 left-0"></div>
            </div>
            <div className="w-full h-1/4 flex flex-wrap justify-between p-2">
                <h1 className="w-1/2 h-1/2 dark:text-white text-[#141E32] text-sm lg:text-base xl:text-xl xl:font-bold">{name}</h1>
                <span className="w-1/2 text-right text-xs lg:text-sm xl:text-base text-mainColor h-/1/2">{viewNumber} Views</span>
                <div className="w-full h-1/2 flex gap-x-2">
                    <span className="text-grayText text-xs lg:text-sm xl:text-base">{videoNumber} Videos</span>
                    <span className="text-grayText text-xs lg:text-sm xl:text-base">{teacherNumber} Teacher</span>
                </div>
            </div>
        </div>
    );
}

export const AvailableCourses = () => {
    return (
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-y-8 sm:gap-y-0 justify-center gap-x-4 lg:gap-x-8 px-4 md:px-28 lg:px-36 xl:px-44 py-2 md:py-12">
            <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-2 lg:gap-4 lg:p-4">
                <AvailableItems price={20} name={"HTML & CSS"} viewNumber={"1,500"} videoNumber={150} teacherNumber={2} picture={"HTML & CSS.png"} />
                <AvailableItems price={20} name={"Photographer"} viewNumber={"1,500"} videoNumber={100} teacherNumber={2} picture={"Photographer.png"} />
                <AvailableItems price={20} name={"JavaScript"} viewNumber={"1,500"} videoNumber={150} teacherNumber={2} picture={"Javascript.png"} />
                <AvailableItems price={20} name={"Desain Grafis"} viewNumber={"1,500"} videoNumber={100} teacherNumber={2} picture={"Desain Grafis.png"} />
            </div>
            <div className="w-full order-[-1] sm:order-1 sm:w-1/3 pt-2">
                <a className="text-mainColor text-sm xl:text-base w-full" href="#">AVAILABLE FOR YOU</a>
                <h1 className="w-2/3 dark:text-white text-[#141E32] text-2xl xl:text-4xl font-bold xl:mt-4">Available Courses</h1>
                <p className="w-full xl:w-3/4 text-sm text-grayText xl:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                <button className="registerBtn mt-2 xl:mt-4">See all</button>
            </div>
        </div>
    );
}