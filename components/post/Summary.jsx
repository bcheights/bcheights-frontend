import Link from 'next/link'
import React from "react"


class Summary extends React.Component {
  render() {
    const { title, author, date, featured, excerpt, slug } = this.props.article
    var d = new Date(date)

    return (
      <li>
        <Link as={`/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`}
            href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}>
          <img src={featured}></img>
        </Link>
        <Link as={`/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`}
            href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}>
          <a>{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{__html: excerpt}} id="text" />
        <style jsx>{`
          img { 
            margin: auto;
            display: flex;
            justify-content: center;
            max-width: 99%;
          }

          a {
            text-decoration: none;
            color: black;
            font-size: 24px;
          }

          #text {
            font-size: 14px;
          }
          
        `}
        </style>
      </li>
    )
  }
}

export default Summary