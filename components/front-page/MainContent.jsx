// import components
import Featured from '../thumbnail/Featured'
import MediumNoSummary from '../thumbnail/MediumNoSummary'

// import actions & 3rd party libraries
import { fetchFeatured } from "../../actions"
import { connect } from "react-redux"

// connect component to store
@connect(store => {
  var featured = []
  var otherArticles = []
  if (store.featuredArticle.featured.length > 1) {
    featured = store.featuredArticle.featured.slice(0, 1),
    otherArticles = store.featuredArticle.featured.slice(1,store.featuredArticle.featured.length) 
  }
  else {
    featured = store.featuredArticle.featured.slice(0, 1)
    otherArticles = []
  }
  return {
    featured: featured,
    otherArticles: otherArticles,
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
    const otherArticles = this.props.otherArticles ? this.props.otherArticles : []

    console.log(featured)

    return (
      <div className="container">
        <ul>
          {featured.map(featured => (
            <Featured key={featured.slug} article={featured} />
          ))}
          {/*
          {otherArticles.map(article => (
            <MediumNoSummary key={article.slug} article={article} />
          ))}
        */}
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