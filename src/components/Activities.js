import React, { useEffect, useState } from 'react';
export default function Activities({ loggedIn, token }) {

    const [activities, setActivities ] = useState([]);
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

                setActivities(data.data.description)

            } catch (err) {
                console.log(err)

            }
        }
        getActivities()
    }, [token])



    // //CREATE ACTIVITY 
    async function createActivity(activityid, token) {
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityid}`, {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     },
            //     body: JSON.stringify({
            //         //message?
            //         message: {
            //             content: description
            //         }
            //     })
            // })
            method: "POST",
            body: JSON.stringify({
              name: activityName,
              description: activityDescription
            })
          })
            let data = await response.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    {
        return (
            <>
                {   loggedIn ?
                    activities.map((activity) => {
                        return (
                            <div key={activity._id}>
                                <div className="card">
                                    <div><h4>Name{activity.name}</h4></div>
                                    <div>Description:{activity.description}</div>

                                    <label></label>
                                    <input type="text" placeholder="Create Activity" onChange={(event) => { createActivity(event.target.value) }} ></input>
                                    <br />
                                    <button type="submit" className="btCreate"
                                        onClick={() => createActivity(activity._id)}>Create Activity</button>
                                </div>
                                <br />
                            </div>
                        )
                    }) : null
                }
            </>
        )
    }
}