export default function Activities({ activities, setActivities, token }) {

    useEffect(() => {

        async function getActivities() {
            try {
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: 'GET',
                })

                let data = await response.json()

                setActivities(data.data.activities)

            } catch (err) {
                console.log(err)

            }
        }
        getActivities()
    }, [token])



    // //CREATE ACTIVITY 
    // async function createActivity(activityid) {
    //     try {
    //         const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityid}`, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body: JSON.stringify({
    //                 //message?
    //                 message: {
    //                     content: description
    //                 }
    //             })
    //         })
    //         let data = await response.json()
    //         console.log(data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }



    {
        return (
            <>
                {

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
                    })
                }
            </>
        )
    }
}