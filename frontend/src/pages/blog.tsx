
import { useParams } from "react-router-dom";
import { Appbar } from "../components/appbar"
import { Fullblog } from "../components/fullBlog";
import { useBlog } from "../hooks"
import { BlogsSkeleton } from "../components/blogsSkeleton";


export const Blog=()=>{
    const {id}=useParams()
    const {blog,loading}=useBlog({
        id:id||""
    });
    if(loading || !blog){
        return <div>
            <BlogsSkeleton></BlogsSkeleton>
        </div>
    }
    return (
        <div>
            <Appbar></Appbar>
    
            <Fullblog blog={blog } ></Fullblog>
        </div>
    )
}