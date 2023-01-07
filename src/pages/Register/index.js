import React from 'react'
import "./style.scss"
import { Computer1 } from '../../assets'
import { Inputt, Button, Gap, Anchor } from '../../components/Atom/index'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    // use navigate untuk berpindah halaman
    const historyy = useNavigate()
    return (
        <div className='Container_Register'>
            <div className='Image_Register'>
                <img src={Computer1} alt="computer1"></img>
            </div>
            <div className='Input_Register'>
                <Inputt Title="Full Name" width={80 + "%"} placeholder="masukan Nama`" required />
                <Inputt Title="Email" width={80 + "%"} placeholder="masukan Email`" required />
                <Inputt Title="Password" width={80 + "%"} placeholder="masukan Password`" required />
                <Gap height={30} />
                <Button Btn="Register" onClick={() => { historyy("/Login") }} />
                <Gap height={30} />
                {/* ini berbeda dengan acnhor initanpa di load image */}
                <Anchor onClick={() => { historyy("/Login") }} title=">>>> masuk kehalaman Login " />
            </div>
        </div >
    )
}

export default Register
