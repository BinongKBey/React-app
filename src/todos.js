import React from 'react'


const todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(item=>{
            return (
                <div className="collection-item" key={item.id}>
                    <span onClick={()=>{deleteTodo(item.id)}}>{item.content}</span>
                </div>
            )
        })
    ): (
        <p className = "center">No Todo's</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default todos;