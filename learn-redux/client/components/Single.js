import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Index of the post
    const i = this.props.posts.findIndex((post) => {
      return post.code === this.props.params.postId;
    });
    
    // Get us the post
    const post = this.props.posts[i];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}></Photo>
        <Comments {...this.props}></Comments>
      </div>
    )
  }
}

export default Single;