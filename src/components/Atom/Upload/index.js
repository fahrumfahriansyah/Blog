import React from 'react'
import "./style.scss"
const Upload = ({ height, width, img, ...rest }) => {

    return (
        <div className='Upload'>
            {img && <img src={img} alt="ini adalah computer 2" style={{ width, height }}></img>}
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload
