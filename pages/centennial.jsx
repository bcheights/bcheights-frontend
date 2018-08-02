import React from "react";
import { connect } from "react-redux";
import Head from "next/head";

import Header from "../components/header/Header";
import Footer from "../components/footer";

class Centennial extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <title>BC Heights - Centennial</title>

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
        </Head>
        <div>
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(Centennial);
