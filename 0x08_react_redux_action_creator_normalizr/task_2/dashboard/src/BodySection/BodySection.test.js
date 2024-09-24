import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders title and children correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.exists()).toBeTruthy();
    const h2 = wrapper.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});
