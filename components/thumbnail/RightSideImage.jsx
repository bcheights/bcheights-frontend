import Link from "next/link";
import React from "react";
import { utils } from "../../services";

class RightSideImage extends React.Component {
  render() {
    const { title, category, date, featured, slug } = this.props.article;
    var d = new Date(date);

    const excerpt = this.props.withSummary
      ? utils.shortenExcerpt(
          this.props.article ? this.props.article.excerpt : null
        )
      : null;

    const asLink = this.props.magazine
      ? `/magazine/${d.getFullYear()}/${d.getMonth() +
          1}/${d.getDate()}/${slug}`
      : `/post/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`;
    const hrefLink = this.props.magazine
      ? `/magazine?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`
      : `/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`;

    return (
      <div className="container" id="content">
        <div className="" id="side-image">
          <Link as={asLink} href={hrefLink}>
            <img className="img-responsive float-right" src={featured} />
          </Link>
        </div>
        <Link as={asLink} href={hrefLink}>
          <a id="title">{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} id="text" />
        <p id="date">
          {category} | {utils.getDate(date)}
        </p>
        <style jsx>
          {`
            #side-image {
              margin: 0;
              padding: 0;
            }
            #title {
              font-family: "Lato";
            }
            img {
              margin-left: 0.5rem;
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
        <style jsx>
          {`
            img {
              width: ${this.props.isHeadline ? 17.875 : 13}rem;
              height: ${this.props.isHeadline ? 11 : 8}rem;
              border-style: ${this.props.border ? "solid" : ""};
              border-width: ${this.props.border ? 1 : 0}px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default RightSideImage;
