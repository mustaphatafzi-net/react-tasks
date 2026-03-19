export default function Post({postName="no title", post="no body"}) {
    return ( 
        <div style = {{
         padding:"10px", 
         border:"Solid teal 5px", 
         margin: "25px"
        
        }}>
         <h2>{postName}</h2>
         <hr></hr>
         <p>{post}</p>
        </div>
    )

}