import { ReactNode } from "react";
import Navbar from "./Navbar";
import Header from "./Header";


export default function Layout(props: { children: ReactNode}){

    return (
        <div className=" bg-white text-slate-900">
            <Navbar />
            <Header/>
            { props.children }
        </div>
    )
}