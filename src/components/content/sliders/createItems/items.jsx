/* eslint-disable react/prop-types */
const ItemsSlider = ({logo, name, description}) => {
    return (
        <>
            <div>
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex justify-center items-center">
                    <img className="w-1/2 h-1/2" src={logo} alt="Logo" />
                </div>
                <h3 className="w-full text-white font-bold text-sm lg:text-base">{name}</h3>
                <p className="w-full text-[#DDDDDD] text-xs lg:text-sm">{description}</p>
            </div>
        </>
    );
}

export default ItemsSlider;