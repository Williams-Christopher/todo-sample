import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import TodoContext from '../TodoContext';
import TodoList from './TodoList';

// const testData = {
//     id: '123456789',
//     title: 'Test item',
//     note: 'This is a test note',
//     dateAdded: '2019-01-01T00:00:00Z',
//     dateDue: '2019-01-02T23:59:59Z'
// }

const div = document.createElement('div');

// const contextValue = {
//     todoList: testData,
// }

it('should render without crashing', () => {
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// it('should render a TodoList with a child TodoItem', () => {
//     const tree = renderer.create(
//         <TodoContext.Provider value={contextValue}>
//             <TodoList />
//         </TodoContext.Provider>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });