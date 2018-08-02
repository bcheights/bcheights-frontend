// import components
import Header from "../components/header/Header";
import Footer from "../components/footer";
import LargeImage from "../components/thumbnail/LargeImage";
import RightSideImage from "../components/thumbnail/RightSideImage";

// import services/store
import makeStore from "../store";
import { fetchSearch } from "../actions";

// import 3rd party libraries
import Head from "next/head";
import { connect } from "react-redux";

@connect(
  store => {
    return {
      searchResults: store.collections.search
    };
  },
  { fetchSearch }
)
class Page extends React.Component {
  static getInitialProps({ store, isServer, req, query }) {
    const searchString = isServer
      ? req.params.searchString
      : query.searchString;
    return { searchString };
  }

  componentDidMount() {
    this.props.fetchSearch(this.props.searchString);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchString !== this.props.searchString) {
      this.props.fetchSearch(this.props.searchString);
    }
  }

  render() {
    const title = this.props.searchString
      ? `Search: ${this.props.searchString}`
      : "The Heights";
    const searchResults = this.props.searchResults
      ? this.props.searchResults
      : [];
    return (
      <div>
        <Head>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <title>{title}</title>

          {/* Bootstrap stylesheet link */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <h3 className="offset-md-2">
          Search results for: {this.props.searchString}
        </h3>
        <div className="container" id="content">
          {searchResults.map(article => (
            <div className="col-6 offset-md-2">
              <RightSideImage article={article} withSummary={true} />
            </div>
          ))}
        </div>
        <div id="footer">
          <Footer />
        </div>
        <style jsx>
          {`
            #content {
              padding: 0;
            }

            #footer {
              padding-top: 10px;
            }
          `}
        </style>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}

export default Page;
