import React from "react";
import "./Skill.scss";
import { Slider } from "infinite-react-carousel";

function Skill() {
  return (
    <div className="skill">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            SkillSwap {">"} Graphics & Design {">"}
          </span>
          <h1>I will create AI generated art for you</h1>

          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>John Doe</span>
            <div className="stars">
              <img src="/imgs/star.png" alt="" />
              <img src="/imgs/star.png" alt="" />
              <img src="/imgs/star.png" alt="" />
              <img src="/imgs/star.png" alt="" />
              <img src="/imgs/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About the User</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img className="pp"
                    src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>US</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <img src="/imgs/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  I have worked with Alex several times and will continue to do
                  so. He always brings an exceptional level of knowledge and
                  professionalism to every job. Highly recommended.
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
          </div>
        </div>
        <div className="right">
              <div className="desc">
                <div className="name">
                  <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <h2>John Doe</h2>
                </div>
                <p>
                  Let's embark on a delightful exchange of skills. I'd be thrilled to delve into the world of AI art with you, exploring its boundless creativity and potential. In return, I'm eager to learn the artistry of cooking from someone as passionate as yourself. Together, we'll indulge in the beauty of both culinary and digital creations, enriching each other's lives along the way.
                </p>
              </div>
              <button>Connect with me!</button>
        </div>
      </div>
    </div>
  );
}
export default Skill;
