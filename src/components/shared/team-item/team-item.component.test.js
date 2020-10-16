import React from 'react'
import renderer from 'react-test-renderer';
import TeamItem from './team-item.component'

test('TeamItem renders correctly', () => {
    const tree = renderer
      .create(<TeamItem/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});