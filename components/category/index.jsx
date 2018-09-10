import LargeImage from "../thumbnail/LargeImage";

import { connect } from "react-redux";

@connect(store => {
  return { posts: store.collections.category };
})
export default class extends React.Component {
  render() {
    const headline = this.props.posts ? this.props.posts.slice(0, 1) : [];
    const posts = this.props.posts ? this.props.posts.slice(1) : [];
    const magazine = this.props.category === "Magazine" ? true : false;
    return (
      <div>
        <div id="content">
          <ul className="mx-auto" id="headline">
            {headline.map(headline => (
              <LargeImage
                key={headline.slug}
                article={headline}
                withSummary={true}
                isHeadline={true}
                border={true}
                magazine={magazine}
              />
            ))}
          </ul>
          <div className="row" id="mid-content">
            {posts.map(article => (
              <div
                className="col-12 col-md-4"
                id="no-sum-large"
                key={article.slug}
              >
                <ul>
                  <LargeImage
                    article={article}
                    withSummary={true}
                    border={true}
                    magazine={magazine}
                  />
                </ul>
              </div>
            ))}
            {posts.map(article => (
              <div
                className="col-12 col-md-4"
                id="no-sum-large"
                key={article.slug}
              >
                <ul>
                  <LargeImage
                    article={article}
                    withSummary={true}
                    border={true}
                  />
                </ul>
              </div>
            ))}
          </div>
        </div>
        <style jsx>
          {`
            #content {
              margin: 0;
              padding: 0;
            }
            #headline {
              max-width: 500px;
              margin: 0;
              padding: 0;
            }
            #mid-content {
              margin-right: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
