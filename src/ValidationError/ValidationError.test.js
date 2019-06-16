import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ValidationError from './ValidationError';

const testMessages = {
    testkey1: 'Message 1',
    testkey2: 'Message 2'
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders with props', () => {
    const tree = renderer.create(<ValidationError errorMessages={testMessages} />).toJSON();
    expect(tree).toMatchSnapshot();
})