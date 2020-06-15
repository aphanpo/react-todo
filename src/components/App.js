import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function App() {
  return (
    <Provider store={store}>
      <div className="form">
      <h1>To-Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
      
    </Provider>
  )
}

export default App
