import { AiOutlineSearch, AiOutlineDown, AiOutlineMenu } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RxPerson } from "react-icons/rx"
import { BsSearch } from "react-icons/bs"
import React from "react"
import client from "@/axios/axios"
import { AskType, UserType } from "@/dataTypes"
import logo from "../assets/images/logo.png";
import Image from "next/image"
import Link from "next/link"
import { useRouter} from "next/router"

export default function Header(){
    const router = useRouter();
    const [users, setUsers] = React.useState<UserType[]>([])
    const [askCategories, setAskCategories] = React.useState<AskType[]>([])
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    React.useEffect(() =>{
        const users = client.get("/users")
        const asks = client.get("/asks")

        users
        .then((response) => {
            const data = response.data.users
            // console.log(data);
            setUsers(data)
        })
        .catch(err => console.error(err))

        asks
        .then((response) => {
            const data = response.data.category
            setAskCategories(data)
        })
        .catch(err => console.error(err))
        
    },[])

    const numOfUsers = users.length || 0
    const numOfCategories = askCategories.length || 0


    const handleMobileMenu = () => {
        setIsMenuOpen((prevState)=> !prevState);
    }

    return (
        <div className="bg-white sm:ml-[11.6rem] h-fit py-6 sm:pr-6">
            <div className="sm:hidden mb-5">
                <div className="flex items-center justify-between px-4">
                    <div className="">
                        <Image src={logo} alt="Logo" className="w-[5rem]"/>
                    </div>
                    <div className="text-2xl" onClick={handleMobileMenu}>
                        <AiOutlineMenu />
                    </div>
                </div>
                { isMenuOpen && 
                <div className="shadow-inner" >
                    <nav>
                        <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>*:hover]:bg-primary/20 [&>*]:rounded-lg">

                            <Link href={"/"} className={router.pathname==="/"? "bg-primary/20": "bg-transparent"} onClick={handleMobileMenu}>
                                Users
                            </Link>

                            <Link href={"/content"} className={router.pathname==="/content"? "bg-primary/20": "bg-transparent"} onClick={handleMobileMenu}>
                                Content 
                            </Link>

                            {/* <Link href={"/analytics"} className={router.pathname==="/analytics"? "bg-primary/20": "bg-transparent"}>
                                Analytics
                            </Link>

                            <Link href={"/moderation"} className={router.pathname==="/moderation"? "bg-primary/20": "bg-transparent"}>
                                Moderation
                            </Link>

                            <Link href={"/reporting"} className={router.pathname==="/reporting"? "bg-primary/20": "bg-transparent"}>
                                Reporting
                            </Link>

                            <Link href={"/communication"} className={router.pathname==="/communication"? "bg-primary/20": "bg-transparent"}>
                                Communication
                            </Link> */}

                        </ul>
                    </nav>
                </div>
            }
            </div>

            <div className="flex justify-between items-center mb-[1.5rem] flex-wrap-reverse md:flex-nowrap">
                <div className="w-3/4 mx-auto">
                    <div className="flex justify-around [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*>h2]:text-4xl [&>*>h2]:font-semibold [&>*>p]:text-sm">
                        <div>
                            <h2>{numOfUsers}</h2>
                            <p>users</p>
                        </div>
                        <div>
                            <h2>{numOfCategories}</h2>
                            <p>Categories</p>
                        </div>
                    </div>
                </div>
                <div>

         
                    <div className="flex justify-between items-center gap-10 flex-wrap md:flex-nowrap">
                        <div className="text-xl hidden md:block">
                            <h2>English</h2>
                        </div>
                        <div className="flex gap-10 [&>*]:cursor-pointer flex-wrap md:flex-nowrap">
                            <div className="text-xl hidden md:block">
                                <AiOutlineSearch/>
                            </div>
                            <div className="text-xl hidden md:block">
                                <IoMdNotificationsOutline />
                            </div>
                            <div className="md:flex gap-2 hidden">
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
            <div className="mx-4 sm:ml-10 hidden md:block">
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
