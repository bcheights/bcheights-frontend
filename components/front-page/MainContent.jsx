// import components
import LargeImage from "../thumbnail/LargeImage";
import RightSideImage from "../thumbnail/RightSideImage";

// import actions & 3rd party libraries
import { fetchCollection } from "../../actions";
import { connect } from "react-redux";

// connect component to store
@connect(
  store => {
    let featured = store.collections.featured;
    let topStories = store.collections.topStory;

    return {
      featured,
      topStories
    };
  },
  { fetchCollection }
)
class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const featured = this.props.featured ? this.props.featured.slice(1) : [];
    const headline = this.props.featured ? this.props.featured.slice(0, 1) : [];
    const topStories = this.props.topStories
      ? this.props.topStories.slice(0, 2)
      : [];

    return (
      <div className="container">
        {/* Featured Headline with LargeImage */}
        <ul>
          {headline.map(headline => (
            <LargeImage
              key={headline.slug}
              article={headline}
              withSummary={true}
              isHeadline={true}
            />
          ))}
        </ul>
        {/* Ad Placement */}
        <img id="ad" src="../../static/placeholder.png" className="mx-auto" />
        {/* List for Top Stories with LargeImage */}
        {/* Limited to two articles */}
        <div className="container" id="top-stories-large">
          <div className="row">
            {topStories.map(article => (
              <div
                className="col-12 col-md-6"
                id="no-sum-large"
                key={article.slug}
              >
                <ul>
                  <LargeImage article={article} withSummary={false} />
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Ad Placement */}
        <img id="ad" src="../../static/placeholder.png" className="mx-auto" />
        {/* List for Featured Stories with SideImage */}
        <div className="container" id="side-image-stories">
          {featured.map(article => (
            <div className="row" key={article.slug}>
              <ul>
                <RightSideImage article={article} withSummary={true} />
              </ul>
            </div>
          ))}
        </div>
        <style jsx>
          {`
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }
            #ad {
              align-item: center;
              width: 100%;
              max-width: 100%;
              height: 8rem;
            }
            #top-stories-large {
              margin: 1rem auto;
            }
            #no-sum-large {
              padding: 0;
              margin: 0;
            }
            #side-image-stories {
              margin: 1rem auto;
              padding: 0.4rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MainContent;
