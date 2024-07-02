import { Avater } from "./blogCard"

export const Appbar=()=>{
    return (
        <div className="border-b-2 flex justify-between px-10 py-3 h-20">
            <div className="flex justify-center flex-col text-2xl font-bold" >
            Medium
            </div>
            <div className="flex justify-center flex-col ">
                <Avater name={"rathin"}></Avater>
            </div>
        </div>
        
    )
}