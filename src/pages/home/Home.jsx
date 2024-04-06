import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cards } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <div className="heading">
        <h2>Popular Skills</h2>
      </div>

      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
