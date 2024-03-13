import { createContext, useReducer } from "react";


export const BlogContext = createContext()

export const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            }
        case 'SET_BLOG':
            return {
                blog: action.payload
            }
        case 'POST_BLOG':
            return {
                blogs: [action.payload, ...state.blogs]
            }

    }
}

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BlogReducer, {
        blogs: [], blog:[]
    })
    console.log(state)
    return (
        <BlogContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}