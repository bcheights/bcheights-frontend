import { connect } from "react-redux";
import { utils } from "../../services";

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
      <div id="article">
        <div id="headline">
          <h2>{title}</h2>
          <div id="details">
            <p>{author}</p>
            <p>{utils.getDate(date)}</p>
          </div>
          <img src={featured} className="img-responsive" />
        </div>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />

        <style jsx>
          {`
            #article {
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: center;
              max-width: 600px;
              margin: 0 auto;
              font-family: "Times New Roman";
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
          `}
        </style>
      </div>
    );
  }
}

export default Article;
