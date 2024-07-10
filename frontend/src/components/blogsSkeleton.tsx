export const BlogsSkeleton=()=>{
    return (
        <>
        <AppbarSkeleton></AppbarSkeleton>
        <div role="status" className="border-t-2 border-b-2  border-y-blue-50  m-5 p-8">
            <div className="flex items-center justify-between w-full">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                    <div className="w-32 mt-3 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-12"></div>
                
            </div>
            
            <span className="sr-only">Loading...</span>
        </div>
    </>
    )
}

const AppbarSkeleton=()=>{
    return <>
        <div className="border-b-2 flex justify-between px-10 py-3 h-20">
            <div className="flex justify-center flex-col text-2xl font-bold" >
                <div className="w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-500"></div>
            </div>
            <div className="w-32 h-3 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
    </>
}