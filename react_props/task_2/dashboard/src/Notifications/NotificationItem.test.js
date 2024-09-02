import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correct HTML with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correct HTML with html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
