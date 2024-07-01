import { Auth } from "../components/auth"
import { Quote } from "../components/quote"

export const Signup=()=>{
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <Auth type="signup"></Auth>
                </div>
                <div className="invisible sm:visible">
                <Quote/>
                </div>
                
            </div>
        </div> 
    )
}