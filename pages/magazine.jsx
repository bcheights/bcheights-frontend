// import components
import Header from '../components/header/Header'
import MagazineArticle from '../components/post/MagazineArticle'
import LargeImage from '../components/thumbnail/LargeImage'
import RelatedArticles from '../components/post/RelatedArticles'
import Footer from "../components/footer"

// import services & actions
import { fetchPost, fetchCollection } from "../actions"

// import 3rd party libraries
import Head from 'next/head'
import { connect } from "react-redux"


@connect(store => {
  const topStories = store.collections.topStory
  return {
    title: store.post.content.title,
    topStories,
  }
}, { fetchPost, fetchCollection })
class Magazine extends React.Component {
  static async getInitialProps({ store, isServer, req, query }) {
    const slug = isServer ? req.params.slug : query.slug
    return {slug}
  }

  componentDidMount() {
    this.props.fetchPost(this.props.slug)
    this.props.fetchCollection(6)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.props.fetchPost(this.props.slug)
    }
  }

  render() {
    const title = this.props.title ? this.props.title : "The Heights"
    const relatedArticles = this.props.topStories ? this.props.topStories : []

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <title>{title}</title>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" /> 
        </Head>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-1">
                <MagazineArticle />
              </div>
            </div>
            <h2>Related Articles</h2>
            <div className="row">
              {relatedArticles.map(article => (
                <div className="col-3" id="no-sum-large" key={article.slug}>
                  <LargeImage article={article} withSummary={false} />
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
        `}
        </style>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </div>
    )
  }
}


export default connect()(Magazine)