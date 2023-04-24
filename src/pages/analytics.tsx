

export default function Analytics(){

    return (
        <div className="ml-[13rem] h-screen px-5">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 [&>*]:w-[18rem] [&>*]:h-[4.7rem] [&>*]:py-2 [&>*]:rounded-3xl [&>*]:bg-primary/20 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*>h2]:text-xl [&>*>h2]:font-semibold [&>*]: [&>*]:">
                    <div>
                        <h2>No of Active Users</h2>
                        <p>765</p>
                    </div>

                    <div>
                        <h2>Total no of Asks</h2>
                        <p>5648</p>
                    </div>

                    <div>
                        <h2>Active no of Asks</h2>
                        <p>4358</p>
                    </div>

                    <div>
                        <h2>Response Time</h2>
                        <p className="text-xs">Usually responds in 1 hour</p>
                    </div>

                    <div>
                        <h2>User rating</h2>
                        <p>458</p>
                    </div>

                    <div>
                        <h2>No of Categories</h2>
                        <p>512</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Time Spent</h2>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Frequency</h2>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-5 [&>*>div]:w-full [&>*>div]:h-[4.7rem] [&>*>div]:py-2 [&>*>div]:rounded-3xl [&>*>div]:bg-primary/20 [&>*>div]:flex [&>*>div]:flex-col [&>*>div]:items-center [&>*>div]:justify-center [&>*>div]:mb-1 [&>*>div>h2]:text-lg [&>*>div>h2]:font-semibold [&>*>div>p]:text-sm [&>*>p]:text-[0.35rem] [&>*>p]:w-[85%] [&>*>p]:mx-auto">
                            <div>
                                <div>
                                    <h2>Active user rate</h2>
                                    <p>70%</p>
                                </div>
                                <p>This measures the percentage of total users who have used the app with a certain time period</p>
                            </div>

                            <div>
                                <div>
                                    <h2>Active engagement</h2>
                                    <p>80%</p>
                                </div>
                                <p>This measures how often users using the app, such as the number of times they've logged in or the frequency of their interactions with other users</p>
                            </div>

                            <div>
                                <div>
                                    <h2>User session length</h2>
                                    <p>65%</p>
                                </div>
                                <p>This measures how long users are spending on the app during each session</p>
                            </div>

                            <div>
                                <div>
                                    <h2>User retention rate</h2>
                                    <p>80%</p>
                                </div>
                                <p>This measures the percentage of users who continue to use the app oveer time, such as the percentage of users who return to the app after one week, two weeks, or one month.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}