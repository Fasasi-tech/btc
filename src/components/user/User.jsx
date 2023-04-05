import React from 'react'
import { images } from '../../constants'
import './user.css'
const User = () => {
  return (
    <div className='subscription' id='company'>
        <div className='card_div'>
           <div className='card'>
                <div>
                    <img src={images.profileone} alt='profileone' className='p_one'/>
                </div>
                <h2>Single User</h2>
                <h1>$ 149</h1>
                <p>500 GB Storage</p>
                <p>1 Granted User</p>
                <p>Send up to 2GB</p>
                <div className='btn-card'>Start Trial</div>
           </div>
           <div className='card'>
                <div>
                    <img src={images.profiletwo} alt='profiletwo' className='p_one'/>
                </div>
                <h2>Single User</h2>
                <h1>$ 149</h1>
                <p>500 GB Storage</p>
                <p>1 Granted User</p>
                <p>Send up to 2GB</p>
                <div className='btn-card'>Start Trial</div>
           </div> 
           <div className='card'>
                <div>
                    <img src={images.profilethree} alt='profilethree' className='p_one'/>
                </div>
                <h2>Single User</h2>
                <h1>$ 149</h1>
                <p>500 GB Storage</p>
                <p>1 Granted User</p>
                <p>Send up to 2GB</p>
                <div className='btn-card'>Start Trial</div>
           </div> 
        </div>   
    </div>
  )
}

export default User