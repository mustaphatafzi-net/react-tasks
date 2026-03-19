import "./TagButtonS.css"
import TagButton from "./TagButton"
export default function SideMenu(){
    return (
        <div style={{margin:"25px", border:"solid teal 5px"}}>
           <TagButton title="first"/>


           <TagButton title="last">
            <div>
              <span>😍😍😍</span>
            </div>
           </TagButton>
           <TagButton>
            <div>
                <img style={{width:"90px"}} src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop"/>
            </div>
           </TagButton>
           <TagButton/>
        </div>
    )
}