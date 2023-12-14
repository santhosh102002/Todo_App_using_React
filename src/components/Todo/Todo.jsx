import { useState } from "react";
function Todo({editTodo,text,isFinished,deleteTodo}){
  const [isEditting, setIsEditting] = useState(false);
  const [todoText, setTodoText] = useState(text);
return(
    <div>
      <input type="checkbox" checked={isFinished}/>
      {isEditting? <input value ={todoText}onChange={(e)=>setTodoText(e.target.value)}/> : <span>{text}</span>}
      <button onClick={()=>{
      setIsEditting(!isEditting)
      editTodo(todoText)}}> {isEditting? 'Save':'Edit'}</button> 
      {/* // editTodo is coming from parent i.e TodoList */}
      <button onClick={deleteTodo}>Delete</button>
    </div>
)

}

export default Todo