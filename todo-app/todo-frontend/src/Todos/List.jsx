import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => {
        const doneInfo = (
          <>
            <span>This todo is done</span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
            </span>
          </>
        )

        const notDoneInfo = (
          <>
            <span>
              This todo is not done
            </span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
              <button onClick={onClickComplete(todo)}> Set as done </button>
            </span>
          </>
        )

        return (
          <div key={todo.id} style={{ maxWidth: '70%', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                {todo.text} 
              </span>
              {todo.done ? <Todo info={doneInfo} /> : <Todo info={notDoneInfo} />}
            </div>
            <hr /> {/* That reduce line does a horrible thing to the e2e test */}
          </div>
        )
      })}
    </>
  )
}

export default TodoList
