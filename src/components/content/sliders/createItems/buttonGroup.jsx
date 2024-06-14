/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="hidden sm:inline-block absolute bottom-0 right-[25%]">
            <button className="mr-8 w-8 h-8" onClick={() => previous()}>
                <img src="./left.png" alt="arrow" />
            </button>
            <button className="mr-8 w-8 h-8" onClick={() => next()}>
                <img src="./right.png" alt="arrow" />
            </button>
        </div>
    );
};

export default ButtonGroup;