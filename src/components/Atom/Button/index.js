import React from 'react'
const Button = ({ Btn, width, height, ...rest }) => {
    return (
        <div className='btn_register'>
            <button style={{ width, height }} {...rest}>{Btn}</button>
        </div>
    )
}

export default Button
