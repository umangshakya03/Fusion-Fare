const Card = ({ image, title }) => {
    return (
        <div className="flex items-center justify-center">
            <img
                className="relative w-3/5 max-w-[34rem] hidden md:flex -z-3 -mr-4"
                src={image}
                alt=""
            />
            <div className="relative z-10 flex flex-col p-8 bg-white md:w-2/5">
                <div className="flex flex-col">
                    <p className="pb-5 text-2xl text-justify font-pacifico">{title}</p>
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
        </div>
    )
}

export default Card