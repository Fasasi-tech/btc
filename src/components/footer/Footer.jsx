import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer_parent_div' id="contact">
        <div className='footer_div'>
            <div className='lorem'>
                <h1>REACT.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Id odit ullam iste repellat consequatur
                libero reiciendis, blanditiis accusantium.</p>
            </div>
            <div className='footer-subdiv'>
                <div className='f_div'>
                    <p>Solutions</p>
                    <p>Analytics</p>
                    <p>Marketing</p>
                    <p>Commerce</p>
                    <p>Insight</p>
                </div>
                <div className='f_div'>
                    <p>Supports</p>
                    <p>Pricing</p>
                    <p>Hosting</p>
                    <p>Guides</p>
                    <p>Api Status</p>
                </div>
                <div className='f_div'>
                    <p>Company</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Careers</p>
                </div>
                <div className='f_div'>
                    <p>Legal</p>
                    <p>Claim</p>
                    <p>Policy</p>
                    <p>Terms</p>
                </div>
            </div>    
        </div>  
    </div>
  )
}

export default Footer