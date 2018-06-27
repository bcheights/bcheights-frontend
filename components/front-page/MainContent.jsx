// import components
import LargeImage from '../thumbnail/LargeImage'
import SideImage from '../thumbnail/SideImage'

// import actions & 3rd party libraries
import { fetchCollection } from "../../actions"
import { connect } from "react-redux"

// connect component to store
@connect(store => {
  let featured = store.collections.featured
  let topStories = store.collections.topStory

  return {
    featured,
    topStories,
  }
  
}, { fetchCollection })
class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Fetch Featured Collection
    this.props.fetchCollection(3)
  }

  render() {
    const featured = this.props.featured ? this.props.featured : []
    const topStories = this.props.topStories ? this.props.topStories : []

    return (
      <div className="container">
        {/* Featured Headline with LargeImage */}
        <ul>
          {featured.map(featured => (
            <LargeImage key={featured.slug} article={featured} withSummary={true} />
          ))}
        </ul>
        {/* Ad Placement */}
        <img id="ad" src="../../static/placeholder.png" className="mx-auto" />
        {/* List for Top Stories with LargeImage */}
        {/* Limited to two articles */}
        <div className="container" id="top-stories-large">
          <div className="row">
            {topStories.map(article => (
              <div className="col-12 col-md-6" id="no-sum-large" key={article.slug}>
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
          {topStories.map(article => (
            <div className="row"  key={article.slug}>
              <ul>
                <SideImage article={article} withSummary={true} />
              </ul>
            </div>
          ))}   
        </div>
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          #ad {
            align-item: center;
            width: 100%;
            max-width: 100%;
            height: 8em;
            margin: 1em;
            padding: 0;
          }
          #top-stories-large{
            margin: 2em auto;
            padding: 0.4em;
          }
          #no-sum-large {
            padding: 0;
            margin: 0;
          }
          #side-image-stories {
            margin: 1em auto;
            padding: 0.4em;
          }
        `}
        </style>
      </div>
    )
  }
}

export default MainContent