import React from "react"

interface pageProps {
    data: any
}

const SimpleChoice: React.FC<pageProps> = ({ data }) => {
    console.log({ data })
    data.map((item: any, index: any) => {
        ;<div key={index}>
            <div>{item.value.en_US}</div>
            <div></div>
            <div></div>
        </div>
    })
    return (
        <React.Fragment>
            {data.map((item: any, index: any) => (
                <div key={index}>
                    {index === data.length}
                    <div>{item.value.en_US}</div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default SimpleChoice
