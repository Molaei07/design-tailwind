/* eslint-disable react/no-unescaped-entities */
export const BeginPoster = () => {
    return (
        <div className="flex justify-center bg-[#F5F5F5] px-4 py-2 lg:px-20 lg:py-12">
            <div className="w-full md:w-[80%] flex justify-between items-center gap-x-[20px]">
                <div className="w-full sm:w-[50%] flex flex-wrap gap-y-2 xl:gap-y-3">
                    <a className="text-mainColor w-full" href="#">Let’s <span className="font-bold">Begins</span></a>
                    <h1 className="text-4xl lg:text-5xl xl:text-[70px] w-full font-[700]">Let's Find The Right <span className="text-[#545BE8]">Course</span> For you</h1>
                    <p className="text-grayText w-full text-xs lg:text-sm xl:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                    <div className="w-full xl:w-2/3 flex justify-between">
                        <div className="registerBtn">
                            Register
                        </div>
                        <div className="entryBtn flex gap-x-2 justify-center sm:justify-start">
                            <img className="w-[24px] h-[24px]" src="./Group 3.png" alt="" />
                            <span>Play Video</span>
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