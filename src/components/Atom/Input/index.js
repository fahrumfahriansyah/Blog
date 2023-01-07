import React from 'react'
import "./style.scss"
const Inputt = ({ Title, width, heigth, margin, ...rest }) => {
    return (
        <div className='Input_atom'>
            <p>{Title}</p>
            <input type="text" style={{ width, heigth, margin }} {...rest} />
        </div>
    )
}

export default Inputt
