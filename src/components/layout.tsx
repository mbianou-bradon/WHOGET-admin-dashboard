import { ReactNode } from "react";
import Navbar from "./Navbar";
import Header from "./Header";


export default function Layout(props: { children: ReactNode}){

    return (
        <div className="bg-white text-slate-900 w-screen">
            <Navbar />
            <Header/>
            <div className="h-full sm:ml-[11.6rem]">
                { props.children }
            </div>
            
        </div>
    )
}