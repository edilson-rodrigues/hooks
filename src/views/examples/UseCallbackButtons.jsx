import React from 'react'

const UseCallbackButtons = (props) => {
    console.log('render...')

    const {inc} = props

    return (
        <div className="center">
            <div>
                <button type="button" className="btn" onClick={() => inc(6)}>+6</button>
                <button type="button" className="btn" onClick={() => inc(12)}>+12</button>
                <button type="button" className="btn" onClick={() => inc(18)}>+18</button>
            </div>
        </div>
    )
}

export default React.memo(UseCallbackButtons)
