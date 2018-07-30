import LargeImage from "../thumbnail/LargeImage";

import { connect } from "react-redux";

@connect(store => {
  return { category: store.collections.category };
})
export default class extends React.Component {
  render() {
    const headline = this.props.category ? this.props.category.slice(0, 1) : [];
    const category = this.props.category ? this.props.category.slice(1) : [];
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
              />
            ))}
          </ul>
          <div className="row" id="mid-content">
            {category.map(article => (
              <div
                className="col-12 col-md-4"
                id="no-sum-large"
                key={article.slug}
              >
                <ul>
                  <LargeImage
                    article={article}
                    withSummary={false}
                    border={true}
                  />
                </ul>
              </div>
            ))}
            {category.map(article => (
              <div
                className="col-12 col-md-4"
                id="no-sum-large"
                key={article.slug}
              >
                <ul>
                  <LargeImage
                    article={article}
                    withSummary={false}
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
