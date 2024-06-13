/* eslint-disable react/prop-types */
export const SelectedCourseInfo = ({ number, name }) => {
    return (
        <li className="w-1/3 flex justify-center flex-wrap items-center">
            <span className="w-full h-1/2 text-center text-[#F0C932] font-[700] text-2xl sm:text-xl lg:text-2xl">{number}</span>
            <span className="w-full h-1/2 text-center text-[#DDDDDD] text-base sm:text-sm lg:text-base lg:font-bold">{name}</span>
        </li>
    );
}

export const ChooseCoursePoster = () => {
    return (
        <div className="bg-mainColor dark:bg-blue-950 w-full flex justify-center items-center px-4 lg:px-20 lg:py-8">
            <div className="flex justify-between items-center gap-x-8 md:gap-x-0 w-full  md:w-[85%]">
                <div className="hidden sm:block w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
                    <img className="w-full h-full" src="./Group 1964.png" alt="Logo" />
                </div>
                <div className="w-full sm:w-[60%] md:w-[40%] lg:w-1/2 py-4 sm:py-10 lg:py-20">
                    <a className="w-full text-base sm:text-xs md:text-base text-[#F0C932]" href="#">SELECTED COURSE</a>
                    <h1 className="w-full xl:w-1/2 font-[700] text-white text-4xl sm:text-2xl md:text-4xl mt-4">People Taking Courses</h1>
                    <p className="w-full xl:w-1/2 text-[#DDDDDD] text-sm sm:text-xs md:text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                    <ul className="w-full flex justify-center h-20 mt-4">
                        <SelectedCourseInfo number="6,000" name="People Views" />
                        <SelectedCourseInfo number="4,000" name="User" />
                        <SelectedCourseInfo number="100" name="Course" />
                    </ul>
                </div>
            </div>
        </div>
    );
}