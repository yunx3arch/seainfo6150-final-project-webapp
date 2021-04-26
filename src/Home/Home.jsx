import React,{ useState } from "react";
import styles from "./Home.module.css";
import HomePageItem from "../HomePageItem/HomePageItem.jsx";

const Home = (props) => {

  return (
    <div>
      <ul className={styles.container}>
        {props.techArticle.map((article) => (
          <HomePageItem article={article} key={article.id} />
        ))}
      </ul>
    </div>
  );
};


export default Home;
