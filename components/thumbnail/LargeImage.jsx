import Link from 'next/link'
import React from "react"


class LargeImage extends React.Component {
  render() {
    const { title, author, date, featured, slug } = this.props.article
    var d = new Date(date)

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
        <style jsx>{`
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
            font-size: 1.25em;
            font-weight: bold;
          }

          #text {
            font-size: 0.75em;
          }
          
        `}
        </style>
      </div>
    )
  }
}

export default LargeImage