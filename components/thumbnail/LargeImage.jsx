import Link from "next/link";
import React from "react";
import { utils } from "../../services";

class LargeImage extends React.Component {
  render() {
    const { title, date, featured, slug, category } = this.props.article;
    let d = new Date(date);

    const excerpt = this.props.withSummary ? this.props.article.excerpt : null;

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
          <a>{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} id="text" />
        <p id="date">
          {category} | {utils.getDate(date)}
        </p>
        <style jsx>
          {`
            div {
              padding: 0;
              margin: 0;
            }

            img {
              margin: auto;
              display: flex;
              justify-content: center;
              max-width: 99%;
            }

            a {
              text-decoration: none;
              color: black;
              font-size: 1.15rem;
              font-weight: bold;
            }

            #text {
              font-size: 0.8rem;
            }
            #date {
              font-size: 0.85rem;
            }
          `}
        </style>
        <style jsx>
          {`
            img {
              width: ${this.props.isHeadline ? 600 : 300}px;
              height: ${this.props.isHeadline ? 300 : 150}px;
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
