import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import styles from "./SingleNews.module.css";
import ArticleImage from "../ArticleImage/ArticleImage";
import backIcon from "../back.svg";

const DynamicArticle = (props) => {
  return (
    <div className={styles.singleNews}>
      <a href="/" >
        <img src={backIcon} className={styles.back} />
      </a>
      <article >
        <header>
          <ArticleImage
            url={props.article.image._url}
            title={props.article.title}
            classsName={styles.articleImage}
            alt ={props.article.title}
          />
          <h1>{props.article.title}</h1>
          <address className={styles.author}>
             {props.article.author} <br />
          </address>
          <time dateTime={props.article.pubDate}>
            {props.article.displayDate}
          </time>
        </header>
        <div className={styles.text}>
        <HTMLText text={props.article.text} />
        </div>
      </article>
    </div>
  );
};

export default DynamicArticle;
