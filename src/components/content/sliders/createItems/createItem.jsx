/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ItemsSlider } from "./items";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const CreateItems = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };

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

    const [items, setItems] = useState([
        { id: 1, logo: "./40.png", name: "Professional Teacher", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie." },
        { id: 2, logo: "./50.png", name: "Course Certificate", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie." },
        { id: 3, logo: "./37.png", name: "interesting learning", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie." },
    ]);

    return (
        <>
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 300ms"
                transitionDuration={500}
                containerClass="carousel-container sm:pb-10"
                deviceType={'desktop'}
                itemClass="w-[100%] h-full rounded-lg bg-[#545BE8] px-4 py-4 lg:py-8 flex flex-wrap dark:bg-blue-900"
                sliderClass="gap-x-0 sm:gap-x-4 relative"
                arrows={false}
                customButtonGroup={<ButtonGroup />}
            >
                {items.map((item, index) => {
                    return (
                        <ItemsSlider
                            key={index}
                            logo={item.logo}
                            name={item.name}
                            description={item.description}
                        />
                    )
                })}
            </Carousel>
        </>
    );
}