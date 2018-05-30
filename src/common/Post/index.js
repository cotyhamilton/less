import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post, author, uid }) => {
  return (
    <div className="post">
      <p><Link to={`${uid}`}>{author}</Link></p>
      <p className="h5">{post}</p>
    </div>
  );
}

export default Post;
