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

  // const {
  //   isLoading: reviewLoading, error: reviewError, data: reviewData
  // } = useQuery({
  //   queryKey: ["reviews", item._id],
  //   queryFn: () =>
  //     newRequest.get(`/reviews/${item._id}`).then((res) => res.data),
  // });
  
  // Check if reviewData has been fetched
  // if (reviewData) {
  //   const totalStars = reviewData.reduce((total, review) => {
  //     // Ensure review and review.starNumber are defined and numeric
  //     if (review && typeof review.star === 'number') {
  //       return total + review.star;
  //     } else {
  //       return total; // Skip invalid or undefined starNumber values
  //     }
  //   }, 0);
  //   console.log("Total Stars:", totalStars);
  // } else {
  //   const totalStars = 0;
  // }
  
  // console.log(reviewData.length)

  return (
    <Link to={`/skill/${item._id}`} className='link'> {/* Assuming item.id is the ID of the skill */}
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
