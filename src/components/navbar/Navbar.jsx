import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import Modal from "react-responsive-modal";
import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


{/*this is where the tags that take you to different parts of the page are put and connected to the buttons on the navbar */}
{/* for a function like this one, you have to wrap it in <> and </> */}
const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p> 
  <p><a href='#mychrm'>Consumer Solution</a></p>
  <p><a href='#possibility'>Diagnosis Classifier</a></p>
  <p><a href='#features'>Doctor's Panel</a></p>
  <p><a href='#blog'>About Us</a></p>
  <p><a href='#dgnsis'>Diagnosis</a></p>
  </>
)

const Navbar = () => {
  {/*toggleMenu asks if we are currently showing the mobile menu */}
  {/*setToggleMenu allows us to change the first variable */}
  const [toggleMenu, setToggleMenu] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        {/* this adds the sign in and sign up button */}
        <p onClick={() => setSignInModalOpen(true)}>Sign in</p>
        <button type='button' onClick={() => setSignUpModalOpen(true)}>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {/*if the menu is open, an icon will pop up for the user to click when they want to close it */}
        {/*what we do when the menu is not currently open (the second part of the last elif statement*/}
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {/* && means that only if toggleMenu is true*/}
        {/* scale up is the class we got from the css animations thing and it just adds an animation */}
        {toggleMenu && (
          <div className='gpt#__navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
              <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div> 
          </div>
          <p><Link to='/new_page/myo'>Diagnosis</Link></p>
        </div>
        )}
      </div>
    
  
      <Modal
        open={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: 'slide-in-fwd-center',
        }}
      >
          <h2>Sign In</h2>
          <div className="custom-close-button" onClick={() => window.location.reload(true)}>x</div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={() => window.location.reload(true)}>Sign In</button>
            <button type="button" className="forgot-password-btn" onClick={() => setSignInModalOpen(false)}>Forgot Password</button>
      </Modal>

      <Modal
        open={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
        center
        showCloseIcon={false}
      >
        <h3>Sign Up</h3>
        <div className="custom-close-button" onClick={() => window.location.reload(true)}>x</div>
          <input type="text_1" className="First_name" placeholder="First Name" />
          <input type="text_2" className="Last_name" placeholder="Last Name" />
          <input type="text_3" className= "Username" placeholder="Username" />
          <input type="password_1" placeholder="Password" />
          <button type="submit" onClick={() => window.location.reload(true)}>Sign Up</button>
      </Modal>

    </div>
  )

}

export default Navbar