import { useState, useEffect } from 'react'

function TestUnmount() {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        console.log('Mounted')

        const intervalTimer = setInterval(() => {
            const currentDateTime = new Date()
            console.log(currentDateTime)
            setDateTime(currentDateTime)
        }, 1000)

        return () => {
            console.log('It will be unmounted')
            clearInterval(intervalTimer)
        }
    }, [])

    return (
        <div>Testing Unmount {dateTime.toISOString()}</div>
    )
}

export default TestUnmount
