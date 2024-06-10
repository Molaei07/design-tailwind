import { AvailableCourses } from "./gridView/availableCourses";
import { Testimonials } from "./gridView/testimonials";
import { BeginPoster } from "./poster/beginPoster";
import { ChooseCoursePoster } from "./poster/chooseCoursePoster";
import { Slider } from "./sliders/slider";

export const Content = () => {
    return (
        <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-y-8">
            <BeginPoster />
            <Slider />
            <ChooseCoursePoster />
            <AvailableCourses />
            <Testimonials />
        </div>
    );
}