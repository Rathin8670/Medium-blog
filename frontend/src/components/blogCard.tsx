interface BlogProps{
    authorName:string;
    title:string,
    content:string,
    publishdate:string,

}
export const BlogCard=({authorName,title,content,publishdate}:BlogProps)=>{
    return (
        <div>
            <div className="border-t-2 border-b-2  border-y-blue-50  m-5 p-8">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avater name={authorName}></Avater>
                </div>
                <div className="flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-1 text-slate-400">~</div>
                <div className="flex justify-center flex-col text-slate-400">
                    {publishdate}
                </div>
            </div>

            <div className="text-black font-bold text-xl">
                {title}
            </div>
            <div className="text-slate-700">
                {content.slice(0,100)+"..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
            </div>
        </div>
    )
}

export function Avater({name}:{name:string}){
    return <>
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-purple-700">
        <span className="font-medium text-xs text-gray-700 dark:text-gray-300">{name[0]}</span>
        </div>
    </>
}