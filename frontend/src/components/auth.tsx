import { SignupInput } from 'rathin25'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import  axios  from 'axios'
import { Backend_url } from '../config'

export const Auth=({type}:{type:'signin'|'signup'})=>{
    const navigate=useNavigate();
    const [postInputs,setPostInputs]=useState<SignupInput>({
        email:"",
        name:"",
        password:""
    })

    async function SendReq(){
        try{
            const response=await axios.post(`${Backend_url}/api/v1/user/${type==='signup'?'signup':'signin'}`,postInputs)
            const jwt=response.data;

            console.log('Token received:', jwt); 
            localStorage.setItem("token", jwt);
            console.log('Token stored in localStorage'); 
            console.log(localStorage.getItem("token"))

            navigate('/blogs');
        }catch(e){
            alert("Error while signing up")
        }
    }

    return (
        <div className=" bg-cyan-50  h-screen flex justify-center flex-col">
            
            <div className="max-w-md pl-24 text-center text-3xl font-bold">
                Create an account
            </div>

            <div className="max-w-md text-center pl-24 text-zinc-600 text-l">
                {type==="signin"?"Don't have an account?":" Already have an account?"}
                <Link className='underline underline-offset-1 pl-2 text-blue-600' to={type==="signin"?'/signup':'/signin'}>{type==="signin"?"Sign Up":"Sign In"}</Link>

            </div>
            
            {type==='signup'?<LabelInput title="Username" placeholder="jhon deo..." onchange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name:e.target.value
                })
            }}/>: null}

            <LabelInput title="Email" placeholder="jhondeo1234@gmail.com." onchange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    email:e.target.value
                })
            }}/>

            <PasswordInput title="Password" placeholder="jhon12453@" onchange={(e)=>{
                setPostInputs({
                    ...postInputs,  
                    password:e.target.value // now overwrite the password
                })
            }} type='password'/>  
            
            <div className='max-w-md pl-24 '>
                <button onClick={SendReq} className="text-center block  border shadow-md border-blue-500 rounded  w-full p-2.5 mt-4  bg-blue-500 hover:bg-blue-700 text-white font-semibold">{type==='signin'?'Sign In':'Sign Up'}</button>
            </div>
        </div>
    
    )
}

interface labelinputType{
    title:string,
    placeholder:string,
    onchange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    type?:string
}


function LabelInput({title,placeholder,onchange,type}:labelinputType){
    return (
        <div className='max-w-md pl-24'>
        <div>
            <label  className="block mb-2 my-2 text-sm font-semibold text-slate-950 ">{title}</label>
            <input onChange={onchange} type={type || "text"} id="first_name" className="   text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2 bg-cyan-50 border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" placeholder={placeholder} required />
        </div>
        </div>
    )
}

function PasswordInput({ title, placeholder, onchange, type }:labelinputType) {
        const [passwordType, setPasswordType] = useState(type);
    
        const togglePasswordVisibility = () => {
        setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
        };
    
        return (
        <div className="max-w-md pl-24">
            <label className="block mb-2 my-2 text-sm font-semibold  text-slate-950">{title}</label>
            <div className="relative">
            <input
                id="hs-toggle-password"
                onChange={onchange}
                type={passwordType}
                className="  text-gray-900 text-sm rounded-lg my-2 block w-full p-2.5 bg-cyan-50 border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                placeholder={placeholder}
            />
    
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-0 end-0 p-3.5 rounded-e-md"
            >
                <svg
                className="flex-shrink-0 size-3.5 text-gray-900 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                {passwordType === 'password' ? (
                    <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                    </>
                ) : (
                    <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    </>
                )}
                </svg>
            </button>
            </div>
        </div>
        );
    }
    