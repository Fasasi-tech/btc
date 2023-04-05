import React from 'react'
import './header.css'
import Typical from 'react-typical'
const Header = () => {
  return (
    <div id='Home' className='home_div style_components'>
        <div className='sub_header'>
            <h1 className='heading'>GROWING WITH DATA ANALYTICS </h1>
            <h1 className='grow'>Grow with data.</h1>
            <h1 className='fast'>Fast, Flexible financing for {' '}
            
              <Typical 
                loop ={Infinity}
                wrapper="b"
                steps={[
                  'BTB',
                  1000,
                  'BTC',
                  1000,
                  "SASS",
                  1000,
                  'ETH',
                  500
                ]}
              />
             </h1>
            <h1 className='gray'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</h1>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header