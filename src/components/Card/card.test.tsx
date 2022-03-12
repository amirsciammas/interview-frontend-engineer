import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

test('card component renders correctly', () => {
  const component = renderer.create(<Card>Hello!</Card>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
