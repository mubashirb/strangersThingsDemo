import React, { useEffect, useState } from 'react';
import reactdomclient from "react-dom/client";
import { BrowserRouter, useNavigate, Routes, Route, Link } from "react-router-dom";

export default function Activities({ loggedIn, token }) {
    const [activities, setActivities] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] = useState('')
    useEffect(() => {

        async function getActivities() {
            try {
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                let data = await response.json()


                setActivities(data)
            }
            catch (err) {
                console.log(error)
            }
        }
        getActivities()
    }, [])
    async function createActivity() {
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

                body: JSON.stringify({
                    name: activityName,
                    description: activityDescription
                })
            })
            let data = await response.json()

        } catch (err) {
            console.error("Not created")
        }
    }

    return (
        <>
        <br></br>
            {
                loggedIn ? <fieldset className='create-activity' onSubmit={(event) => {
                    event.preventDefault()
                    createActivity()
                }}>
                    
                   <legend><b><i>Create your own activity!</i></b></legend><br></br>
                    <input type="text" placeholder="Activity Name" onChange={(event) => { setActivityName(event.target.value) }} ></input>
                    <input type="text" placeholder="Description" onChange={(event) => { setActivityDescription(event.target.value) }} ></input>
                    <button className='create-button' type="submit"> CREATE</button>
                    <br></br>
                 
                </fieldset>: null
            }
            <h1> Activities</h1>
            {
            
                activities.map(activity => {
                    return(
                        <div key={activity.id}>
                            <fieldset className='activities'>
                                
                                <legend><b>{activity.name}</b></legend>
                                
                                <div>Activity ID #{activity.id}</div>
                                    
                                <div><i>{activity.description}</i></div>
                                
                            </fieldset>
                            
                        </div>
                    )
                })
            }


        </>

    )

}
