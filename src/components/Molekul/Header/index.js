import React from 'react'
import "./style.scss"
import { stack2 } from '../../../assets'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const history = useNavigate()
    return (
        <div className='Header'>
            <ul className='List_Header'>
                <li>
                    <img src={stack2} alt="computer1"></img>
                </li>
                <li>
                    <button onClick={() => { history("/Login") }} >Logout</button >
                </li>
            </ul>
        </div>
    )
}

export default Header
