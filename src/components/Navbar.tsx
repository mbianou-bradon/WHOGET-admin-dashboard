import Image from "next/image"
import logo from "../assets/images/logo.png"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar(){

    const router = useRouter();

    return (
        <header className="h-[95vh] w-[12rem] bg-secondary pt-[3.25rem] hidden sm:block fixed">
            {/* Logo of WhoGet */}
            <div className="logo mb-[4rem] p-2">
                <Image src={logo} alt="" />
            </div>

            {/* Navigation Area */}
            <nav>
                <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>*:hover]:bg-primary/20 [&>*]:rounded-lg">

                    <Link href={"/"} className={router.pathname==="/"? "bg-primary/20": "bg-transparent"}>
                        Users
                    </Link>

                    <Link href={"/content"} className={router.pathname==="/content"? "bg-primary/20": "bg-transparent"}>
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
        </header>
    )
}