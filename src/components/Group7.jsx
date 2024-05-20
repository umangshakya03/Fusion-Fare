const Group7 = () => {
    return (
        <>
            <div id="contact" className="relative bg-[url('/img/rectangle11.jpg')] -z-1 bg-black bg-center bg-no-repeat bg-cover">
                <div className="flex flex-col items-center justify-center p-10 space-y-12 text-center text-white -z-1 md:p-14 md:flex-row md:items-baseline ">
                    <div className="flex flex-col items-center justify-center w-1/3 space-y-6 text-center">
                        <p className="text-2xl font-pacifico">Take it easy with location</p>
                        <p className="text-sm ">
                            112-Legere ancillae vix ne.
                            <br />
                            Te elit putent propriae eum,
                            <br />
                            aliquip nominati
                            <br />
                            <br />
                            phone: 00 000 000
                            <br />
                            Email: support@templatemela.com
                        </p>
                        <div className="flex justify-center space-x-1 text-center">
                            <img className="w-5 h-5" src="/img/copy.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_2.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_3.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_5.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_6.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_7.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_8.png" alt="" />
                            <img className="w-5 h-5" src="/img/copy_4.png" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 space-y-6 text-center">
                        <p className="text-2xl font-pacifico ">Working Hours</p>
                        <p className="text-sm">
                            <strong>Monday To Friday</strong>
                            <br />
                            <br />
                            8:00am to 10:00pm(Breakfast)
                            <br />
                            11:00am to 10:00pm(Lunch/Dinner)
                            <br />
                            <br />
                            <strong>Saturday &amp; Sunday</strong>
                            <br />
                            <br />
                            10:00am to 11:00pm(Brunch)
                            <br />
                            11:00am to 12:00pm(Lunch/Dinner)
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 text-center">
                        <div className="w-60 lg:w-72">
                            <p className="text-2xl font-pacifico ">Feedback form</p>
                            <form className="flex flex-col space-y-2">
                                <div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="block w-full px-3 py-2 mt-2 text-sm text-gray-500 bg-[rgb(49,50,51)] rounded-md shadow-sm sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="block w-full px-3 py-2 text-sm bg-[rgb(49,50,51)] text-gray-500  rounded-md shadow-sm sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="block w-full px-3 py-2 text-sm bg-[rgb(49,50,51)] text-gray-500  rounded-md shadow-sm sm:text-sm"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="block w-full px-3 py-2 text-sm bg-[rgb(49,50,51)] text-gray-500  rounded-md  sm:text-sm"
                                        rows={3}
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-32 px-3 py-2 mb-3 text-sm text-center text-white bg-yellow-500 rounded-md"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute left-0 z-10 hidden h-32 lg:block md:h-64 z-1 top-1/3"
                    src="/img/side4.png"
                    alt=""
                />
                <img
                    className="absolute right-0 z-10 hidden h-32 lg:block md:h-52 z-1 top-1/3"
                    src="/img/side5.png"
                    alt=""
                />
            </div>
        </>
    );
}
export default Group7;