import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseList />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const wrapper = shallow(<CourseList />);


  it('renders without crashing', () => {
    expect(wrapper.exists());
  });

  it('renders rows', () => {
    const row = wrapper.find('CourseListRow');
    expect(row.at(0).prop('textFirstCell')).toEqual('Available courses');
    expect(row.at(0).prop('isHeader')).toEqual(true);
    expect(row.at(1).prop('textFirstCell')).toEqual('Course name');
    expect(row.at(1).prop('textSecondCell')).toEqual('Credit');
    expect(row.at(1).prop('isHeader')).toEqual(true);
  });
});
