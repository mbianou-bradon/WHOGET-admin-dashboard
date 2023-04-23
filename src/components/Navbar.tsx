import Image from "next/image"
import logo from "../assets/images/logo.png"
import Link from "next/link"

export default function Navbar(){

    return (
        <header className="h-screen w-[10rem] bg-[#EFEFEF] ml-[1.6rem] pt-[3.25rem] fixed">
            {/* Logo of WhoGet */}
            <div className="logo mb-[4rem] p-2">
                <Image src={logo} alt="" />
            </div>

            {/* Navigation Area */}
            <nav>
                <ul className="p-2 [&>*]:px-2 [&>*]:py-2 [&>*]:mb-2 [&>*:hover]:bg-primary/20 [&>*]:rounded-lg">
                    <li>
                        <Link href="">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Content
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Analytics
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Moderation
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Reporting
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Communication
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}