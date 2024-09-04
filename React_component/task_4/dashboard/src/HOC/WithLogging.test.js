import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

console.log = jest.fn();

describe('WithLogging HOC', () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it('logs on mount and unmount with the component name', () => {
    const Login = () => <div>Login Component</div>;
    Login.displayName = 'Login';
    const ComponentWithLogging = WithLogging(Login);
    const wrapper = shallow(<ComponentWithLogging />);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
