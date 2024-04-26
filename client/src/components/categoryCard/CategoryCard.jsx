import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom'

function CategoryCard({item}) {

  const handleLinkClick = () => {
    // Reload the page
    window.location.reload();
    window.location.href = to;
  };

  return (
    <Link to={`skills?category=${item.category}`} onClick={handleLinkClick}>
    <div className='categoryCard'>
        <img src={item.img} alt="" />
        <span className='description'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CategoryCard
