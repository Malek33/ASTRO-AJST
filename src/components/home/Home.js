import React from 'react'
import './Home.css'

import saturn from '../../srcs/saturn-betterV0.2.png'


function Home() {
  return (
    <div className='container'>
        <div className='left'>
            <h1>WELCOME TO ASTRO-AJST</h1>
            <bold style={{fontWeight: 'bold', color: '#cc852f'}}>Planets | Relaxing | informations | Acupunter</bold>
            <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.
                 It is a gas giant with an average radius of about nine and a half times that of Earth.
                  It has only one-eighth the average density of Earth; however, with its larger volume,
                   Saturn is over 95 times more massive.</p>
            <br/>
            <a href='https://facebbok.com'>READ MORE</a>
            <br/>
            <br/>
        </div>
        
        <div className='right'>
            <img src={saturn} alt='saturn'/>
        </div>
    </div>
  )
}

export default Home