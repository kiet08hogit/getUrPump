import { workoutProgram as training_plan } from '../utils/index.js';
import Workoutcard from './Workoutcard.jsx';
import React, { useEffect, useState } from "react"

export default function Grid() {
    const [savedWorkout, setSaveWorkout] = useState({})
    const [selectedworkout, setSelectedWorkout] = useState(null);
    
    // Define the 4-day workout cycle
    const workoutCycle = [
        { name: "Chest/Bicep", type: "push", icon: "fa-solid fa-dumbbell" },
        { name: "Back/Tricep", type: "pull", icon: "fa-solid fa-weight-hanging" },
        { name: "Legs", type: "legs", icon: "fa-solid fa-running" },
        { name: " Rest", type: "rest", icon: "fa-solid fa-bed" }
    ];
    
    const completedWorkout = Object.keys(savedWorkout||{}).filter((val)=>{
        const entry=savedWorkout[val]
        return entry.isComplete
    })
    
    function handleSave(index, data) {
        const newObj = {
            ...savedWorkout,
            [index]: {
                weights: data,  
                isComplete: !!savedWorkout?.[index]?.isComplete
            }
        }
        setSaveWorkout(newObj)
        localStorage.setItem('gym', JSON.stringify(newObj))
        setSelectedWorkout(null)
    }
    
    function handleComplete(index, data) {
        const newObj = {
            ...savedWorkout,
            [index]: {
                weights: data,
                isComplete: true
            }
        }
        setSaveWorkout(newObj)
        localStorage.setItem('gym', JSON.stringify(newObj))
    }
    
    useEffect(() => {
        if (!localStorage) { return }
        let savedData = {}
        if (localStorage.getItem('gym')) {
            savedData = JSON.parse(localStorage.getItem('gym'))
        }
        setSaveWorkout(savedData)
    }, [])
    
    return (
        <div className="training-grid-plans">
            {Object.keys(training_plan).map((workout, workoutIndex) => {
                const date = new Date();
                date.setDate(1 + workoutIndex);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const trainingPlan = training_plan[workoutIndex]
                const dayNum = `${day}/${month}`
                
                // Get workout type based on 4-day cycle
                const cycleIndex = workoutIndex % 4;
                const currentWorkout = workoutCycle[cycleIndex];
                const icon = <i className={currentWorkout.icon}></i>;
                
                if (workoutIndex === selectedworkout) {
                    return (
                        <Workoutcard 
                            key={workoutIndex}
                            savedWeight={savedWorkout?.[workoutIndex]?.weights} 
                            workoutIndex={workoutIndex}  
                            trainingPlan={trainingPlan} 
                            icon={icon} 
                            dayNum={dayNum} 
                            workoutName={currentWorkout.name}
                            workoutType={currentWorkout.type}
                            handleComplete={handleComplete} 
                            handleSave={handleSave}
                        />
                    )
                }
                return (
                    <button 
                        onClick={() => { setSelectedWorkout(workoutIndex) }} 
                        className={`card plan-card ${currentWorkout.type === 'rest' ? 'rest-day' : ''}`} 
                        key={workoutIndex}
                        disabled={currentWorkout.type === 'rest'}
                    >
                        <div className='plan-card-header'></div>
                        <p>{`${day}/${month}`}</p>
                        <div className="workout-info">
                            {icon}
                            <span className="workout-name">{currentWorkout.name}</span>
                        </div>
                        {savedWorkout?.[workoutIndex]?.isComplete && (
                            <div className="completed-badge">
                                <i className="fa-solid fa-check"></i>
                            </div>
                        )}
                    </button>
                );
            })}
        </div>
    );
}