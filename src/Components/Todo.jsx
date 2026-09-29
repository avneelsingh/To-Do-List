import { useState, useRef, useEffect } from 'react';
import '../CSS/Todo.css'
import TodoItems from './TodoItems';

const Todo = () => {

    const [todos, setTodos] = useState(() => {
        try {
            const savedTodos = localStorage.getItem("todos");
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch (error) {
            console.error('Failed to load todos:', error);
            return [];
        }
    });

    const inputRef = useRef(null);

    const count = useRef(Number(localStorage.getItem("todos_count")) || 0);

    // Add A New Item
    const addTodo = () => {
        const text = inputRef.current.value.trim();
        if (text === "") return;

        const newTodo = {no: count.current, text, display: ""};
        count.current++;

        setTodos(prevTodos => [...prevTodos,newTodo]);
        localStorage.setItem("todos_count",count.current);
        
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    // Delete todo
    const deleteTodo = (id) => {
        setTodos(prevTodo =>
            prevTodo.filter(todo => todo.no !== id)
        );
    };

    // Toggle todo completion
    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.no === id ? {...todo,display: todo.display === "" ? "line-through" : ""} : todo
            )
        );
    };

    // Start dragging
    const dragStart = (event, index) => {
        event.dataTransfer.setData("index",index);
    };

    // Drop todo
    const drop = (event, targetIndex) => {
        const draggedIndex = Number(event.dataTransfer.getData("index"));
        if (draggedIndex === targetIndex) return;

        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos];
            const [draggedTodo] = updatedTodos.splice(draggedIndex,1);
            updatedTodos.splice(targetIndex,0,draggedTodo);
            return updatedTodos;
        });
    };

    // Save todos whenever they change
    useEffect(() =>{
        try{
            localStorage.setItem("todos",JSON.stringify(todos));
        } catch (error) {
            console.error('Failed to save todos:', error);
        }
    },[todos]);  

  return (
    <div className='todo'>
        <div className="todo-header">
            To-Do-List
        </div>

        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add a task' className='todo-input'/>
            <button onClick={addTodo} className="todo-add-btn">ADD</button>
        </div>

        <div className="todo-list">
            {todos.map((item,index)=>{
                return <TodoItems key={item.no} no={item.no} index={index} display={item.display} text={item.text} onDelete={deleteTodo} onToggle={toggleTodo} onDragStart={dragStart} onDrop={drop}/> 
            })}
        </div>
      
    </div>
  )
}

export default Todo;
