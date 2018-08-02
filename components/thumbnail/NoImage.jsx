import Link from "next/link";
import React from "react";
import { utils } from "../../services";

class NoImage extends React.Component {
  render() {
    const { title, category, date, slug } = this.props.article;
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
      <div className="container">
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
              font-size: 1rem;
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
      </div>
    );
  }
}

export default NoImage;
