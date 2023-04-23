import { AiFillEyeInvisible } from "react-icons/ai"

export default function Content(){

    return (
        <div className="ml-[13rem] px-6">
            <table className="w-full">
                <thead className="h-16">
                    <tr className="text-left">
                        <th className="w-[50%]">
                           Question
                        </th>
                        <th className="w-[15%]">
                            Category
                        </th>
                        <th className="w-[20%]">
                            Users
                        </th>
                        <th className="w-[15%]"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className="py-5">
                                <div className="text-sm mb-4 w-[85%]">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quibusdam fugiat fugit quae distinctio vitae ipsum amet?
                                    </p>
                                </div>
                                <div className="text-[0.65rem] text-[#9C9C9C] w-3/5 flex justify-between">
                                    <p>posted 2days ago</p>
                                    <p>22 hours left to expire</p>
                                </div>
                            </div>
                            
                        </td>
                        <td>
                            Finance
                        </td>

                        <td>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-primary/20">

                                </div>
                                <h2>Mbianou Bradon</h2>
                            </div>
                        </td>
                        <td>
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <div className="py-5">
                                <div className="text-sm mb-4 w-[85%]">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quibusdam fugiat fugit quae distinctio vitae ipsum amet?
                                    </p>
                                </div>
                                <div className="text-[0.65rem] text-[#9C9C9C] w-3/5 flex justify-between">
                                    <p>posted 7days ago</p>
                                    <p>6 days left to expire</p>
                                </div>
                            </div>
                            
                        </td>
                        <td>
                            Mobile Phone
                        </td>

                        <td>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-primary/20">

                                </div>
                                <h2>Kimboh Lovette</h2>
                            </div>
                        </td>
                        <td>
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <div className="py-5">
                                <div className="text-sm mb-4 w-[85%]">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quibusdam fugiat fugit quae distinctio vitae ipsum amet?
                                    </p>
                                </div>
                                <div className="text-[0.65rem] text-[#9C9C9C] w-3/5 flex justify-between">
                                    <p>posted 4days ago</p>
                                    <p>2 days left to expire</p>
                                </div>
                            </div>
                            
                        </td>
                        <td>
                            Web Development
                        </td>

                        <td>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-primary/20">

                                </div>
                                <h2>Samba Carlson</h2>
                            </div>
                        </td>
                        <td>
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <div className="py-5">
                                <div className="text-sm mb-4 w-[85%]">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ratione quae. Repellat, tempore quasi.
                                    </p>
                                </div>
                                <div className="text-[0.65rem] text-[#9C9C9C] w-3/5 flex justify-between">
                                    <p>posted 5days ago</p>
                                    <p>12 hours left to expire</p>
                                </div>
                            </div>
                            
                        </td>
                        <td>
                            Designing
                        </td>

                        <td>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-primary/20">

                                </div>
                                <h2>Mbeute Olive</h2>
                            </div>
                        </td>
                        <td>
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}