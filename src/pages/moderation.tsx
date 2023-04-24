import { AiFillEyeInvisible, AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineBan } from "react-icons/hi";



export default function moderation(){

    return (
        <div className="ml-[13rem] px-6">
            <div className="w-fit px-4  flex items-center gap-2 border border-primary bg-primary/20 rounded-md [&>*]:py-2 [&>*>section]:bg-transparent [&>*>section]:b">
                <div className="border-r-2 border-white">
                    <select name="category" id="category" className="bg-transparent focus:ring-0 focus:outline-none focus:border-0">
                        <option value="">Category</option>
                        <option value="Designing">Designing</option>
                        <option value="Web_Development">Web Development</option>
                        <option value="Mobile_Phone">Mobile Phone</option>
                        <option value="Finance">Finance</option>
                        <option value="Education">Education</option>
                    </select>
                </div>
                <div>
                    <select name="violation_type" id="violation_type" className="bg-transparent focus:ring-0 focus:outline-none focus:border-0">
                        <option value="">Violation Type</option>
                        <option value="Spam">Spam</option>
                        <option value="Scam">Scam</option>
                        <option value="Fake">Fake</option>
                    </select>
                </div>
            </div>

            <div className="pl-8">
                <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-[80%]"></th>

                        <th className="w-[20%]"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-b border-[#EEEEEE]">
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
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:border [&>*]:border-primary [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                <div className="text-primary mb-2">
                                    <AiOutlineThunderbolt className="text-xl"/>
                                    <h2>Strike</h2>
                                </div>
                                <div className="text-primary">
                                    <HiOutlineBan />
                                    <h2>Ban</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className="border-b border-[#EEEEEE]">
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
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:border [&>*]:border-primary [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                <div className="text-primary mb-2">
                                    <AiOutlineThunderbolt className="text-xl"/>
                                    <h2>Strike</h2>
                                </div>
                                <div className="text-primary">
                                    <HiOutlineBan />
                                    <h2>Ban</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className="border-b border-[#EEEEEE]">
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
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:border [&>*]:border-primary [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                <div className="text-primary mb-2">
                                    <AiOutlineThunderbolt className="text-xl"/>
                                    <h2>Strike</h2>
                                </div>
                                <div className="text-primary">
                                    <HiOutlineBan />
                                    <h2>Ban</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className="border-b border-[#EEEEEE]">
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
                            <div className="py-5 text-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:border [&>*]:border-primary [&>*]:cursor-pointer [&>*:active]:scale-95">
                                <div className="text-white bg-primary mb-2">
                                    <AiFillEyeInvisible className="text-xl"/>
                                    <h2>Hide Question</h2>
                                </div>
                                <div className="text-primary mb-2">
                                    <AiOutlineThunderbolt className="text-xl"/>
                                    <h2>Strike</h2>
                                </div>
                                <div className="text-primary">
                                    <HiOutlineBan />
                                    <h2>Ban</h2>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}