import { useEffect, useState } from "react";

export default function Routines({ token, loggedIn, userId }) {

        async function getAllPublicRoutines() {
            try {

              const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              let result = await response.json();
              console.log(result);
              return result;

            } catch (err) {
              console.log("Error finding all public routines!" + err);
            }
        }

        // useEffect(() => {
        //     sortPostList(searchTerm, postList);
        // },[searchTerm])
    
        // useEffect(() => {
        //     async function getPosts() {
        //         setIsLoading(true);
        //         try {
        //             const list = await fetchPostList(token);
        //             setPostList(list);
        //         } catch (err) {
        //             console.error("Error fetching list!");
        //         } finally {
        //             setIsLoading(false);
        //         }
        //     }
        //     getPosts();
        // },[token])
        let routines = await getAllPublicRoutines();
        return (
            <div id='allRoutines'>
                {   routines.map(routine => {
                                return (
                                    <div className="routine" key={routine.id} onClick={(event) => {
                                        event.preventDefault();
                                        }}>
    
                                        <h3>{routine.name}</h3>
                                        <p><span className='label'>Goal: </span>{routine.goal}</p>
                                        <p><span className='label'>Description: </span>{routine.description}</p>
                                        <p><span className='label'>Creator: </span>{routine.creatorName}</p>
                                        <p><span className='label'>Activities: </span>
                                        {
                                          routine.activity ? routine.activity.map(thisActivity => {
                                            <>
                                              <h3>{thisActivity.name}</h3>
                                              <p><span className='label'>Goal: </span>{thisActivity.goal}</p>
                                              <p><span className='label'>Description: </span>{thisActivity.description}</p>
                                              <p><span className='label'>Duration: </span>{thisActivity.duration}</p>
                                              <p><span className='label'>Count: </span>{thisActivity.count}</p>
                                            </>
                                          }) : null
                                        }</p>
                                        {/* {
                                            routine.creatorId===userId ? <Link to="/UpdateRoutine" className="routineBtn">Edit Post </Link> : null
                                        }
                                        {
                                            routine.creatorId===userId ? <Link to="/Routine" className="routineBtn" onClick={() => {deleteMyRoutine(token, routine.id)}}>Delete</Link> : null
                                        } */}
                                    </div>
                                )
                            })
                }
            </div>
        )
    
}
    

