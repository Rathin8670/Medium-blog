import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blogCard"
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs()

    if(loading){
        return <div>
            loading...
        </div>
    }
    
    return (
        <div>
            <div>
                <Appbar></Appbar>
            </div>
            <BlogCard 
            authorName={"rathin"}
            title={"10 microservices design patterns for better architecture"} 
            content={"The monolithic architecture was historically used by developers for a long time — and for a long time, it worked. Unfortunately, these architectures use fewer parts that are larger, thus meaning they were more likely to fail in entirety if a single part failed. Often, these applications ran as a singular process, which only exacerbated the issue."}
            publishdate={"2nd July,2024"} />

            <BlogCard 
            authorName={"rathin"}
            title={"10 microservices design patterns for better architecture"} 
            content={"The monolithic architecture was historically used by developers for a long time — and for a long time, it worked. Unfortunately, these architectures use fewer parts that are larger, thus meaning they were more likely to fail in entirety if a single part failed. Often, these applications ran as a singular process, which only exacerbated the issue."}
            publishdate={"2nd July,2024"} />

            <BlogCard 
            authorName={"rathin"}
            title={"10 microservices design patterns for better architecture"} 
            content={"The monolithic architecture was historically used by developers for a long time — and for a long time, it worked. Unfortunately, these architectures use fewer parts that are larger, thus meaning they were more likely to fail in entirety if a single part failed. Often, these applications ran as a singular process, which only exacerbated the issue."}
            publishdate={"2nd July,2024"} />
        </div>
    )
}