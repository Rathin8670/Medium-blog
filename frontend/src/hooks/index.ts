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
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                console.log(response.data)
                setBlogs(response.data);
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
