import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import TodoItem from './TodoItem';

const testProps = {
    id: '123456789',
    title: 'Test item',
    note: 'This is a test note',
    noteWithBreaks: 'This is a test note\nwith\nlinebreaks.',
    dateAdded: '2019-01-01T00:00:00Z',
    dateDue: '2019-01-02T23:59:59Z'
}

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render with content as expected', () => {
    const tree = renderer.create(<TodoItem id={testProps.id} title={testProps.title} dateAdded={testProps.dateAdded} dateDue={testProps.dateDue} note={testProps.note} />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('should render with content with linebreaksas expected', () => {
    const tree = renderer.create(<TodoItem id={testProps.id} title={testProps.title} dateAdded={testProps.dateAdded} dateDue={testProps.dateDue} note={testProps.noteWithBreaks} />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('should assert that the delete button was clicked', () => {
    const refFunction = jest.fn();
    const wrapper = shallow(<TodoItem {...testProps} deleteItem={refFunction} />);
    wrapper.find('button').simulate('click');
    expect(refFunction).toHaveBeenCalled();
})