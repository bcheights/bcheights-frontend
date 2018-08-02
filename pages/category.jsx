import Header from "../components/header/Header";
import MainView from "../components/category";
import CategoryArchive from "../components/category/Archive";
import Footer from "../components/footer";

import { fetchCategory } from "../actions";
import { api } from "../services";

import Head from "next/head";
import { Component } from "react";
import { connect } from "react-redux";

@connect(
  null,
  { fetchCategory }
)
class Category extends Component {
  static getInitialProps({ store, isServer, req, query }) {
    const id = req ? req.params.id : query.id;
    // Capitalize the first letter of id
    const category = id.charAt(0).toUpperCase() + id.slice(1);
    return { category };
  }

  componentDidMount() {
    const id = api.getCategory(this.props.category);
    this.props.fetchCategory(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      const id = api.getCategory(this.props.category);
      this.props.fetchCategory(id);
    }
  }

  render() {
    const { category } = this.props;
    return (
      <div>
        <Head>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

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

          <title>{`${category} - The Heights`}</title>
        </Head>
        <Header />
        <div id="content">
          <div className="row" id="outer">
            <div className="col-12 col-md-8 offset-md-1 border-right" id="main">
              <h1>{category}</h1>
              <div className="row border-bottom">
                <MainView />
              </div>
              <h2>Paginated Archive</h2>
              <CategoryArchive />
            </div>
            <div className="col-12 col-md-3">
              <img id="ad" src="../static/placeholder.png" />
              <img id="ad" src="../static/placeholder.png" />
              <img id="ad" src="../static/placeholder.png" />
            </div>
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
        <style jsx>
          {`
            #ad {
              margin: 10px auto;
              width: 250px;
              height: 450px;
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

export default connect()(Category);
