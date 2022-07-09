import React, { useEffect, useState } from 'react';
import { fetchAllActivities } from '../api';

export default function Activities({loggedIn, token, activities, setActivities}){

    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    useEffect(() => {

        async function getActivities() {
            try {
                const result = await fetchAllActivities();
                setActivities(result);
            }
            catch (err) {
                console.log(error)
            }
        }
        getActivities();
        
    }, [])


    return (
        <>
        <br></br>
            {
                loggedIn ? <fieldset className='create-activity' onSubmit={async (event) => {
                    event.preventDefault();
                    let newActivity = await createActivity(token, activityName, activityDescription);
                }}>
                    
                   <legend className='activity-legend'><b><i>Create your own activity!</i></b></legend><br></br>
                    <div><input type="text" placeholder="Activity Name" onChange={(event) => { setActivityName(event.target.value) }} ></input></div>
                    <div><input type="text" placeholder="Description" onChange={(event) => { setActivityDescription(event.target.value) }} ></input></div>
                    <button className='create-button' type="submit"> CREATE</button>
                    <br></br>
                 
                </fieldset>: null
            }
            <h1> Activities</h1>
            {
            
                activities.map(activity => {
                    return(
                        <div className='activity-row' key={activity.id}>
                            <fieldset className='activities'>
                                
                                <legend><b>{activity.name}</b></legend>
                                
                                <div>Activity ID #{activity.id}</div>
                                    
                                <div><i>{activity.description}</i></div>
                                
                            </fieldset>
                            <br></br>
                            
                        </div>
                    )
                })
            }


        </>

    )

}
