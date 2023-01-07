import React from 'react'
import "./style.scss"
const Anchor = ({ title, ...rest }) => {
    return (
        <div className='Anchor'>
            <a {...rest}>{title}</a>
        </div>
    )
}

export default Anchor
