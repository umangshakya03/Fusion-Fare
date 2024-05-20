const Group2 = () => {
    return (
        <>
            <div className="relative flex justify-center text-center overflow-hidden px-10 bg-[url('/img/rectangle_2.jpg')] bg-black bg-no-repeat bg-cover">
                <div className="relative flex flex-col items-center justify-center max-w-4xl md:flex-row py-14">
                    <div className="relative max-w-72">
                        <img
                            className="absolute border-8 border-white shadow-2xl -rotate-12 -z-1 right-4"
                            src="/img/rectangle_3_copy.jpg"
                            alt=""
                        />
                        <img
                            className="relative border-8 border-white shadow-lg"
                            src="/img/rectangle_3_copy.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col w-full p-8 mt-12 text-left md:mt-0 md:w-2/4">
                        <div className="flex flex-col">
                            <p className="text-2xl font-pacifico">About us</p>
                            <p className="pb-3 text-3xl font-semibold">WE ARE TASTY</p>
                        </div>
                        <div className="flex flex-col text-sm">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's stan
                                <br />
                                <span className="text-style-2">&nbsp;</span>
                                <br />
                                dard dummy text ever since the 1500s,when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic
                                typesettingdard dummy text ever since the 1500s,when an unknown
                                printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the leap into
                                electronic typesetting
                            </p>
                            <button className="w-40 px-4 py-2 mx-2 my-3 text-center text-white bg-yellow-500 border rounded-md">
                                Click here
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute bottom-0 right-0 h-56"
                    src="/img/image-2.png"
                    alt=""
                />
            </div>


        </>
    );
}
export default Group2;