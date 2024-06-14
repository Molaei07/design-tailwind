/* eslint-disable react/prop-types */
export const LinksInFooter = ({partName, link1, link2, link3, link4}) => {
    return (
        <li className="w-2/4 lg:w-1/4 h-fit flex flex-wrap gap-y-1 lg:gap-y-2">
            <h1 className="w-full font-bold text-white text-center sm:text-left mb-2">{partName}</h1>
            <a href="#" className="linkInFooter">{link1}</a>
            <a href="#" className="linkInFooter">{link2}</a>
            <a href="#" className="linkInFooter">{link3}</a>
            <a href="#" className="linkInFooter">{link4}</a>
        </li>
    );
}