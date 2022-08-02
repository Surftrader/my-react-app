import { memo } from 'react'

function CustomButton(props) {
    console.log('CustomButton')
    return (
        <button
            type="button"
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default memo(CustomButton)
