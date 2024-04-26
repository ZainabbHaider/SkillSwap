import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom'

function CategoryCard({item}) {
  return (
    <Link to={`skills?category=${item.category}`}>
    <div className='categoryCard'>
        <img src={item.img} alt="" />
        <span className='description'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CategoryCard
