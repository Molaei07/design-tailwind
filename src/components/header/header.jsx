// eslint-disable-next-line react/prop-types
export const ItemsMenu = ({ name }) => {
    return (
        <>
            <li className="cursor-pointer hover:font-bold w-1/5 text-center transition-all duration-100">{name}</li>
        </>
    );
}

export const Header = () => {
    return (
        <>
            <header className="w-full gap-y-4 px-[10px] sm:px-[50px] py-4 flex justify-between items-center flex-wrap shadow-lg lg:justify-evenly lg:gap-y-0">
                {/* Logo */}
                <div className="w-[40%] flex justify-start gap-x-2 items-center lg:w-[150px]">
                    <div className="w-[30px] h-[30px]">
                        <img src="./Logo.png" alt="Logo" className="w-full h-full" />
                    </div>
                    <span className="text-mainColor text-[12px]">mangcoding Store</span>
                </div>
                {/* Item in menu */}
                <ul className="w-full order-1 flex justify-between text-[12px] lg:w-[40%] lg:order-none sm:text-[15px]">
                    <ItemsMenu name="Home" />
                    <ItemsMenu name="Course" />
                    <ItemsMenu name="About Us" />
                    <ItemsMenu name="Article" />
                    <ItemsMenu name="Contact" />
                </ul>
                {/* Btn to sing */}
                <div className="w-[50%] flex justify-between gap-x-[5px] lg:w-[20%] lg:gap-x-[20px]">
                    <div className="text-mainColor border border-mainColor border-solid entryBtn">
                        Log in
                    </div>
                    <div className="registerBtn">
                        Register
                    </div>
                </div>
            </header>
        </>
    );
}