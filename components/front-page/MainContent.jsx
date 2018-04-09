// import components
import LargeThumbnail from '../thumbnail/LargeThumbnail'

// import actions & 3rd party libraries
import { fetchFeatured } from "../../actions"
import { connect } from "react-redux"

// connect component to store
@connect(store => {
  return {articles: store.featuredArticle.featured}
}, { fetchFeatured })
class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFeatured()
  }

  render() {
    const articles = this.props.articles ? this.props.articles : []

    return (
      <div className="container">
        <ul>
        {articles.map(article => (
          <LargeThumbnail key={article.slug} article={article} />
        ))}
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
          }
        `}
        </style>
      </div>
    )
  }
}

export default MainContent