const Group3 = () => {
    return (
        <>
            <div id="special-recipes" className="relative bg-[url('/img/Layer78.png')] h-screen bg-black overflow-hidden bg-no-repeat bg-cover bg-center">
                <div className="flex justify-center px-10 py-32">
                    <div className="flex items-center justify-center">
                        <div className="relative z-10 flex flex-col p-6 bg-white md:w-2/5">
                            <div className="flex flex-col">
                                <p className="text-2xl font-pacifico">Recipes</p>
                                <p className="pb-3 text-3xl font-semibold uppercase">Taste of Precious</p>
                            </div>
                            <p className="text-sm">
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
                            <button className="w-40 px-4 py-2 my-3 text-center text-white bg-yellow-500 border rounded-md">
                                Click here
                            </button>
                        </div>
                        <img
                            className="relative w-3/5 max-w-[34rem] hidden md:flex -z-3 -ml-4"
                            src="/img/rectangle_5_copy.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Group3;