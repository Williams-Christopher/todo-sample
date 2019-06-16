import React from 'react';

const TodoContext = React.createContext ({
    todoList: [],
    deleteItem: () => {},
});

export default TodoContext;
