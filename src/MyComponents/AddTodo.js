import React from 'react'

export const AddTodo = () => {
  return (
    <div className='container my-3'>
        <h3>
            Add A Todo
        </h3>
        <form>
            <div className="mb-3">
                <label for="todoName" className="form-label"> Your Todo </label>
                <input type="text" className="form-control" id="todoName" />
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label"> Description </label>
                <input type="text" className="form-control" id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Add</button>
        </form>

    </div>
  )
}
