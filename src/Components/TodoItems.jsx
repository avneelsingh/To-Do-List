import "../CSS/TodoItems.css"
import tick from "../Assets/tick.png"
import cross from "../Assets/cross.png"
import not_tick from "../Assets/not_tick.png"
const TodoItems = ({no,index,display,text,onDelete,onToggle,onDragStart,onDrop}) => {

  const isCompleted = display === "line-through";

  return (
    <div className="todoitems" draggable="true" onDragStart={(event) => onDragStart(event, index)} onDragOver={(event) => event.preventDefault()} onDrop={(event) => onDrop(event, index) }>
      
      <div className={`todoitems-container ${display}`} onClick={()=>{onToggle(no)}}>
        <img src={isCompleted ? tick : not_tick} alt={isCompleted ? "Completed" : "Not Completed"} />
        <div className="todoitems-text">{text}</div>
      </div>

      <img className="todoitems-cross-icon" onClick={()=>{onDelete(no)}} src={cross} alt="Delete" />
    </div>
  )
}

export default TodoItems;
