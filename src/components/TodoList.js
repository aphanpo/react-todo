import React from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { todos, remove, toggle } = useTodos()

  return (
    <div className="main">
      <ul className="container">
        {todos.map(todo => (
          <li id="list"
            className={todo.completed ? "completed" : "checked"}
            key={"todo" + todo.id}
            onClick={e => toggle(todo.id)}
          > 
            {todo.title}
            <button onClick={e => remove(todo.id)}>x</button>
           
          </li>
        ))}
        <p>Items Count: {todos.length}</p>
      </ul>
    </div>
  )
}
