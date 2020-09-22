import React from 'react';
import {ListGroupItem,Button} from 'reactstrap'
function TodoItem({props,todos,setTodos}){
    const handleDelete = ()=>{
        const newList = todos.filter((item) => item.id !== props.id);
        setTodos(newList)
    }
    return (
        <div className= "col-sm-6 align-self-center">
            <ListGroupItem >{props.task} <Button close onClick={handleDelete} /></ListGroupItem>
           
        </div>
    )
}

export default TodoItem