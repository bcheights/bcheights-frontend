import Header from '../components/header/Header';
import Article from '../components/post/Article';
import RelatedArticles from '../components/post/RelatedArticles';

import Head from 'next/head';
import React from 'react';

const axios = require('axios');


class Post extends React.Component {

  static async getInitialProps({ req, query }) {
    const slug = req ? req.params.slug : query.slug;
    const url = 'http://18.219.114.43/wp-json/wp/v2/posts?slug=' + slug;

    const res = await axios.get(url);
    const data = await res.data[0];

    // Update URL Strings with post data
    const mediaURL =
      'http://18.219.114.43/wp-json/wp/v2/media/' + data.featured_media;
    const authorURL =
      'http://18.219.114.43/wp-json/wp/v2/users/' + data.author;

    // GET Featured Image 
    const mediaRes = await axios.get(mediaURL);
    const mediaData = await mediaRes.data;

    // GET Author name
    const authorRes = await axios.get(authorURL);
    const authorData = await authorRes.data;

    // Return props for component
    return {
      title: data.title.rendered,
      featured: mediaData.guid.rendered,
      author: authorData.name,
      date: data.modified,
      content: data.content.rendered
    };
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <title>{this.props.title}</title>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" /> 
        </Head>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <Article title={this.props.title}
                        author={this.props.author}
                      featured={this.props.featured}
                          date={this.props.date}
                       content={this.props.content} />
              </div>
              <div className="col-12 col-md-3">
                <RelatedArticles />
              </div>
            </div>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </div>
    );
  }
}

export default Post;