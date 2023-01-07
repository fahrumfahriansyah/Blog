import React from 'react'
import "./style.scss"
const TextArea = ({ width, height, ...rest }) => {
    return (
        <div className='textarea'>
            <input type="textarea" style={{ width, height }}  {...rest}></input>
        </div >
    )
}

export default TextArea
