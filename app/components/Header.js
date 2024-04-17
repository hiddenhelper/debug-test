import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Logo from '../img/logo.svg';
import './css/_Header.css';

const Header = () => {
  const { posts } = useSelector(state => state.posts);

  // Compute total votes by summing up the votes of all displayed posts
  const totalVotes = posts.reduce((total, post) => total + post.votes, 0);

  return (
    <div className="header">
      {/* eslint-disable-next-line */}
      <img src={Logo} alt="Canny" className="logo" />
      <div className="spacer" />
      <div>Total Votes: {totalVotes}</div>
    </div>
  );
};

Header.propTypes = {
  votes: PropTypes.number,
};

export default Header;
