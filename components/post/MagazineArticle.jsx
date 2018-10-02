import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import FacebookProvider, { Comments } from "react-facebook";

import { utils } from "../../services";

@connect(store => {
  return {
    title: store.post.title,
    featured: store.post.featured,
    author: store.post.author,
    date: store.post.date,
    excerpt: store.post.excerpt,
    content: store.post.content
  };
})
class MagazineArticle extends React.Component {
  render() {
    const { title, author, date, featured, excerpt, content } = this.props;
    console.log(date);
    return (
      <div>
        <div className="headline">
          <div className="headline-img">
            <img src={featured} id="featured" />
          </div>
          <div className="headline-text">
            <p id="date">{utils.getDate(date)}</p>
            <h3 id="title">{title}</h3>
            <div id="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        </div>
        <div className="container-fluid" id="post">
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          <div id="comments">
            <FacebookProvider appId="552236551859735">
              <Comments href={document.URL} />
            </FacebookProvider>
          </div>
        </div>
        <style jsx>{`
          @media screen and (min-width: 601px) {
            .headline-img {
            }
            .headline-img::after {
              position: relative;
              background-image: linear-gradient(from bottom, gray);
            }
            .headline-text {
              margin-left: 25%;
              position: relative;
              top: -25rem;
              text-align: center;
              width: 50%;
            }
            #date {
              color: #c0c0c0;
              font-family: "Lato";
              font-style: bold;
              font-size: 1.15rem;
            }
            #title {
              max-width: 100%;
              font-family: "Lato";
              font-size: 3.5rem;
              color: white;
            }
            #excerpt {
              max-width: 100%;
              font-size: 2rem;
              color: #c0c0c0;
              font-family: "Comic Sans";
              font-style: italic;
            }
            #post {
              position: relative;
              top: -20rem;
            }
            #featured {
              width: 100%;
              z-index: 0;
            }
            #content {
              margin-left: 25%;
              width: 50%;
              font-size: 1.25rem;
            }
            #content p {
              font-family: "Lato";
            }
            #comments {
              margin-top: 3rem;
              margin-left: 30%;
            }
          }
          @media screen and (max-width: 600px) {
            #featured {
              width: 100%;
            }
            #content {
              margin-left: 2.5%;
              width: 95%;
              font-size: 0.9rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default MagazineArticle;
