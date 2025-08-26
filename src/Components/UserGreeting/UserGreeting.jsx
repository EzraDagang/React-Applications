import "./UserGreeting.css";

function UserGreeting({isLoggedIn, username = "Guest"}){
        
    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2> 
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    
    return(isLoggedIn? welcomeMessage : loginPrompt)
    
    // if(isLoggedIn){
    //     return(
    //         <h2>Welcome {username}</h2>
    //     )
    // } else{
    //     return (
    //         <h2>Please log in to continue</h2>
    //     )
    // }
    
}

export default UserGreeting;