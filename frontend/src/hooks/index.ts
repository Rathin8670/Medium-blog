import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_url } from "../config";

interface Blog{
    "id": number,
    "content": string,
    "title": string,
    "author": {
        "name":string
    }
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
                        // Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUyMmJhMTA4LTdkZjctNDUwYS04OTAwLTQwNTlmZjhmZWEzYSJ9.4gaQW4ikwTE--iJ4xN61t-NoT9IU_R37nsxfOInjT30`
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
