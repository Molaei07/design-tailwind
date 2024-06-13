export const Header = () => {
    return (
        <header className="w-full dark:bg-black gap-y-4 px-2.5 sm:px-[50px] py-4 flex justify-between items-center flex-wrap shadow-lg lg:justify-evenly lg:gap-y-0">
            {/* Logo */}
            <div className="w-2/5 flex justify-start gap-x-2 items-center lg:w-[150px]">
                <div className="w-[30px] h-[30px]">
                    <img src="./Logo.png" alt="Logo" className="w-full h-full" />
                </div>
                <span className="text-mainColor dark:text-white text-xs">mangcoding Store</span>
            </div>
            {/* Item in menu */}
            <ul className="w-full order-1 flex justify-between text-xs lg:w-2/5 lg:order-none sm:text-sm">
                <li className="itemMenu">Home</li>
                <li className="itemMenu">Course</li>
                <li className="itemMenu">About Us</li>
                <li className="itemMenu">Article</li>
                <li className="itemMenu">Contact</li>
            </ul>
            {/* Btn to sing */}
            <div className="w-1/2 flex justify-between gap-x-1 lg:w-[20%] lg:gap-x-5">
                <div className="text-mainColor dark:text-white  border-2 border-mainColor border-solid entryBtn dark:hover:bg-blue-900/50">
                    Log in
                </div>
                <div className="registerBtn">
                    Register
                </div>
            </div>
        </header>
    );
}