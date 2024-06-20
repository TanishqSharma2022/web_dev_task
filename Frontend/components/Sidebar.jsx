import { useEffect, useState } from "react"
import { useAuthContext } from "../context/useAuthContext"
import { useNavigate } from "react-router-dom"
import getConversations from "../hooks/getConversations"
import setConversation from "../store/setConversations";

export default function Sidebar(){

    const {loading, conversations} = getConversations();

    // const { selectedConversation, setSelectedConversation } = setConversation()

    const {authUser} = useAuthContext()
    const navigate = useNavigate()
    if(!authUser){
        window.location.href = "/"
        navigate('/')
    }


    return(authUser && 
        <>
            <div className="w-full min-h-screen border flex items-center flex-col">

                {conversations.map((item) => {
                    return(
                        <div 
                        key={item._id}
                        // onClick={setSelectedConversation(item)}
                        className="w-full flex items-center gap-4  p-4 border hover:bg-gray-200 cursor-pointer">
                             <img src={item.pics} />
                            {item.name}
                             </div>
                    )
                })}
            </div>
        </>
    )
}