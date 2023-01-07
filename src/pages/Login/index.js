import React from 'react'
import { Computer2 } from '../../assets'
import { Inputt, Button, Gap, Anchor } from '../../components/Atom/index'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const history = useNavigate()
    return (
        <div className='Container_Register'>
            <div className='Image_Register'>
                <img src={Computer2} alt="computer1"></img>
            </div>
            <div className='Input_Register'>
                <Inputt Title="Email" width={80 + "%"} placeholder="masukan Email" required />
                <Inputt Title="Password" width={80 + "%"} placeholder="masukan Password" required />
                <Gap height={30} />
                <Button Btn="Login" onClick={() => { history("/") }} />
                <Gap height={30} />
                <Anchor onClick={() => { history("/Register") }} title=">>>> masuk kehalaman register " />
            </div>
        </div >
    )
}

export default Login
