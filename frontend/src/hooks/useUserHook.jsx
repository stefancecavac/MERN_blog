import { useContext } from "react"
import { UserContext } from "../context/userContext"


export const UseUserContext = () => {
    const context = useContext(UserContext)

    if(!context){
        throw Error('useUSerContext must be only used inside usercontext provider')
    }
    return context
}