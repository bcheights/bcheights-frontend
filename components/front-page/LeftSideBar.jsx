import LargeImage from '../thumbnail/LargeImage'
import NoImage from '../thumbnail/NoImage'

import { connect } from 'react-redux'

@connect(store => {
  const topStories = store.collections.topStory
  const featured = store.collections.featured
  return {
    featured,
    topStories
  }
})
class LeftSideBar extends React.Component {
  render() {
    const topStories = this.props.topStories ? this.props.topStories.slice(0,2) : []
    const featured = this.props.featured ? this.props.featured : []

    return (
      <div id="container">
        <div className="border-bottom border-dark" id="top-story">
          {topStories.map(article => (
            <div className="col-12" id="no-sum-large" key={article.slug}>
              <ul>
                <LargeImage article={article} withSummary={false} />
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
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          #top-story {
            padding-bottom: 5px;
            margin-bottom: 10px;
          }
        `}
        </style>
      </div>
    )
  }
}
export default LeftSideBar