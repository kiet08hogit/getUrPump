import React from "react"

export default function Hero(){
    return(
    <>
    
    <h3>Stay in locked in my bro!!!! </h3>  
    <ol className="benefits-list">
        <li>Train till faillure and eat right</li>
        <li>Get aethestic, not lost — track your lifts like a boss</li>
        <li>DO NOT EGO LIFT! Finally, be safe lifting bro</li>
    </ol><br/>

    <h3> Key things to your best lift:</h3>
    <ul className="rule-lists">
        <div className="rule-item">
            <p><b>Feeder Sets</b></p>
            <p>These are “ramp up” sets to get the blood flowing</p>
        </div>
        <div className="rule-item">
             <p><b>Working Sets</b></p>
            <p>These are the sets where you’re using the best weight for the excercises you chose with your intended reps</p>
        </div>
         <div className="rule-item">
             <p><b>Rest Time</b></p>
            <p>I recommend you taking a rest for 3-5 minute for compound movements or big muscle like chest or back, and 2-3 minutes for the other movements</p>

        </div>

         <div className="rule-item">
             <p><b>RPE</b></p>
            <img src="/RPE.png"></img>

        </div>
    </ul><br/>
        <h3>Training Plan</h3>
        <p> You can log your own exercises and create a custom routine, or try out the workout that I've already provided. It’s up to you!</p>
    
    </>
)
}