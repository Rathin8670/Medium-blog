import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_url } from "../config";

export const useBlogs=()=>{
    const [loading,setLoading]=useState(false);
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        axios.get(`${Backend_url}/api/v1/blog/bulk`)
            .then(response=>{
                setBlogs(response.data);
                setLoading(false)
            })  
    },[])
    return {
        loading,
        blogs
    }
}