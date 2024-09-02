import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseList isLoggedIn={true} />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders 5 different rows', () => {
        const wrapper = shallow(<CourseList isLoggedIn={true} />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});
