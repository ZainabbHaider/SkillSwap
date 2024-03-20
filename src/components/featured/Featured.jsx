import React from 'react'
import './Featured.scss'

function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Discover, Connect, Exchange: <i>Learn New Skills on SkillSwap</i></h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./imgs/search.png" alt=""/>
                        <input type="text" placeholder="Search for a skill" />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular Skills:</span>
                    <button>Guitar</button>
                    <button>Photography</button>
                    <button>Cooking</button>
                    <button>Sewing</button>
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
