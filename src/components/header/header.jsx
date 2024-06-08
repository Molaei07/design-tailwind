// eslint-disable-next-line react/prop-types
export const ItemsMenu = ({ name }) => {
    return (
        <>
            <li className="cursor-pointer">{name}</li>
        </>
    );
}

export const Header = () => {
    return (
        <>
            <header className="w-full gap-y-4 px-[10px] sm:px-[50px] py-4 flex justify-between items-center flex-wrap shadow-lg lg:justify-evenly lg:gap-y-0">
                {/* Logo */}
                <div className="w-[30%] flex justify-start gap-x-2 items-center lg:w-[150px]">
                    <div className="w-[30px] h-[30px] bg-blue-500"></div>
                    <span className="text-blue-500 text-[12px]">mangcoding Store</span>
                </div>
                {/* Item in menu */}
                <ul className="w-full order-1 flex justify-between lg:w-[30%] lg:order-none">
                    <ItemsMenu name="Home" />
                    <ItemsMenu name="Course" />
                    <ItemsMenu name="About Us" />
                    <ItemsMenu name="Article" />
                    <ItemsMenu name="Contact" />
                </ul>
                {/* Btn to sing */}
                <div className="w-[60%] flex justify-between gap-x-[20px] lg:w-[20%]">
                    <div className="w-[50%] p-2 rounded-lg text-center text-blue-500 border border-blue-500 border-solid">
                        Log in
                    </div>
                    <div className="w-[50%] p-2 rounded-lg text-center text-white bg-blue-500">
                        Register
                    </div>
                </div>
            </header>
        </>
    );
}