import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {

    CourseListRow.propTypes = {
        isHeader: PropTypes.bool,
        textFirstCell: PropTypes.string.isRequired,
        textSecondCell: PropTypes.string,
    }
    if (isHeader) {
        return (
            <tr>
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
            <tr >
                <td >{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
};

export default CourseListRow;
