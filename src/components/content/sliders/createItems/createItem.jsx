/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ItemsSlider from "./items";
import Carousel from 'react-multi-carousel';
import ButtonGroup from "./buttonGroup";
import responsive from "./responsiveSlider";
import { getLanguage, useTranslation } from "react-multi-lang";
import 'react-multi-carousel/lib/styles.css';

const CreateItems = () => {

    const translate = useTranslation()
    const languageType = getLanguage()

    const [items, setItems] = useState([
        { id: 1, logo: "./40.png", name: ["Professional Teacher", "معلم حرفه ای"], description: ["You are faced with very professional teachers who guide you with all their strength while learning your desired courses.", "شما در طول یادگیری دوره های مورد نظر خود با معلم های بسیار حرفه ای رو به رو هستین که با تمام قدرت شما را هدایت می کنند"] },
        { id: 2, logo: "./50.png", name: ["Course Certificate", "گواهی دوره"], description: ["Courses are updated every year, so feel free to buy", "هر ساله دوره ها آپدیت میشوند بنابراین با خیال راحت خریداری کنید"] },
        { id: 3, logo: "./37.png", name: ["interesting learning", "یادگیری جالب"], description: ["We guide you by using the right learning methods in the courses", "ما با بکار گیری شیوه های درست یادگیری در دوره ها شما را هدایت می کنیم"] },
    ]);

    return (
        <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            customTransition="transform 300ms"
            transitionDuration={500}
            containerClass="carousel-container sm:pb-10"
            deviceType={'desktop'}
            itemClass="w-[100%] h-[200px] rounded-lg bg-[#545BE8] px-4 py-4 lg:py-8 flex flex-wrap dark:bg-blue-900"
            sliderClass={`"gap-x-0 sm:gap-x-4 relative" ${languageType === 'fa' ? "dirRTL" : ""}`}
            arrows={false}
            customButtonGroup={<ButtonGroup />}
        >
            {
                languageType === 'en' ?
                    items.map((item, index) => {
                        return (
                            <ItemsSlider
                                key={index}
                                logo={item.logo}
                                name={item.name[0]}
                                description={item.description[0]}
                            />
                        )
                    }) :
                    items.map((item, index) => {
                        return (
                            <ItemsSlider
                                key={index}
                                logo={item.logo}
                                name={item.name[1]}
                                description={item.description[1]}
                            />
                        )
                    })
            }
        </Carousel>
    );
}

export default CreateItems;