import React from "react"

export default function Layout(props){
    const {children}=props
    const header= ( 
    <header>
        <h1 className="text-gradient">getUrPump</h1>
        <p><strong>getUrPump is your gym bro that will always be with you. Do the workouts, track your weight progression, look good and 
             swole—all in one place. Whether you're new to the gym or just try to look good for Baddies / Bulking Season™, we got you.</strong></p><br/>
    </header>
)
      
    
    const footer= (
    <footer>
       <p>Built by <a href="/">Jason Ho</a></p>
    <   p>Repo on <a href="https://github.com/kiet08hogit/getUrPump">Git</a></p>
    </footer>
    
)
    return(
        <>
        {header}
        {children}
        {footer}
        
        </>
    )
}