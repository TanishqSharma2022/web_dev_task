import useGetMessages from "../hooks/getMessage"

export default function Messages(){

    const {loading, messages} = useGetMessages()

    return(
        <>
        {JSON.stringify(messages)}
        </>
    )
}