import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null;

  const currentUser = JSON.parse(localStorage.getItem("currentuser"));

  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try {
      await newRequest.post("/auths/logout");
      localStorage.setItem('currentuser', null);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const handleLinkClick = () => {
    // Reload the page
    window.location.reload();
    window.location.href = to;
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img
              src={
                active || pathname !== "/"
                  ? "/imgs/bluelogo2.png"
                  : "/imgs/whitelogo2.png"
              }
              alt="logo"
            />
            <span className="text">SkillSwap</span>
          </Link>
        </div>
        <div className="links">
          <span>Explore</span>
          <span>Community</span>
          <Link className="link" to="/skills" onClick={handleLinkClick}><span>Learn a Skill</span></Link>
          <span>Exchange services</span>
          {!currentUser?.isSeller ||
            (currentUser != null && <span>Become Member</span>)}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={
                  currentUser.img || "/imgs/noavatar.jpg"}
                alt="profile"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                    
                      <Link className="link" to="/myskills" onClick={handleLinkClick}>
                        My Skills
                      </Link>
                      <Link className="link" to="/add" onClick={handleLinkClick}>
                        Add New Skills
                      </Link>
                    
                  
                  <Link className="link" to="/lessons">
                    Lessons
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
            <Link className="link" to="/login">
            <span>Sign in</span>
            </Link>
              
              <Link className="link" to="/register">
                <button
                  className={
                    active || pathname !== "/" ? "button active" : "button"
                  }
                >
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/skills?category=Graphic Design" onClick={handleLinkClick}>
              Graphics & Design
            </Link>
            <Link className="link" to="/skills?category=Art" onClick={handleLinkClick}>
            Art
            </Link>
            <Link className="link" to="/skills?category=Languages" onClick={handleLinkClick}>
            Languages
            </Link>
            <Link className="link" to="/skills?category=MusicInstruments" onClick={handleLinkClick}>
              Music & Instruments
            </Link>
            <Link className="link" to="/skills?category=Sports" onClick={handleLinkClick}>
              Sports
            </Link>
            <Link className="link" to="/skills?category=Handycraft" onClick={handleLinkClick}>
              Handycraft
            </Link>
            <Link className="link" to="/skills?category=Technology" onClick={handleLinkClick}>
              Programming & Tech
            </Link>
            <Link className="link" to="/skills?category=Cooking" onClick={handleLinkClick}>
              Cooking
            </Link>
            <Link className="link" to="/skills?category=Lifestyle" onClick={handleLinkClick}>
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
