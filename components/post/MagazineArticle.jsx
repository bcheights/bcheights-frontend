import React from "react";
import { connect } from "react-redux";
import Head from "next/head";

@connect(store => {
  return {
    title: store.post.title,
    featured: store.post.featured,
    author: store.post.author,
    date: store.post.date,
    content: store.post.content
  };
})
class MagazineArticle extends React.Component {
  render() {
    const { title, author, date, featured, content } = this.props;
    return (
      <div>
        <img src={featured} />
      </div>
    );
  }
}

export default connect()(MagazineArticle);
