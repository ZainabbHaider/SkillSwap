import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

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

  const currentUser = null

  // const currentUser = {
  //   id: 1,
  //   username: "Anna",
  //   isSeller: true,
  // };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src={active || pathname !== "/" ? "/imgs/bluelogo2.png": "/imgs/whitelogo2.png"} alt="logo" />
            <span className="text">SkillSwap</span>
          </Link>
        </div>
        <div className="links">
          <span>Explore</span>
          <span>Community</span>
          <span>Learn a skill</span>
          <span>Exchange services</span>
          {!currentUser?.isSeller || currentUser != null && <span>Become Member</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/myskills">
                      Skills
                    </Link>
                    <Link className="link" to="/add">
                      Add New Skills
                    </Link>
                  </>
                )}
                <Link className="link" to="/lessons">
                  Lessons
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button className={active || pathname !== "/" ? "button active" : "button"}>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              Music & Instruments
            </Link>
            <Link className="link menuLink" to="/">
              Sports
            </Link>
            <Link className="link menuLink" to="/">
              Handycraft
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Cooking
            </Link>
            <Link className="link menuLink" to="/">
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