import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RxPerson } from "react-icons/rx"
import { BsSearch } from "react-icons/bs"

export default function Header(){

    return (
        <div className="bg-white ml-[11.6rem] h-full py-6 pr-6">
            <div className="flex justify-between items-center mb-[1.5rem]">
                <div className="w-3/4 mx-auto">
                    <div className="flex justify-around [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*>h2]:text-4xl [&>*>h2]:font-semibold [&>*>p]:text-sm">
                        <div>
                            <h2>872</h2>
                            <p>users</p>
                        </div>
                        <div>
                            <h2>12</h2>
                            <p>Categories</p>
                        </div>
                    </div>
                </div>
                <div>

         
                    <div className="flex justify-between items-center gap-10">
                        <div className="text-xl">
                            <h2>English</h2>
                        </div>
                        <div className="flex gap-10 [&>*]:cursor-pointer">
                            <div className="text-xl">
                                <AiOutlineSearch/>
                            </div>
                            <div className="text-xl">
                                <IoMdNotificationsOutline />
                            </div>
                            <div className="flex gap-2">
                                <div className="text-xl">
                                    <RxPerson />
                                </div>
                                <div>
                                    <div className="flex">
                                        <p>Admin</p>
                                        <div className="place-self-center">
                                            <AiOutlineDown className="text-xs"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-10">
                <div className="w-full h-14 px-4 py-1 rounded-md bg-secondary text-[#BBBBBB] flex items-center gap-2">
                    <div className="text-xl">
                        <BsSearch />
                    </div>
                    <input type="text" name="search" id="search" className="w-full bg-transparent focus:border-0 focus:ring-0 focus:outline-none" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}
