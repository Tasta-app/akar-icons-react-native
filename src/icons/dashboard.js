import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2z"></path>
      <path d="M14 3h6a2 2 0 0 1 2 2v5h-8z"></path>
      <path d="M14 14h8v5a2 2 0 0 1-2 2h-6z"></path>
    </svg>
  );
};

Dashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dashboard;
