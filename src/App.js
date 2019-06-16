import React from 'react';

import td from './TestData';
import TodoContext from './TodoContext';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    }
  }

  componentDidMount() {
    // get the TestDat into state
    this.setState({
      todoList: td,
    });
  }

  render() {
    // place state into context
    const contextValue = {
      todoList: this.state.todoList,
    }

    return (
      <div className='App'>
        <TodoContext.Provider value={contextValue}>
          <Header />
          <TodoList />
        </TodoContext.Provider>
      </div>
    )
  }
}

export default App;
