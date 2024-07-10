import { Link } from "react-router-dom"
import { Avater } from "./blogCard"

export const Appbar=()=>{
    return (
        <div className="border-b-2 sticky top-0 flex justify-between px-10 py-3 h-25">
            <Link to={'/blogs'}>
                <div className="flex justify-center flex-col text-2xl font-bold" >
                Medium
                </div>
            </Link>
            <Link to={'/publish'}>
                    {/* <button type="button" className="text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 mx-2">Publish</button> */}
                    <Newpost/>
                </Link>
            <div>
                <Avater name={"rathin"}></Avater>
            </div>
        </div>
        
    )
}



// export const AppBar=()=>{
//     return <>
//         <div className="border-b-2 sticky top-0 flex justify-between px-10 py-3 h-20">
//             <div className="w-full flex justify-between">
//                 <Avater name={"Rathin"}></Avater>
//                 <div className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2" role="group">

//                     <Link to={'/blogs'}>
//                         <Home/>
//                     </Link>
//                     <Link to={'/publish'}>
//                         <Newpost/>
//                     </Link>
//                     <Search/>
//                 </div>
//             </div>
            
//         </div>
//     </>
// }

// const Home=()=>{
//     return <>
//         <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
//                 <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
//                     <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
//                     </svg>
//                     <span className="sr-only">Home</span>
//                 </button>
//                 <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
//                     Home
//                     <div className="tooltip-arrow" data-popper-arrow></div>
//                 </div>
//         </div>
//     </>
// }

const Newpost=()=>{
    return <>
        <button data-tooltip-target="tooltip-post" type="button" className="inline-flex flex-col items-center justify-center p-1">
                    <svg className="w-10 h-10 pb-2 text-blue-600 dark:text-blue-700 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span className="not-sr-only text-gray-600 font-semibold">Add Post</span>
                    
                </button>
                <div id="tooltip-post" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    New post
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
    </>
}

// const Search=()=>{
//     return <>
//         <button data-tooltip-target="tooltip-search" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
//                     <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                     </svg>
//                     <span className="sr-only">Search</span>
//                 </button>
//                 <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
//                     Search
//                     <div className="tooltip-arrow" data-popper-arrow></div>
//                 </div>
//     </>
// }