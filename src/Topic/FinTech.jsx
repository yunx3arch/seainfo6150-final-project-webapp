import React from "react";
import styles from "./Topic.module.css";
import HomePageItem from "../HomePageItem/HomePageItem.jsx";

const Fintech = (props) => {
    const list = props.techArticle.filter(article=> article.topic === "FinTech");
    
      return (
        <div>
          <ul className={styles.container}>
            {list.map((article) => (
              <HomePageItem article={article} key={article.id} />
            ))}
          </ul>
        </div>
      );
    };
    export default Fintech;
