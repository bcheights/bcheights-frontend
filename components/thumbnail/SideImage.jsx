import Link from 'next/link'
import React from "react"


function shortenExcerpt(excerpt) {
  
}


class SideImage extends React.Component {
  render() {
    const { title, author, date, featured, slug } = this.props.article
    var d = new Date(date)

    // const excerpt = this.props.withSummary ? this.props.article.excerpt : null
    const excerpt = null


    console.log(excerpt)

    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Link as={`/post/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`}
                href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}>
              <a>{title}</a>
            </Link>
            <div dangerouslySetInnerHTML={{__html: excerpt}} id="text" />
          </div>
          <div className="col-4 my-auto" id="side-image">
            <Link as={`/post/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`}
                href={`/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`}>
              <img src={featured}></img>
            </Link>
            </div>
          </div>
        <style jsx>{`
          div {
            padding: 0;
            margin: 1em auto;
          }
          #side-image {
            margin: 0;
            padding: 0;
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

export default SideImage