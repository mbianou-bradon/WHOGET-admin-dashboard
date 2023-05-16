import { ReactNode } from "react";
import Navbar from "./Navbar";
import Header from "./Header";


export default function Layout(props: { children: ReactNode}){

    return (
        <div className="bg-white text-slate-900 max-w-7xl">
            <Navbar />
            <Header/>
            <div className="h-full lg:h-screen sm:ml-[11.6rem]">
                { props.children }
            </div>
            
        </div>
    )
}