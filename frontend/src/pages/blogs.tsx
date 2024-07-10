
import {  Appbar } from "../components/appbar"
import { BlogCard } from "../components/blogCard"
import { BlogsSkeleton } from "../components/blogsSkeleton";
import { useBlogs } from "../hooks"


export const Blogs=()=>{
    const { loading, blogs } = useBlogs();

    if(loading){
        return <div>
            <BlogsSkeleton></BlogsSkeleton>
            <BlogsSkeleton></BlogsSkeleton>
            <BlogsSkeleton></BlogsSkeleton>
            <BlogsSkeleton></BlogsSkeleton>
            <BlogsSkeleton></BlogsSkeleton>
        </div>
    }
    if (!blogs || !Array.isArray(blogs)) {
        return <div>No blogs available</div>;
    }
    
    return (
        <div className="flex flex-col">
            
            <Appbar/>
            <div  className="flex justify-center">
                <div className="w-full max-w-4xl px-4">
                    {blogs.map(blog => <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishdate={"2nd Feb 2024"}
                    />)}
                </div>
            </div>
        
        </div>
    )
}