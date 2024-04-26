import React from 'react'
import './SkillCard.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import newRequest from "../../utils/newRequest";

function SkillCard({ item }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['skillUser', item.userId], // Passing item.userId as part of the queryKey
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  
  // console.log(reviewData.length)
  const handleLinkClick = () => {
    // Reload the page
    window.location.reload();
    window.location.href = to;
  };

  return (
    <Link to={`/skill/${item._id}`} className='link' onClick={handleLinkClick}> {/* Assuming item.id is the ID of the skill */}
      <div className='skillCard'>
          <img src={item.cover} alt="" />
          <div className="info">
              {isLoading ? (
                "loading"
              ) : error ? (
                "Something went wrong!"
              ) : (
                <div className="user">
                  <img src={data.img || "./imgs/noavatar.jpg"} alt="" />
                  <span>{data.username}</span>
                </div>
              )}
              <p>{item.title}</p>
              <div className="star">
                <img src="./imgs/star.png" alt="" />
                <span>{item.starNumber}</span>
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

export default SkillCard;
