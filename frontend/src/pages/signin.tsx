import { Auth } from "../components/auth"
import { Quote } from "../components/quote"

export const Signin=()=>{
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Auth type="signin"></Auth>
                </div>
                <div className="invisible sm:visible">
                <Quote/>
                </div>
                
            </div>
        </div> 
    )
}