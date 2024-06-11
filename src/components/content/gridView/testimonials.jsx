/* eslint-disable react/prop-types */
export const TestimonialItems = ({name, picture, type}) => {
    return (
        <div className="w-full sm:w-[48%] h-auto flex flex-wrap gap-y-4 shadow-xl px-6 py-8 relative transition-all duration-200 hover:scale-105">
            <div className="w-full h-fit flex gap-x-2">
                <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
                    <img className="w-full h-full" src={"./" + picture} alt="Logo" />
                </div>
                <div className="flex flex-wrap gap-y-2 h-full">
                    <span className="text-xl font-[700] w-full">{name}</span>
                    <span className="text-sm text-[#969696] w-full">{type}</span>
                </div>
            </div>
            <span className="w-1/3 sm:w-1/2 lg:w-1/3">
                <img className="w-full h-full" src="./star.png" alt="Star" />
            </span>
            <p className="text-[#646464] md:text-base w-full">“  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “ </p>
            <div className="triangle absolute top-0 right-0"></div>
        </div>
    );
}

export const Testimonials = () => {
    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center px-4 md:px-28 lg:px-44 py-12">
            <h1 className="w-full font-[700] text-4xl text-center">Testimonials</h1>
            <div className="w-full flex flex-wrap justify-center gap-4">
                <TestimonialItems name={"Sara"} picture={"woman1.png"} type={"Client"} />
                <TestimonialItems name={"Finkidia"} picture={"woman2.png"} type={"Client"} />
            </div>
        </div>
    );
}