import Link from "next/link";
import React from "react";
import { utils } from "../../services";

function getDate(dateString) {
  var d = new Date(dateString);
  return `${d.toLocaleDateString("en-us", {
    month: "long"
  })} ${d.getDate()}, ${d.getFullYear()}`;
}

class RightSideImage extends React.Component {
  render() {
    const { title, category, date, featured, slug } = this.props.article;
    var d = new Date(date);

    const excerpt = this.props.withSummary
      ? utils.shortenExcerpt(
          this.props.article ? this.props.article.excerpt : null
        )
      : null;

    return (
      <div className="container" id="content">
        <div className="" id="side-image">
          <Link
            as={`/post/${d.getFullYear()}/${d.getMonth() +
              1}/${d.getDate()}/${slug}`}
            href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}
          >
            <img className="img-responsive float-right" src={featured} />
          </Link>
        </div>
        <Link
          as={`/post/${d.getFullYear()}/${d.getMonth() +
            1}/${d.getDate()}/${slug}`}
          href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}
        >
          <a id="title">{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} id="text" />
        <p id="date">
          {category} | {getDate(date)}
        </p>
        <style jsx>
          {`
            #content {
              padding: 0;
              margin: 1em auto;
            }
            #side-image {
              margin: 0;
              padding: 0;
            }
            #title {
              margin-right: 7px;
              font-family: "Lato";
            }
            img {
              width: 200px;
              height: 120px;
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
              font-family: "Lato";
            }
            #date {
              font-family: "Lato";
              font-size: 0.85rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default RightSideImage;
