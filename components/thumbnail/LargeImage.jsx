import Link from 'next/link'
import React from "react"


function getDate(dateString) {
  let d = new Date(dateString)
  return `${d.toLocaleDateString('en-us', {month: 'long'})} ${d.getDate()}, ${d.getFullYear()}`
}

class LargeImage extends React.Component {
  render() {
    const { title, date, featured, slug, category } = this.props.article
    let d = new Date(date)

    const excerpt = this.props.withSummary ? this.props.article.excerpt : null

    return (
      <div className="container">
        <Link as={`/post/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`}
            href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}>
          <img src={featured}></img>
        </Link>
        <Link as={`/post/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`}
            href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}>
          <a>{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{__html: excerpt}} id="text" />
        <p id="date">{category} | {getDate(date)}</p>
        <style jsx>{`
          div {
            padding: 0;
            margin: 0;
          }

          img { 
            margin: auto;
            display: flex;
            justify-content: center;
            width: ${this.props.isHeadline ? 600 : 300}px;
            height: ${this.props.isHeadline ? 300 : 150}px;
            ${this.props.border ? 
              'border-style: solid;' +
              'border-width: 1px;' : ''};
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
      </div>
    )
  }
}

export default LargeImage