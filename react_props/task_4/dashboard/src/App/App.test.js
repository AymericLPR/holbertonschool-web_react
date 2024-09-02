import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
  it('does not display CourseList when logged out', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  describe('when isLoggedIn is true', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    });

    it('does not include Login component', () => {
      expect(wrapper.find(Login).exists()).toBeFalsy();
    });

    it('includes CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBeTruthy();
    });
  });
});
