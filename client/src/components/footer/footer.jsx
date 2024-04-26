import React from 'react'
import './footer.scss'

function footer() {
  return (
    
    <div className='footer'>
      <hr/>
      <div className="conatiner">
        <div className="top">
          <div className="item">
            <h2> Categories </h2>
            <span>Art & Design</span>
            <span>Music & Instruments</span>  
            <span>Programming & Tech</span>
            <span>Sports</span>
            <span>Lifestyle</span>
            <span>Handycrafs</span>
            <span>Cooking</span>
            <span>Graphic Design</span>
          </div>
          <div className="item">
            <h2> About </h2>
            <span>Careers</span>
            <span>News</span>  
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
          <div className="item">
            <h2> Community </h2>
            <span>Community Hub</span>
            <span>Forum</span>  
            <span>Events</span>
            <span>Blogs</span>
            <span>Podcast</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2> Contact Us </h2>
            <span>Email</span>
            <span>Address</span>  
            <span>Location</span>
            {/* <span>Blogs</span>
            <span>Podcast</span>
            <span>Community Standards</span> */}
          </div>
        </div>
        <hr/>
        <div className="bottom">
          <div className="left">
            <h2>SkillSwap</h2>
          </div>
          <div className="right">
            <img src="/imgs/twitter.png" alt="" />
            <img src="/imgs/facebook.png" alt="" />
            <img src="/imgs/linkedin.png" alt="" />
            <img src="/imgs/instagram.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
