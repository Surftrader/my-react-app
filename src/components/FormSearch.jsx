import { forwardRef, useState, useCallback, useImperativeHandle } from 'react'

function FormSearch(props, ref) {
    const [searchString, setSearchString] = useState('')

    const onSubmit = useCallback(() => {
        console.log("Sending", searchString)
    }, [searchString])

    useImperativeHandle(ref, () => ({
        onSubmit: () => {
            console.log("Form sending with ref")

            onSubmit()
        }
    }), [onSubmit])

    return <div>
        <div>
            <label className="label">Search:</label>
            <input
                type="text"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)} />
        </div>
        <div>
            <button type="button" onClick={onSubmit}>Search</button>
        </div>
    </div>
}

export default forwardRef(FormSearch)
