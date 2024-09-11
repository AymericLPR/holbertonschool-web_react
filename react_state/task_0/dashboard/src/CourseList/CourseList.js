import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

CourseList.defaultProps = {
    listCourses: [],
}

function CourseList({ isLoggedIn, listCourses }) {
    CourseList.propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        listCourses: PropTypes.arrayOf(CourseShape),
    };

    return (
        <table id="CourseList">
            <thead >
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses && listCourses.length > 0 ? (listCourses.map((course, index) => (
                    <CourseListRow
                    key={index}
                    textFirstCell={course.name}
                    textSecondCell={course.credit.toString()} />

                ))
                ) : (
                    < CourseListRow textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    );
};

export default CourseList;
