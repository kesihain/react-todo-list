import React,{useState} from 'react';

function TodoForm({todos,setTodos}){
    const [text, setText] = useState('')
    const [currentId,setCurrentId] = useState(todos[todos.length-1].id+1)
    const handleSubmit = e => {
        e.preventDefault();
        if (!e.target.newTask.value==''){
            setCurrentId(currentId+1);
            console.log(currentId);
            setTodos([
                ...todos,
                {id:currentId, task: e.target.newTask.value,done:false}
              ]);    
              setText('');

        }
    }

    const handleInput = e => {
        setText(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input id="newTask" onChange={handleInput} value={text} type="text" />
            <input type="submit" value="Add Task" />
        </form>
    )
}
export default TodoForm