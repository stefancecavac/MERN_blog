import { createContext, useEffect, useReducer } from "react";


export const UserContext = createContext()

export const UserReducer = (state,action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload,
                loading:false
            }
        case 'LOGOUT':
            return {
                user: null,
                loading:false
            }
        default:
            return state
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        user: null,
        loading:true
    })
    useEffect(() => {
            const user =JSON.parse(localStorage.getItem('user')) 
            if(user){
                dispatch({type:'LOGIN' , payload:user})
            }else{
                dispatch({type:'LOGOUT'})
            }
    },[dispatch])
    console.log(state)

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}