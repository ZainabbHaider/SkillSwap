import React, { useEffect, useState } from "react";
import "./Skills.scss";
import SkillCard from "../../components/skillCard/SkillCard";
// import { skills } from "../../data";
import newRequest from "../../utils/newRequest";
// import SkillCard from "../../components/skillCard/SkillCard";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

function Skills() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("starNumber");

  const {search} = useLocation();
  // console.log(location)
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['skills'],
    queryFn: () =>
    
      newRequest.get(`/skills${search ? search + '&' : '?'}sort=${sort}`).then((res) => {
        return res.data;
      }),
  });

  // Function to extract category name from search query
  const getCategoryFromSearch = () => {
    const params = new URLSearchParams(search);
    return params.get('category') || "All Skills";
  };

  const categoryName = getCategoryFromSearch();

  console.log(categoryName)
  // console.log(useLocation());

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  },[sort]);

  return (
    <div className="skills">
      <div className="container">
        <span className="breadcrumbs">SkillSwap {">"} {categoryName}</span>
        <h1>{categoryName}</h1>
        <p>
        Discover the diverse range of skilled individuals offering their expertise.
        </p>
        <div className="menu">
          <div className="left"></div>
          <div className="right">
            <span className="SortBy">SortBy</span>
            <span className="sortType">
              {sort === "starNumber" ? "Best Rated" : "Newest"}
            </span>
            <img src="./imgs/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort == "starNumber" ? (
                  <span onClick={() => reSort("CreatedAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("starNumber")}>Best Rated</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading ? "loading" : error ? "Something went wrong!": data.map((item) => (<SkillCard item={item} key={item._id} />))}
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
