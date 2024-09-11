import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab'
  };

  if (isHeader) {
    return (
      <tr style={rowStyle}>
        {textSecondCell ? (
          <>
            <th className='CourseListRow'>{textFirstCell}</th>
            <th className='CourseListRow'>{textSecondCell}</th>
          </>
        ) : (
          <th className='CourseListRow_title' colSpan="2">{textFirstCell}</th>
        )}
      </tr>
    );
  } else {
    return (
      <tr style={rowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

export default CourseListRow;
