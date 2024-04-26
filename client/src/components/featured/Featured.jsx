import React, { useState } from 'react'
import './Featured.scss'
import { Link, useNavigate } from 'react-router-dom'

function Featured() {
    const [input, setInput] = useState("")
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`/skills?search=${input}`);
    }

    return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Discover, Connect, Exchange: <i>Learn New Skills on SkillSwap</i></h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./imgs/search.png" alt=""/>
                        <input type="text" placeholder="Search for a skill" onChange={(e) => setInput(e.target.value)}/>
                    </div>
                    <button onClick={handleClick}>Search</button>
                </div>
                <div className="popular">
                    <span>Popular Skills:</span>
                    <Link className="link" to="/skills?category=Musical Intruments"><button>Guitar</button></Link>
                    <Link className="link" to="/skills?category=Photography"><button>Photography</button></Link>
                    <Link className="link" to="/skills?category=Cooking"><button>Cooking</button></Link>
                    <Link className="link" to="/skills?category=Handycrafts"><button>Sewing</button></Link>
                </div>
            </div>
            <div className="right">
                <img src="./imgs/5.png" alt=""/>    
            </div>    
        </div>      
    </div>
  )
}

export default Featured
