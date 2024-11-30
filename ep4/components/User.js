import { useState } from "react"

export const User = (props) => {

     const [count] = useState(0)
     const [count1] = useState(1)

    return(<div className="user-card">
        <h1>count : {count}</h1>
        <h1>count1 : {count1}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Location : Bhopal</h3>
        <h4>contact: kartikey@7518</h4>
    </div>
    )
}