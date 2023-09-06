import React, { useEffect, useState } from "react"

interface Props {
    data: any
}

const TimerSection: React.FC<Props> = ({ data }) => {
    const [minutes, setMinutes] = useState(data)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    })
    return (
        <React.Fragment>
            {minutes === 0 && seconds === 0 ? null : (
                <div>
                    {" "}
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>
            )}
        </React.Fragment>
    )
}

export default TimerSection
