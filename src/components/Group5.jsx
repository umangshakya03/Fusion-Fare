import Card from "./Card";

const Group5 = () => {
    return (
        <>
            <div id="menu" className="bg-cover h-full relative justify-center text-center pt-14 flex flex-col bg-[url('/img/g-5-bg.png')] bg-black bg-no-repeat  bg-center ">
                <div>
                    <p className="text-3xl text-white font-pacifico">amazing</p>
                    <p className="text-4xl font-bold text-white uppercase pb-9">Delicious</p>
                </div>
                <div className="flex flex-col pb-16 space-y-14">
                    <Card title="Drinks" image="/img/5-1.jpg" />
                    <div className="flex items-center justify-center">
                        <div className="relative z-10 flex flex-col p-6 bg-white md:w-2/5">
                            <div className="flex flex-col">
                                <p className="pb-5 text-2xl text-justify font-pacifico">Main course</p>
                            </div>
                            {/* <p class="text-sm"> */}
                            <div className="flex text-sm">
                                <img className="w-10 h-10" src="/img/layer_73_copy_9.png" alt="" />
                                <p className="text-19">
                                    <span>Tuna Roast Source</span>
                                    ........................................................
                                    <strong className="text-style">$24.5</strong>
                                </p>
                            </div>
                            <div className="flex text-sm">
                                <img className="w-10 h-10" src="/img/layer_73_copy_9.png" alt="" />
                                <p className="text-19">
                                    <span>Tuna Roast Source</span>
                                    ........................................................
                                    <strong className="text-style">$24.5</strong>
                                </p>
                            </div>
                            <div className="flex text-sm">
                                <img className="w-10 h-10" src="/img/layer_73_copy_9.png" alt="" />
                                <p className="text-19">
                                    <span>Tuna Roast Source</span>
                                    ........................................................
                                    <strong className="text-style">$24.5</strong>
                                </p>
                            </div>
                            <div className="flex text-sm">
                                <img className="w-10 h-10" src="/img/layer_73_copy_9.png" alt="" />
                                <p className="text-19">
                                    <span>Tuna Roast Source</span>
                                    ........................................................
                                    <strong className="text-style">$24.5</strong>
                                </p>
                            </div>
                            <div className="flex text-sm">
                                <img className="w-10 h-10" src="/img/layer_73_copy_9.png" alt="" />
                                <p className="text-19">
                                    <span>Tuna Roast Source</span>
                                    ........................................................
                                    <strong className="text-style">$24.5</strong>
                                </p>
                            </div>
                        </div>
                        <img
                            className="relative w-3/5 max-w-[34rem] hidden md:flex -z-3 -ml-4"
                            src="/img/5-2.jpg"
                            alt=""
                        />
                    </div>
                    <Card title="Desserts" image="/img/5-3.jpg" />
                </div>
                <img className="absolute bottom-0 left-0 h-64" src="/img/side3.png" alt="" />
            </div>

        </>
    );
}
export default Group5;