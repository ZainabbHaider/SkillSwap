import React, { useEffect } from "react";
import "./Skill.scss";
import { Slider } from "infinite-react-carousel";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

function Skill() {
  const { id } = useParams();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // This effect runs only once when the component mounts

  const {
    isLoading: skillLoading,
    error: skillError,
    data: skillData,
  } = useQuery({
    queryKey: ["skill"],
    queryFn: () =>
      newRequest.get(`/skills/single/${id}`).then((res) => res.data),
  });

  const userId = skillData?.userId;
  

  const {
    isLoading: userLoading,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      userId
        ? newRequest.get(`/users/${userId}`).then((res) => res.data)
        : null,
    enabled: !!userId,
  });

  // const {
  //   isLoading: reviewLoading, error: reviewError, data: reviewData
  // } = useQuery({
  //   queryKey: ["reviews"],
  //   queryFn: () =>
  //     newRequest.get(`/reviews/${id}`).then((res) => res.data),
  // });

  // console.log(reviewData)
  return (
    <div className="skill">
      {skillLoading || userLoading ? (
        "Loading"
      ) : skillError || userError ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              SkillSwap &gt; Graphics &amp; Design &gt;
            </span>
            <h1>{skillData.title}</h1>

            <div className="user">
              <img
                className="pp"
                src={userData.img || "../../public/imgs/noavatar.jpg"}
                alt=""
              />
              <span>{userData.username}</span>
              <div className="stars">
                {Array(skillData.starNumber)
                  .fill()
                  .map((_, i) => (
                    <img src="/imgs/star.png" alt="" key={i} />
                  ))}
                <span>{skillData.starNumber}</span>
              </div>
            </div>

            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {skillData.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>

            <h2>About This Gig</h2>
            <p>{skillData.desc}</p>

            <div className="user2">
              <h2>About the User</h2>
              <div className="user">
                <img
                  src={userData.img || "../../public/imgs/noavatar.jpg"}
                  alt=""
                />
                <div className="info">
                  <span>{userData.username}</span>
                  <div className="stars">
                    {Array(skillData.starNumber)
                      .fill()
                      .map((_, i) => (
                        <img src="/imgs/star.png" alt="" key={i} />
                      ))}
                    <span>{skillData.starNumber}</span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{userData.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">
                      {new Date(userData.createdAt).toISOString().split("T")[0]}
                    </span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>

                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{userData.desc || ""}</p>
              </div>
            </div>

            <Reviews skillId={id}/>
          </div>
          <div className="right">
            <div className="desc">
              <div className="name">
                <img
                  src={userData.img || "../../public/imgs/noavatar.jpg"}
                  alt=""
                />
                <h2>{userData.username}</h2>
              </div>
              <p>{skillData.shortDesc}</p>
            </div>
            {/* <button>Connect with me!</button> */}
            <Link className="link" to="/messages"><button>Connect with me!</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skill;
