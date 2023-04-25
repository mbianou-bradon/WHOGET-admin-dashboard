import { BsSearch } from "react-icons/bs";


export default function NotificationEmail(){

    return (
        <div className="ml-[13rem] px-6 text-[#EFEFEF]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                <div className="pt-[1.75rem] bg-primary">
                    <div className="w-[90%] mx-auto h-12 px-4 py-1 mb-5 rounded-md border flex items-center gap-2">
                        <div className="text-xl">
                            <BsSearch />
                        </div>
                        <input type="text" name="search" id="search" className="w-full bg-transparent focus:border-0 focus:ring-0 focus:outline-none placeholder:text-white" placeholder="Search"/>
                    </div>

                    <div className="[&>*:hover]:bg-[#C5E9F6] [&>*]:px-4 [&>*>div]:py-4 [&>*>div]:border-b [&>*>div]:border-white/50">
                        <div>
                           <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-[#EFEFEF]">

                                </div>
                                <h2>Mbianou Bradon</h2>
                            </div> 
                        </div>
                        

                        <div>
                           <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-[#EFEFEF]">

                                </div>
                                <h2>Kimboh Lovette</h2>
                            </div> 
                        </div>
                        

                        <div>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-[#EFEFEF]">

                                </div>
                                <h2>Ebai Vanisia</h2>
                            </div>
                        </div>
                        

                        <div>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-[#EFEFEF]">

                                </div>
                                <h2>F. Bernard</h2>
                            </div>
                        </div>
                        

                        <div>
                            <div className="flex items-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-[#EFEFEF]">

                                </div>
                                <h2>Tongsi Olive</h2>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Messaging Area */}

                <div className="col-span-2">
                    <div>
                        <div>
                            <h2>From</h2>
                            <input type="text" name="receiver" id="receiver" />
                        </div>
                        <div>
                            <input type="text" name="message_subject" id="message_subject" placeholder="NEW SERVICE AVAILABLE"/>
                        </div>
                        <div>
                            <p>Hey @</p>
                            <textarea name="" id="" cols={30} rows={10}></textarea>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <h2>Send Notification</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Details */}

                <div className="shadow-[0rem_0rem_1.2rem_0.01rem_rgba(0,0,0,0.4)]">
                    <div className="px-5 bg-primary py-4">
                        <h2 className="w-[80%] mx-auto">User Details</h2>
                    </div>
                    <div className="px-5 text-primary py-5">
                        <div className="w-[80%] mx-auto">
                            <div>
                                <h2 className="text-3xl mb-2">F. Bernard</h2>
                                <p className="mb-2 text-sm">Male</p>
                                <p className="text-[#A6DEF3] text-sm">Last seen 30mins ago</p>
                            </div>
                            <div className="text-sm my-10">
                                <p>674 543 234</p>
                                <p>Buea - Cameroon</p>
                                <p>Local time: 8:30PM</p>
                            </div>
                            <div className="text-sm">
                                <p><span className="font-semibold">Interests:</span> Mobile phones, Teachnology, Finance</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}