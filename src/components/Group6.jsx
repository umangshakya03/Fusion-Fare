const Group6 = () => {
    return (
        <>
            <div id="mobile-app" className="justify-center bg-no-repeat bg-cover flex bg-black  bg-[url('/img/rectangle9.png')] bg-center">
                <div className="flex flex-col justify-center p-20 text-white space-x-9 z-2 md:flex-row ">
                    <img className="h-[502px] w-[277px]" src="/img/phone.png" alt="" />
                    <div className="flex flex-col justify-center space-y-6 sm:text-start">
                        <p className="text-3xl font-pacifico ">Happy to announce</p>
                        <div className="flex flex-col space-y-2 ">
                            <p className="text-5xl font-bold uppercase ">Mobile App</p>
                            <p className="font-semibold uppercase ">
                                is Available in every OS platform.
                            </p>
                        </div>
                        <div className="flex flex-col items-baseline space-y-3 md:flex-row md:space-x-3">
                            <img className="h-[67px] w-[194px]" src="/img/layer_93.png" alt="" />
                            <img className="h-[67px] w-[194px] " src="/img/layer_94.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Group6;