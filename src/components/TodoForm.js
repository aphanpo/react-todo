import React, { useState } from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { add } = useTodos()
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    add(todo)
    setTodo("")
  }

  return (
    <div className="formList">
      <form onSubmit={handleSubmit}>
        <input
          id="form"
          type="text"
          placeholder="What needs to be done?"
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />

      </form>
    </div>
  )
}
