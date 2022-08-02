import { memo } from 'react'

function List(props) {
    console.log("render List")
    return (
        <ul>
            {props.data.map((item) => (
                <li key={item.toString()}>{item}</li>
            ))}
        </ul>
    )
}

export default memo(List)
