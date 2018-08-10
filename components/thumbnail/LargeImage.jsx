import Link from "next/link";
import React from "react";
import { utils } from "../../services";

class LargeImage extends React.Component {
  render() {
    const { title, date, featured, slug, category } = this.props.article;
    let d = new Date(date);

    const excerpt = this.props.withSummary
      ? utils.shortenExcerpt(
          this.props.article ? this.props.article.excerpt : null
        )
      : null;

    return (
      <div className="container">
        <Link
          as={`/post/${d.getFullYear()}/${d.getMonth() +
            1}/${d.getDate()}/${slug}`}
          href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}
        >
          <img src={featured} />
        </Link>
        <Link
          as={`/post/${d.getFullYear()}/${d.getMonth() +
            1}/${d.getDate()}/${slug}`}
          href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}
        >
          <a id="title">{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} id="text" />
        <p id="date">
          {category} | {utils.getDate(date)}
        </p>
        <style jsx>
          {`
            img {
              margin: auto;
              display: flex;
              justify-content: center;
              max-width: 99%;
            }
            #title {
              font-family: "Lato";
            }
            a {
              text-decoration: none;
              color: black;
              font-weight: bold;
            }
            #text {
              font-size: 0.8rem;
              font-family: "Lato";
            }
            #date {
              font-family: "Lato";
              font-size: 0.85rem;
            }
          `}
        </style>
        <style jsx>
          {`
            a {
              font-size: ${this.props.isHeadline ? 1.15 : 0.85}rem;
            }
            img {
              width: ${this.props.isHeadline ? 45 : 16}rem;
              height: ${this.props.isHeadline ? 18 : 8}rem;
              border-style: ${this.props.border ? "solid" : ""};
              border-width: ${this.props.border ? 1 : 0}px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default LargeImage;
