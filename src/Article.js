export default function Article({name,username, content, children}){ 
    // const name = props.name;
    // const username = props.username;
    
    return (
        <div style={{background:"tomato", boxShadow:"0px 10px 10px red", color:"white", margin:"20px", padding:"5 0px"}}>
        <h3>{name}</h3>
        <h3>{username}</h3>
        <hr></hr>
        <p>{content}</p>
        <p>{children}</p>
        </div>
    )
}