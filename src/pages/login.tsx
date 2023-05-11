import Image from "next/image"
import logo from "../assets/images/logo.png"
import { MdEmail, MdLock } from "react-icons/md"
import { IoIosEyeOff, IoIosEye } from "react-icons/io"
import React from "react"

export default function Login() {
    const [userEmail, setUserEmail] = React.useState<string>("");
    const [userPassword, setUserPassword] = React.useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false)
    let type = "password";

    if(isPasswordVisible){
        type="text"
    }

    const handleViewPassword = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return(
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-primary to-purple-800">
            <div className="flex items-center justify-center h-full w-full">
                <div className="border-primary flex flex-col">
                    <div className="mb-10 flex justify-center">
                        <Image src={logo} alt={"WhoGet Logo"} />
                    </div>
                    <form action="">
                        <div className="py-2 flex flex-col gap-10">
                            <div className="flex items-center gap-4 py-2 bg-slate-400 px-4 h-14 rounded-md">
                                <div>
                                    <MdEmail className="text-xl"/>
                                </div>
                                <input type="text" placeholder="Email" className="h-full pl-2 focus:outline-none focus:ring-0 rounded" required/>
                            </div>

                            <div className="flex items-center gap-4 py-2 bg-slate-400 px-4 h-14 rounded-md">
                                <div>
                                    <MdLock className="text-xl"/>
                                </div>
                                <input type={type} placeholder="Password" className="h-full pl-2 focus:outline-none focus:ring-0 rounded" required/>
                                <div className="text-xl cursor-pointer" onClick={handleViewPassword}>
                                    {isPasswordVisible? <IoIosEye/> : <IoIosEyeOff/>}
                                </div>
                            </div>
                            
                            <button type="submit" className="border-primary text-white bg-primary py-2 rounded-md hover:bg-primary/90 select-none">LOGIN</button>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        </div>
    )
}