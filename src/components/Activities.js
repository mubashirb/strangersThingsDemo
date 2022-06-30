export default function Activities({ activities, setActivities, token }) {

    useEffect(() => {
        async function getActivities() {
            try {
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })

                let data = await response.json()

                setActivities(data.data.activities)

            } catch (err) {
                console.log(err)

            }

        }
        getActivities()
    }, [token, activities])

}
