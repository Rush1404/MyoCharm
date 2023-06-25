import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import jerfay from '../../assets/jerfay.png';

const Header = () => {
  return (
    <div className='header section__padding' >
        <div className='header-content'>
          <h1 className='gradient__text'>Portable and Innovative Solutions to Muscular Diseases</h1>
          <p>Powered by Tensorflow's Keras Sequential Deep Learning Model, Myocharm aims to provide innovative solutions to the inaccessibility of healthcare for immobile patients</p>
          
          <div className='header-content__input'>
            <input type='email' placeholder='Your email address'></input>
            <button type='button' onClick={() => window.location.reload(true)}>Get Started</button>
          </div>

        <div className='header-content__people'>
          <img src={people}  alt='people'/> 
          <p>Join a supportive healthcare community now!</p>
        </div>

        </div>
      <div className='header-image'>
        <img src={jerfay} alt='jerfay'/>
      </div>
         
    </div>
  )
}

export default Header