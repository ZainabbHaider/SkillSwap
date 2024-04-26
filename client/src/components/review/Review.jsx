import React from 'react'
import "./Review.scss"
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

export const Review = ({review}) => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId], // Passing item.userId as part of the queryKey
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="review">
              <div className="item">
                {isLoading ? "Loading" : error ? "Something went wrong!" : <div className="user">
                  <img
                    className="pp"
                    src={data.img || "../../imgs/noavatar.jpg"}
                    alt=""
                  />
                  <div className="info">
                    <span>{data.username}</span>
                    <div className="country">
                      <span>{data.country}</span>
                    </div>
                  </div>
                </div>}
                <div className="stars">
                {Array(review.star)
                  .fill()
                  .map((_, i) => (
                    <img src="/imgs/star.png" alt="" key={i} />
                  ))}
                  <span>{review.star}</span>
                </div>
                <p>
                  {review.desc}
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/imgs/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/imgs/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
            </div>
  )
}

export default Review;