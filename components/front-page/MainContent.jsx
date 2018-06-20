// import components
import LargeImage from '../thumbnail/LargeImage'
import SideImage from '../thumbnail/SideImage'

// import actions & 3rd party libraries
import { fetchFeatured } from "../../actions"
import { connect } from "react-redux"

// connect component to store
@connect(store => {
  var featured = []
  var topStories = []
  if (store.featuredArticle.featured.length > 1) {
    featured = store.featuredArticle.featured.slice(0, 1)

    const numArticles = 
      store.featuredArticle.featured.length > 6
        ? 6
        : store.featuredArticle.featured.length
    // Update w/ actual slice when articles are put in
    topStories = store.featuredArticle.featured.slice(0, numArticles) 
  }
  else {
    featured = store.featuredArticle.featured.slice(0, 1)
    topStories = []
  }
  return {
    featured: featured,
    topStories: topStories,
  }
  
}, { fetchFeatured })
class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFeatured()
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
        {/* List for Top Stories with LargeImage */}
        {/* Limited to two articles */}
        <div className="container" id="top-stories-large">
          <div className="row">
            {topStories.map(article => (
              <div className="col-12 col-md-6" id="no-sum-large">
                <ul>
                  <LargeImage key={article.slug} article={article} withSummary={false} />
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* List for Featured Stories with SideImage */}
        <div className="container" id="side-image-stories">
          {topStories.map(article => (
            <div className="row">
              <ul>
                <SideImage key={article.slug} article={article} withSummary={true} />
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
          #top-stories-large{
            margin-top: 2em;
          }
          #no-sum-large {
            padding: 0;
            margin: 0;
          }
          #side-image-stories {
            margin-top: 1em;
          }
        `}
        </style>
      </div>
    )
  }
}

export default MainContent