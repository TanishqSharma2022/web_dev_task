import Messages from "./Messages"
import Sidebar from "./Sidebar"

export default function Dashboard(){
    return(
        <>
            <div className="w-full grid grid-cols-9 ">
                <div className="col-span-2">
                <Sidebar />
                </div>
                <div className="border col-span-7">
                    <Messages />
                </div>
            </div>
        </>
    )
}