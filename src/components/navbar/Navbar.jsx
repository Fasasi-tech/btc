import React, {useState} from 'react'
import './navbar.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'
const Navbar = () => {
  const [toggle, setToggle]=useState(false)
  return (
    <nav className='nav_parent style_components'>
      <div className='navv_parent'>
        <div className='logo_brand'>
              FASASI.
          </div>
          <ul className='list_item'>
              <li><a href='#home'>Home</a></li>
              <li><a href='#company'>Company</a></li>
              <li><a href='#resources'>Resources</a></li>
              <li><a href='#contact'>Contact</a></li>
          </ul>
            <div className='app__navbar-menu'>
              <HiMenuAlt4 className='svg' onClick={()=>setToggle(true)} />
                {toggle && (
                    <motion.div
                    whileInView={{x:[250,0]}}
                    transition={{duration:0.85, ease: 'easeOut'}}
                    className="div">

                    <HiX onClick={()=>setToggle(false)} className="close"/>
                    <ul className='unlist'>
                        <li className="anchor">
                            <a href='#home' onClick={()=>setToggle(false)} >Home</a>
                            <a href='#company' onClick={()=>setToggle(false)} >Company</a>
                            <a href='#resources' onClick={()=>setToggle(false)} >Resources</a>
                            <a href='#about' onClick={()=>setToggle(false)} >About</a>
                            <a href='#contct' onClick={()=>setToggle(false)} >Contact</a>
                        </li>  
                    </ul>
                    </motion.div>
                )
                }
          </div>
        </div>
    </nav>
  )
}

export default Navbar