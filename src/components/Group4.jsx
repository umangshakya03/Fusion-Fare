const Group4 = () => {
    return (
        <>
            <div className="relative flex flex-col p-10">
                <img
                    className="absolute left-0 z-10 h-56 -top-28"
                    src="/img/side1.png"
                    alt=""
                />
                <div className="">
                    <p className="text-3xl text-center font-pacifico">Delightful</p>
                    <p className="text-4xl font-semibold text-center uppercase">Experience</p>
                </div>
                <div className="flex flex-col items-center justify-center p-10 space-y-11">
                    <div className="flex flex-wrap items-center justify-center">
                        <img className="h-60 w-60" src="/img/1-1.jpg" alt="" />
                        <img className="w-60 h-60" src="/img/1-2.png" alt="" />
                        <img className="w-60 h-60" src="/img/1-3.png" alt="" />
                        <img className="w-60 h-60" src="/img/1-4.jpg" alt="" />
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                        <img className="w-60 h-60" src="/img/2-1.jpg" alt="" />
                        <img className="w-60 h-60" src="/img/2-2.png" alt="" />
                        <img className="w-60 h-60" src="/img/2-3.png" alt="" />
                        <img className="w-60 h-60" src="/img/2-4.jpg" alt="" />
                    </div>
                </div>
                <img
                    className="absolute right-0 z-10 h-56 -bottom-28"
                    src="/img/side2.png"
                    alt=""
                />
            </div>
        </>
    );
}
export default Group4;
