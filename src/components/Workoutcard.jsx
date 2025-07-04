import React, {useState} from "react"
import Modal from "./modal"
import { exerciseDescriptions } from "../utils"

export default function Workoutcard(props){
    
    const {trainingPlan, workoutIndex, icon, dayNum, savedWeight, handleComplete, handleSave, workoutName, workoutType} = props
    const {warmup, workout} = trainingPlan ||{}
    const [showExcerciseDesciption, setShowExcerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeight||{})
    
    function handleAddweight(title, weight){
        console.log(title, weight)
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj) 
    }
    
    // Check if all workout exercises have weights entered
    const allWeightsEntered = workout?.every(exercise => weights[exercise.name] && weights[exercise.name].trim() !== '');
    
    return(
        <div className="workout-container">
            {showExcerciseDesciption && (
                <Modal 
                    showExcercise={showExcerciseDesciption} 
                    handleCloseModal={() => {setShowExcerciseDescription(null)}}
                />
            )}

            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>{dayNum}</p>
                    {icon}
                </div>

                <div className="plan-card-header">
                    <h2><b>{workoutName}</b></h2> 
                </div>
            </div>
            
            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Weights</h6>
                
                {warmup?.map((WarmupExcercise, WarmupIndex) => {
                    return(
                        <React.Fragment key={WarmupIndex}>
                            <div className="exercise-name">
                                <button 
                                    onClick={() => {
                                        setShowExcerciseDescription({
                                            name: WarmupExcercise.name,
                                            description: exerciseDescriptions[WarmupExcercise.name]
                                        })
                                    }}
                                    className="help-icon"
                                >
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                                <p>{WarmupIndex + 1}. {WarmupExcercise.name}</p>
                            </div>
                            <p className="exercise-info">{WarmupExcercise.sets}</p>
                            <p className="exercise-info">{WarmupExcercise.reps}</p>
                            <input className="weight-input" placeholder="N/A" disabled></input>
                        </React.Fragment>
                    )
                })}
                
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Weights</h6>
                
                {workout?.map((WorkoutExcercise, WIndex) => {
                    return(
                        <React.Fragment key={WIndex}>
                            <div className="exercise-name">
                                <button 
                                    onClick={() => {
                                        setShowExcerciseDescription({
                                            name: WorkoutExcercise.name,
                                            description: exerciseDescriptions[WorkoutExcercise.name]
                                        })
                                    }}
                                    className="help-icon"
                                >
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                                <p>{WIndex + 1}. {WorkoutExcercise.name}</p>
                            </div>
                            <p className="exercise-info">{WorkoutExcercise.sets}</p>
                            <p className="exercise-info">{WorkoutExcercise.reps}</p>
                            <input 
                                value={weights[WorkoutExcercise.name] || ''} 
                                onChange={(e) => {handleAddweight(WorkoutExcercise.name, e.target.value)}} 
                                className="weight-input" 
                                placeholder="lbs" 
                            />
                        </React.Fragment>
                    )
                })}
            </div>
            
            <div className="workout-button">
                <button onClick={() => {handleSave(workoutIndex, weights)}}>Save</button>
                <button 
                    onClick={() => {handleComplete(workoutIndex, weights)}} 
                    disabled={!allWeightsEntered}
                >
                    Complete
                </button>
            </div>
        </div>
    )
}