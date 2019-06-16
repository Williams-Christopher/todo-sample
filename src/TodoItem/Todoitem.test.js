import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TodoItem from './TodoItem';

const props = {
    id: '123456789',
    title: 'Test item',
    note: 'This is a test note',
    dateAdded: '2019-01-01T00:00:00Z',
    dateDue: '2019-01-02T23:59:59Z'
}

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render with content as expected', () => {
    const tree = renderer.create(<TodoItem id={props.id} title={props.title} note={props.note} dateAdded={props.dateAdded} dateDue={props.dateDue} />).toJSON();
    expect(tree).toMatchSnapshot();
})