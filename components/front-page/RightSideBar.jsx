import LargeImage from "../thumbnail/LargeImage";
import LeftSideImage from "../thumbnail/LeftSideImage";
import RightSideImage from "../thumbnail/RightSideImage";
import NoImage from "../thumbnail/NoImage";

import { connect } from "react-redux";

@connect(store => {
  return {
    featured: store.collections.featured,
    topStories: store.collections.topStory
  };
})
class RightSideBar extends React.Component {
  render() {
    const topStories = this.props.topStories
      ? this.props.topStories.slice(0, 2)
      : [];
    const featured = this.props.featured ? this.props.featured : [];

    return (
      <div id="content">
        <div className="border-bottom border-dark" id="top-story">
          {topStories.map(article => (
            <div className="col-12" id="no-sum-large" key={article.slug}>
              <ul>
                <LeftSideImage article={article} withSummary={false} />
              </ul>
            </div>
          ))}
        </div>
        <div className="border-top border-dark" id="no-image">
          {featured.map(article => (
            <div className="col-12" id="no-sum-large" key={article.slug}>
              <ul>
                <NoImage article={article} withSummary={false} />
              </ul>
            </div>
          ))}
        </div>
        <style jsx>
          {`
            #content {
              margin-left: 10px;
            }
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }
            #top-story {
              padding-left: 12px;
              padding-bottom: 5px;
              margin-bottom: 10px;
            }
            #no-image {
              margin-left: 0;
            }
            #no-sum-large {
              padding: 0;
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}
export default RightSideBar;
