import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Headline from '../components/front-page/Headline'
import LeftSideBar from '../components/front-page/LeftSideBar'
import RightSideBar from '../components/front-page/RightSideBar'

import Link from 'next/link'
import Head from 'next/head'

export default () => (
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
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Headline />
        </div>
        <div className="col-12 col-md-3 order-md-first">
          <LeftSideBar />
        </div>
        <div className="col-12 col-md-3 order-md-last">
          <RightSideBar />
        </div>
      </div>
    </div>
    <div id="footer"><Footer /></div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
  </div>
)