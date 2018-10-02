import { connect } from "react-redux";
import { utils } from "../../services";
import FacebookProvider, { Comments } from "react-facebook";

@connect(store => {
  return {
    title: store.post.title,
    featured: store.post.featured,
    author: store.post.author,
    date: store.post.date,
    content: store.post.content
  };
})
class Article extends React.Component {
  render() {
    const { title, author, date, featured, content } = this.props;
    if (!content) {
      return null;
    }

    return (
      <div className="container">
        <div className="article">
          <div id="headline">
            <h2>{title}</h2>
            <div id="details">
              <p>{author} | {utils.getDate(date)}</p>
            </div>
            <img src={featured} className="img-responsive" />
          </div>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div id="comments">
          <FacebookProvider appId="552236551859735">
            <Comments href={document.URL} />
          </FacebookProvider>
        </div>
        <style jsx>
          {`
            .article {
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: center;
              max-width: 600px;
              margin: 0 auto;
              font-family: "Lato";
            }

            #headline {
              display: flex;
              align-self: flex-start;
              flex-flow: column wrap;
              margin: 0 auto;
              max-width: 600px;
            }

            #details {
              display: flex;
              flex-flow: row wrap;
            }

            #details p {
              font-family: Roboto, sans-serif;
              font-size: 0.8rem;
              padding: 0;
              margin: 0 5px 0 0;
            }

            img {
              max-width: 100%;
            }

            #comments {
              display: flex;
              justify-content: center;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Article;
