import React from 'react'
import "./style.scss"
import { instragram, stack2, twiter, whatsap } from '../../../assets'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_header'>
                <img src={stack2} alt="computer1"></img>
            </div>
            <div className='Footer_image'>
                <button>
                    <img src={instragram} alt="computer1"></img>
                </button>
                <button>
                    <img src={twiter} alt="computer1"></img>
                </button>
                <button>
                    <img src={whatsap} alt="computer1"></img>
                </button>
            </div>
            <div className='Footer_copyright'>
                <p>@CopyRight_Developer: m.fahriansyah - 2022</p>
            </div>
        </div>
    )
}

export default Footer
