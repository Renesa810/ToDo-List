import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title|| !desc){
            alert("Title or Desc cannot be empty!!");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

  return (
    <div className='container my-3'>
        <h3>
            Add A Todo
        </h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="todoName" className="form-label"> Your Todo </label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todoName" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label"> Description </label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-sm btn-success">Add</button>
        </form>

    </div>
  )
}
