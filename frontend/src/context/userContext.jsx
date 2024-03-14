import { createContext, useReducer } from "react";


export const UserContext = createContext()

export const UserReducer = (action, state) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        user: null
    })
    console.log(state)

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}