import LeftSideImage from "../thumbnail/LeftSideImage";

import { connect } from "react-redux";
import React from "react";

@connect(store => {
  return { posts: store.collections.category };
})
class CategoryArchive extends React.Component {
  render() {
    const posts = this.props.posts ? this.props.posts : [];
    return (
      <div>
        {posts.map(post => (
          <LeftSideImage
            article={post}
            key={post.slug}
            withSummary={true}
            border={true}
            isHeadline={true}
            isCategory={true}
          />
        ))}
        <style jsx>
          {`
            div {
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CategoryArchive;
