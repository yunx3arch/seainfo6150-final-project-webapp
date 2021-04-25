import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./HomePageItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";

const HomePageItem = (props) => {
  
  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.topLabel}>
            {props.article.topic}  </div>
          <time className={styles.time} dateTime={props.article.pubDate}>
                {props.article.pubDate}
              </time>
        
          
          
          <h1 className={styles.title}>
            <Link
              className={styles.link}
              to={`/articlelist/${props.article.id}`}
            >
              {props.article.title}
            </Link>

          </h1>
        </header>
        <div className={styles.wrapper}>
              <p>{props.article.shortText}</p>
              <a href={`/articlelist/${props.article.id}`}><ArticleImage
            url={props.article.image._url}
            title={props.article.title}
          /></a>
        </div>
        
      </article>
    </li>
  );
};

HomePageItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default HomePageItem;
