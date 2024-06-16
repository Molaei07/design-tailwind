import { useTranslation } from "react-multi-lang";
import TestimonialItems from "./createTestimonialItems";

const Testimonials = () => {
    const translate = useTranslation()

    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center px-4 md:px-28 lg:px-44 py-12">
            <h1 className="w-full dark:text-white font-bold text-4xl text-center">{translate('testimonials.titer')}</h1>
            <div className="w-full flex flex-wrap justify-center gap-4">
                <TestimonialItems name={translate('testimonials.comment1.name')} picture={"woman1.png"} type={translate('testimonials.comment1.type')} paragraph={translate('testimonials.comment1.paragraph')} />
                <TestimonialItems name={translate('testimonials.comment2.name')} picture={"woman2.png"} type={translate('testimonials.comment2.type')} paragraph={translate('testimonials.comment2.paragraph')} />
            </div>
        </div>
    );
}

export default Testimonials;