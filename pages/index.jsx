// import components
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import MainContent from '../components/front-page/MainContent'
import LeftSideBar from '../components/front-page/LeftSideBar'
import RightSideBar from '../components/front-page/RightSideBar'

// import services/store
import makeStore from "../store"

// import 3rd party libraries
import Head from 'next/head'
import withRedux from "next-redux-wrapper"


class Page extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { isServer }
  }
  render() {
    return (
      <div>
        <Head>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <title>The Heights</title>

          {/* Bootstrap stylesheet link */}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        </Head>
        <Header />
        <div className="container" id="content">
          <div className="row">
            <div className="col-12 col-md-6 border-right border-left border-dark" id="center">
              <MainContent />
            </div>
            <div className="col-12 col-md-3 order-md-first" id="left">
              <LeftSideBar />
            </div>
            <div className="col-12 col-md-3 order-md-last" id="right">
              <RightSideBar />
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          #content {
            padding: 0;
          }
          #center {
            padding: 0;          
          }
          #left {
            padding: 0;
          }
          #right {
            padding: 0.15em;        
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

Page = withRedux(makeStore)(Page)

export default Page