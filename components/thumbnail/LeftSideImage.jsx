import Link from "next/link";
import React from "react";
import { utils } from "../../services";

class LeftSideImage extends React.Component {
  render() {
    const { title, category, date, featured, slug } = this.props.article;
    var d = new Date(date);

    let split_excerpt = this.props.article.excerpt.split('</p>')
    let space_split_excerpt = split_excerpt[0].split(' ')
    let final_excerpt = ''
    let i = 0
    while (final_excerpt.length < 103) {
      final_excerpt += space_split_excerpt[i] + ' '
      i+=1
    }
    final_excerpt += ' &hellip; </p>' + split_excerpt.splice(1,split_excerpt.length).join('</p>')

    const excerpt = this.props.withSummary ? final_excerpt : null

    //const excerpt = this.props.withSummary ? this.props.article.excerpt : null;
    return (
      <div className="container" id="content">
        <div className="row justify-content-center">
          <div className="col-3" id="side-image">
            <Link
              as={`/post/${d.getFullYear()}/${d.getMonth() +
                1}/${d.getDate()}/${slug}`}
              href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}
            >
              <img className="" src={featured} />
            </Link>
          </div>
          <div className="col-8" id="other">
            <div id="title">
              <Link
                as={`/post/${d.getFullYear()}/${d.getMonth() +
                  1}/${d.getDate()}/${slug}`}
                href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}
              >
                <a>{title}</a>
              </Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} id="text" />
            <p id="date">
              {category} | {utils.getDate(date)}
            </p>
          </div>
        </div>
        <style jsx>
          {`
            #content {
              padding: 0;
              margin: 1em auto;
              width: 100%;
            }
            #side-image {
              margin: 0;
              padding: 0;
            }
            img {
              max-width: 99%;
            }
            a {
              text-decoration: none;
              color: black;
              font-size: 0.95rem;
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
              width: ${this.props.isHeadline ? 240 : 100}px;
              height: ${this.props.isHeadline ? 160 : 80}px;
              border-style: ${this.props.border ? "solid" : ""};
              border-width: ${this.props.border ? 1 : 0}px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default LeftSideImage;
