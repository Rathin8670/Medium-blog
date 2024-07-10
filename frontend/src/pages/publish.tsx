import { useState } from "react"
import { Avater } from "../components/blogCard"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Backend_url } from "../config";


export const Publish=()=>{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate();
    return <div>
            <div className="w-full mb-4 border border-gray-200  bg-gray-100">
                <div className="flex items-center sticky top-0  justify-between px-3 py-2 bg-gray-100 ">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x   sm:rtl:divide-x-reverse ">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        <Avater name={"rathin"}/>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                    </svg>
                                <span className="sr-only">Attach file</span>
                            </button>

                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                    </svg>
                                <span className="sr-only">Upload image</span>
                            </button>
                            
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"/>
                                    </svg>
                                <span className="sr-only">Add emoji</span>
                            </button>
                        </div>
                    </div>

                    <button type="button" className="mx-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={
                        async()=>{
                            const response=await axios.post(`${Backend_url}/api/v1/blog`,
                            {
                                title,
                                content
                            },
                            {
                                headers:{
                                    Authorization:localStorage.getItem("token")
                                }
                            });
                        navigate(`/blog/${response.data.id}`)
                    
                    }

                    }>Publish </button>
                </div>

                <div className="flex flex-col"> 
                    <textarea id="editor" className=" w-full max-h-full px-4 text-3xl text-gray-800 bg-white border-2" placeholder="Write the title.." required onChange={(e)=>{
                        setTitle(e.target.value)
                    }} ></textarea>

                    <textarea id="editor" className=" w-full min-h-screen px-4 text-xl text-gray-800 bg-white border-2  " placeholder="Write the content..." onChange={(e)=>{
                        setContent(e.target.value)
                    }} required ></textarea>
                </div>
            </div>
    
    </div>
}