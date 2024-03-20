import { createContext, useReducer } from "react";


export const BlogContext = createContext()

export const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                ...state,
                blogs: action.payload,
            }
        case 'SET_BLOG':
            return {
                
                singleBlog: action.payload
            }

        case 'SET_TOP_BLOG':
            return {
                ...state,
                topBLogs: action.payload
            }
        case 'POST_BLOG':
            return {
                ...state,
                blogs: [action.payload, ...state.blogs]
            }

    }
}

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BlogReducer, {
        blogs: [], singleBlog: [] , topBLogs:[]
    })
    console.log(state)
    return (
        <BlogContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}