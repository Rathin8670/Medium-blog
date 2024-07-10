import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_url } from "../config";

export interface Blog{
    "id": number,
    "content": string,
    "title": string,
    "author": {
        "name":string
    }
}
export const useBlog=({id}:{id:string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${Backend_url}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`
        
                    }
                });
               // console.log("After satically rendering to check jwt value:")
                //console.log(JSON.stringify(localStorage.getItem("token")))
                console.log(response.data.blog)
                setBlog(response.data.blog);
            } catch (e) {
                console.log("Error fetching blog:", e);
                alert("An error occurred while fetching blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [id]);

    return {
        loading,
        blog
    };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${Backend_url}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`
        
                    }
                });
               // console.log("After satically rendering to check jwt value:")
                //console.log(JSON.stringify(localStorage.getItem("token")))
                console.log(response.data.blogs)
                setBlogs(response.data.blogs);
            } catch (e) {
                console.log("Error fetching blogs:", e);
                alert("An error occurred while fetching blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return {
        loading,
        blogs
    };
};
