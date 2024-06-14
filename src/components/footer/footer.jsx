/* eslint-disable react/prop-types */
import { LinksInFooter } from "./createLinksFooter";

export const SocialMediaItems = ({ picture }) => {
    return (
        <li className="w-6 lg:w-8 h-6 lg:h-8 border-2 border-white border-solid cursor-pointer">
            <img className="w-full h-full" src={"./" + picture} alt="Logo" />
        </li>
    );
}

export const Footer = () => {
    return (
        <footer className="w-full lg:h-[400px] bg-[#393E46] flex flex-wrap gap-y-4 md:gap-y-0 md:flex-nowrap justify-center gap-x-4 lg:gap-x-8 px-4 md:px-28 lg:px-48 py-12">
            <div className="w-full md:w-2/5 h-full p-2">
                <div className="w-full h-auto flex gap-x-2 items-center">
                    <div className="w-6 lg:w-9 h-6 lg:h-9">
                        <img className="w-full h-full" src="Logo.png" alt="Logo" />
                    </div>
                    <span className="text-white font-bold text-xs lg:text-sm">mangcoding Store</span>
                </div>
                <p className="w-full text-xs lg:text-sm text-[#F4F4F4] mt-4 lg:mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus.
                </p>
                <ul className="w-full flex justify-center md:justify-start gap-x-2 p-1 mt-4 lg:mt-8">
                    <SocialMediaItems picture={"instagram.png"} />
                    <SocialMediaItems picture={"twetter.png"} />
                    <SocialMediaItems picture={"linkedin.png"} />
                    <SocialMediaItems picture={"facebook.png"} />
                </ul>
            </div>
            <ul className="w-full md:w-3/5 h-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-4 sm:gap-y-0 sm:gap-x-8">
                <LinksInFooter partName={"Home"} link1={"Product"} link2={"Course"} link3={"About Us"} link4={"Log in"} />
                <LinksInFooter partName={"Course"} link1={"HTML & CSS"} link2={"Javascript"} link3={"Photographer"} link4={"Desain Grafis"} />
                <LinksInFooter partName={"Article"} link1={"New"} link2={"Old"} link3={"Trend"} link4={"Popular"} />
                <LinksInFooter partName={"Contact Us"} link1={"CCdoc123@gmail.com"} link2={""} link3={""} link4={""} />
            </ul>
        </footer>
    );
}