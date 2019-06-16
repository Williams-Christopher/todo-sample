import React from 'react';

import td from './TestData';

import './App.css';
import TodoContext from './TodoContext';

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
      <TodoContext.Provider value={contextValue}>
        <p>Placeholder</p>
      </TodoContext.Provider>
    )
  }
}

export default App;
