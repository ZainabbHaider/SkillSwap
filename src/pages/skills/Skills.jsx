import React, { useState } from "react";
import "./Skills.scss";
import SkillCard from "../../components/skillCard/SkillCard";
import { skills } from "../../data";
// import SkillCard from "../../components/skillCard/SkillCard";

function Skills() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="skills">
      <div className="container">
        <span className="breadcrumbs">SkillSwap {">"} Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with SkillSwap's AI
          artists.
        </p>
        <div className="menu">
          <div className="left"></div>
          <div className="right">
            <span className="SortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Rated" : "Newest"}
            </span>
            <img src="./imgs/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort == "sales" ? (
                  <span onClick={() => reSort("CreatedAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Rated</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {skills.map((item) => (<SkillCard item={item} key={item.id} />))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
