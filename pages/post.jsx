// import components
import Header from '../components/header/Header'
import Article from '../components/post/Article'
import RelatedArticles from '../components/post/RelatedArticles'
import Footer from "../components/footer/Footer"

// import services & actions
import makeStore from "../store"
import { fetchPost } from "../actions"

// import 3rd party libraries
import Head from 'next/head'
import withRedux from "next-redux-wrapper"
import { connect } from "react-redux"


@connect(store => {
  return {title: store.post.content.title}
})
class Post extends React.Component {
  static async getInitialProps({ store, isServer, req, query }) {
    const slug = isServer ? req.params.slug : query.slug
    return {slug}
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.slug))
  }

  render() {
    const title = this.props.title ? this.props.title : "The Heights"
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
                <Article />
              </div>
              <div className="col-12 col-md-3">
                <RelatedArticles />
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </div>
    )
  }
}


Post = withRedux(makeStore, state => state)(Post)

export default Post