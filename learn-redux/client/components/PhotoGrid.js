import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map( (post, i) => {
          return <Photo {...this.props} key={i} i={i} post={post} />
        })}
      </div>
    )
  }
}

export default PhotoGrid;