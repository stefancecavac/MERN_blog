import { useContext } from "react"
import { BlogContext } from "../context/blogContext"


export const UseBlogContext = () => {
    const context = useContext(BlogContext)

    if(!context){
        throw Error('useBlogContext bust be used inside blogContextProvider')
    }

    return context
}