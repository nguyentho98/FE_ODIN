import React from "react"

type Props = {
    src : string
}

const Player = (props : Props) => {
    return (
        <div className="pb-20">
            <audio controls>
                <source src={ props.src}  type="audio/mpeg"/>
            </audio>
        </div>
    )
}

export default Player
