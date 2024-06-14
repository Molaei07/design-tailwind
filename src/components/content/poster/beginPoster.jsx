/* eslint-disable react/no-unescaped-entities */
export const BeginPoster = () => {
    return (
        <div className="flex justify-center dark:bg-[#222222] bg-[#F5F5F5] px-4 py-2 lg:px-20 lg:py-12">
            <div className="w-full md:w-4/5 flex justify-between items-center gap-x-5">
                <div className="w-full sm:w-1/2 flex flex-wrap gap-y-8 sm:gap-y-4">
                    <a className="text-mainColor w-full" href="#">Let’s <span className="font-bold">Begins</span></a>
                    <h1 className="text-4xl lg:text-5xl dark:text-white xl:text-7xl w-full font-bold">Let's Find The Right <span className="text-[#545BE8]">Course</span> For you</h1>
                    <p className="text-grayText dark:text-white w-full text-xs lg:text-sm xl:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                    <div className="w-full xl:w-2/3 flex gap-x-3 justify-between">
                        <div className="registerBtn">
                            Register
                        </div>
                        <div className="entryBtn flex gap-x-2 justify-center sm:justify-start dark:hover:bg-white/10">
                            <img className="w-6 h-6" src="./Group 3.png" alt="Logo" />
                            <span className="dark:text-white">Play Video</span>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
                    <img className="w-full h-full" src="./Group 6.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
}