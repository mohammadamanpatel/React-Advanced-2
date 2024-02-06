import { createContext, useState } from "react";

// Step1
export const AppContext = createContext();

export const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [page, Setpage] = useState(1)
    const [posts, setPosts] = useState([])
    const [totalPage, setTotalPages] = useState(null)
    async function fetchBlogPosts(page = 1) {
        setLoading(true)
        try {
            const url = `${baseUrl}?page=${page}`
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
            Setpage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    }
    function changePage(page) {
        Setpage(page)
        fetchBlogPosts(page)
    }
    const value = {
        loading,
        setLoading,
        page,
        Setpage,
        posts,
        setPosts,
        totalPage,
        setTotalPages,
        fetchBlogPosts,
        changePage
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;