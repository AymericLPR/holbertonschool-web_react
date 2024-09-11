import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : isChecked ? '#e6e4e4' : '#f5f5f5ab',
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    return (
      <tr style={rowStyle}>
        {textSecondCell ? (
          <>
            <th className={css(styles.CourseListRow)}>{textFirstCell}</th>
            <th className={css(styles.CourseListRow)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(styles.CourseListRow_title)} colSpan="2">{textFirstCell}</th>
        )}
      </tr>
    );
  } else {
    return (
      <tr style={rowStyle}>
        <td>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

const styles = StyleSheet.create({
  CourseListRow_title: {
    borderBottom: '3px solid lightgray',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 'x-large',
    padding: '10px 0',
  },

  CourseListRow: {
    borderBottom: '3px solid lightgray',
    textAlign: 'start',
    fontWeight: 'bolder',
    fontSize: 'larger',
    padding: '5px 0',
  },
});

export default CourseListRow;
