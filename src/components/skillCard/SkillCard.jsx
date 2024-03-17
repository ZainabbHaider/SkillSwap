import React from 'react'
import './SkillCard.scss'
import { Link } from 'react-router-dom'

function SkillCard({items}) {
  return (
    <div className='skillCard'>
        <Link to="/gigs/123">
            <div className="conatiner">
                <img src={items.img} alt="" />
                <div className="info">
                    <div className="user"></div>
                </div>
                <div className="details"></div>
            </div>
        </Link>
    </div>
  )
}

export default SkillCard
