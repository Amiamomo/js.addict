//http://blog.ricardofilipe.com/post/react-enzyme-tdd-tutorial

import React from 'react';
import Comment from '../src/components/Comment';

describe('a passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});

describe('Comment item', () => {
  const wrapper = shallow(<Comment />);

  it('should be a list item', () => {
    console.log("mouhahaha :"+wrapper.type());
    expect(wrapper.type()).to.eql('li');
  });
  it('renders the custom comment text', () => {
    wrapper.setProps({ comment: 'sympathetic ink' });
    expect(wrapper.contains('sympathetic ink')).to.equal(true);
  });

});

