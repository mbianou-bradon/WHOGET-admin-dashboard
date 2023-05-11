

export default function Loading(){

    return (
        <div className="w-full h-full absolute top-0 left-0 bg-primary z-30">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[50%] bg-white p-5 sm:p-10 rounded-md">
                    <div className="sm:text-xl text-primary text-center">
                        <p>Loading. . . .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}