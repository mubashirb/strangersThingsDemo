import React, { useEffect } from "react";

export default function Routines({ token, loggedIn, userId, routines, setRoutines }) {

        // useEffect(() => {
        //     sortPostList(searchTerm, postList);
        // },[searchTerm])
    
        useEffect(() => {
            async function getAllPublicRoutines() {
                try {
                    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines');
                    let result = await response.json();
                    console.log(result);
                    setRoutines(result);
                    return;
                } catch(error) {
                    console.error("Error fetching all public routines!"+error);
                }
            }
            getAllPublicRoutines();
        },[token])

        return (
            <>
                {   routines ? routines.map(routine => {
                                return (
                                    <div key={routine.id}>
                                        <br></br>
                                        <b>Created by : <i>{routine.creatorName}</i></b>
                                        <br></br>
                                        <br></br>
                                        <fieldset className="routines">
                                        <legend><b>{routine.name}</b></legend>
                                        <div>Goal: {routine.goal}</div>
                                        
                                        <p><span className='label'>Activities: </span></p>
                                        
                                        {
                                         routine.activities ? routine.activities.map((activity) => 
                                            <div className="routineActivity" key={activity.id}>
                                              {activity.name}
                                              <div>Description: {activity.description}</div>
                                              <div>Duration: {activity.duration}</div>
                                              {/* {description ? <> <span>Description: {activity.description} </span> </>:null } */}
                                              {/* {duration ? <> <span>Duration: {activity.duration} </span> </>: null } */}
                                              <p><span className='label'>Count: </span>{activity.count}</p>
                                            </div>
                                          ) : null
                                        }
                                        {/* {
                                            routine.creatorId===userId ? <Link to="/UpdateRoutine" className="routineBtn">Edit Post </Link> : null
                                        }
                                        {
                                            routine.creatorId===userId ? <Link to="/Routine" className="routineBtn" onClick={() => {deleteMyRoutine(token, routine.id)}}>Delete</Link> : null
                                        } */}
                                        </fieldset>
                                    </div>
                                )
                            }) : null
                }
            </>
        )
    
}
    

