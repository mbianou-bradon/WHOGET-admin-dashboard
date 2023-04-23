import Image from "next/image"
import logo from "../assets/images/logo.png"
import Link from "next/link"

export default function Navbar(){

    return (
        <header className="h-screen w-[12rem] bg-secondary ml-[1.6rem] pt-[3.25rem] fixed">
            {/* Logo of WhoGet */}
            <div className="logo mb-[4rem] p-2">
                <Image src={logo} alt="" />
            </div>

            {/* Navigation Area */}
            <nav>
                <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>*:hover]:bg-primary/20 [&>*]:rounded-lg">

                    <Link href="">
                        Users
                    </Link>

                    <Link href="">
                        Content 
                    </Link>

                    <Link href="">
                        Analytics
                    </Link>

                    <Link href="">
                        Moderation
                    </Link>

                    <Link href="">
                        Reporting
                    </Link>

                    <Link href="">
                        Communication
                    </Link>

                </ul>
            </nav>
        </header>
    )
}