import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist (isHeader=true)', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    });

    it('renders two cells when textSecondCell is present (isHeader=true)', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Second Header" />);
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('renders correctly two td elements within a tr element (isHeader=false)', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row" textSecondCell="Data" />);
        expect(wrapper.find('td')).toHaveLength(2);
    });
});
