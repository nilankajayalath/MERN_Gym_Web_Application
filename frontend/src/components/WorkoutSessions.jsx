import React from "react";


const WorkoutSessions = () =>{
  return (
     <section className="workout_session">
        <div className="wrapper">
            <h1>TOP WORKOUT SESSION</h1>
            <p>it's essential to offer a variety of top workout sessions that cater to different fitness levels and goals. </p>

            <img src="/img5.jpg" alt="workout" />
        </div>
        <div className="wrapper">
            <h1>FEATURED BOOTCAMPS</h1>
            <p>Each one targets a specific goal or demographic, ensuring a diverse selection of programs that will appeal to a
                 variety of fitness levels and preferences. Below are detailed descriptions for each featured bootcamp:</p>
        
        <div className="bootcamps">
            <div>
                <h4>Ultimate Strength Bootcamp</h4>
                <p>Focus on heavy lifting and compound exercises to boost muscle mass and strength.</p>
            </div>

            <div>
                <h4>Fat-Burning HIIT Bootcamp</h4>
                <p>High-intensity interval training with short bursts of cardio and bodyweight exercises.</p>
            </div>

            <div>
                <h4>Beginner Bootcamp</h4>
                <p>Simple exercises to improve strength, cardio, and flexibility with gradual intensity.</p>
            </div>

            <div>
                <h4>Cross-Training Bootcamp</h4>
                <p> Diverse workouts combining strength, agility, and endurance training.</p>
            </div>
            </div>

        </div>
     </section>
  )
}

export default WorkoutSessions