const Header = () => {
    return (
        <>
            <header>
                <div className="relative w-full">
                    <img
                        className="absolute top-0 z-10 hidden h-40 left-11 xl:block"
                        src="/img/rectangle_10.png"
                        alt=""
                    />
                    <img
                        className="absolute z-20 hidden h-16 top-3 left-36 xl:block"
                        src="/img/layer_95.png"
                        alt=""
                    />
                    <div className="flex items-center justify-between h-8 px-16 text-sm bg-white z-2">
                        <div className="left-0 right-0 justify-center hidden mx-auto pl-44 md:flex">
                            <div className="flex items-center space-x-2">
                                <img className="h-3.5 w-3.5" src="/img/image_2.png" alt="" />
                                <p>Order Foods 24/7</p>
                            </div>
                            <div className="flex items-center ml-8 space-x-2">
                                <img className="h-3.5 w-3.5" src="/img/image.png" alt="" />
                                <p>061 9876 5432</p>
                            </div>
                        </div>
                        <div className="flex items-center ml-auto space-x-2">
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_6.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_10.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_9.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_8.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_7.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_5.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_4.png" alt="" />
                            <img className="share-bts h-3.5 w-3.5" src="/img/image_3.png" alt="" />
                        </div>
                    </div>
                    <div className="relative bg-black z-2 bg-opacity-70">
                        <nav className="flex items-center justify-between text-sm md:justify-center">
                            <ul className="flex items-center md:justify-center space-x-7">
                                <span className="items-center justify-center hidden md:flex space-x-7">
                                    <li className="ml-4">
                                        <a href="#home" className="text-white">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#menu" className="text-white">
                                            Menu
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about-us" className="text-white">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#special-recipes" className="text-white">
                                            Recipes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="text-white">
                                            Contact
                                        </a>
                                    </li>
                                </span>
                                <li>
                                    <button className="px-5 py-2 mx-2 my-3 text-yellow-500 border border-white rounded-md">
                                        Table Booking
                                    </button>
                                </li>
                            </ul>
                            <div className="md:hidden pr-7">
                                <div onClick="openMobileNavigation()" className="hamburger">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32px"
                                        height="32px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M4 18L20 18"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M4 12L20 12"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M4 6L20 6"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                id="mob-nav"
                                className="fixed inset-0 hidden bg-black bg-opacity-90 z-3"
                            >
                                <div
                                    onClick="closeMobileNavigation()"
                                    className="absolute z-10 p-5 text-white right-2 top-6"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-icon"
                                        style={{
                                            width: "2rem",
                                            height: "2rem",
                                            verticalAlign: "middle",
                                            fill: "currentColor",
                                            overflow: "hidden"
                                        }}
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                    >
                                        <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
                                    </svg>
                                </div>
                                <nav className="absolute flex flex-col items-center justify-center w-full h-full text-white">
                                    <ul className="flex flex-col items-center justify-center space-y-5 text-3xl font-bold">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Product</a>
                                        </li>
                                        <li>
                                            <a href="#">Promo</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
