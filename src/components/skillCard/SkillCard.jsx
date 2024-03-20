import React from 'react'
import './SkillCard.scss'
import { Link } from 'react-router-dom'

function SkillCard({item}) {
  return (
    <Link to="/skill/123" className='link'>
      <div className='skillCard'>
          <img src={item.img} alt="" />
          <div className="info">
              <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
              </div>
              <p>{item.desc}</p>
              <div className="star">
                <img src="./imgs/star.png" alt="" />
                <span>{item.star}</span>
              </div>
          </div>
          <hr />
          <div className="details">
            <img src="./imgs/heart.png" alt="" />
          </div>
      </div>
    </Link>
  )
}

export default SkillCard
