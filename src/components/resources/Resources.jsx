import React from 'react'
import { images } from '../../constants'
import './resources.css'

const Resources = ( ) => {
  return (
    <div className='style_components' id='resources'>
        <div className="resources_div">
            <div>
                <img src={images.laptop} className="img-1" alt="laptop"/>
            </div>
            <div className='sidetwo'>
                <h3 className='data'>DATA ANALYTICS DASHBOARD</h3>
                <h1>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatum molestiae delectus culpa hic assumenda, 
                voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?</p>
                <button className='get_started_button'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Resources