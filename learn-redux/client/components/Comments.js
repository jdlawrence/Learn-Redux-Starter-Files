import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props);

    // Get us the post
    const comments = this.props.comments[this.props.params.postId];
    console.log('comments', comments);

    return (
      <div className="comment">
        I am a comment
      </div>
    )
  }
}

export default Comments;