import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  describe('With CourseList Empty', () => {
    it('renders correctly when listCourses is an empty array', () => {
      const { getByText } = render(<CourseList listCourses={[]} />);
      expect(getByText('No course available yet')).toBeInTheDocument();
    });

    it('renders correctly when listCourses property is not passed', () => {
      const { getByText } = render(<CourseList />);
      expect(getByText('No course available yet')).toBeInTheDocument();
    });
  });

  describe('With CourseList containing elements', () => {
    const listCourses = [
      { id: 1, name: 'Math', credit: 3 },
      { id: 2, name: 'Science', credit: 4 },
    ];

    it('renders the list of courses correctly', () => {
      const { getByText } = render(<CourseList listCourses={listCourses} />);
      listCourses.forEach(course => {
        expect(getByText(course.name)).toBeInTheDocument();
        expect(getByText(course.credit.toString())).toBeInTheDocument();
      });
    });
  });
});
