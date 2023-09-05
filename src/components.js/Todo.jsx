import React, { useState } from 'react'

const Todo = ({ item, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);

    // Componente
    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange}  />
                <button className='buttonUpdate' onClick={handleClickUpdateTodo} >Actualizar</button>
            </form>
        )
    }

    // Componente
    function TodoElement() {
        return (
            <div className='todoInfo'>
                <span className='todoTitle'> {item.title} </span>
                <button onClick={() => setIsEdit(true)} className='buttonUpdate'> Editar </button>
                <button onClick={(e) => onDelete(item.id)} className='buttonDelete'> Eliminar </button>
            </div>
        )
    }

  return (
    <div className='todo'> { isEdit ? <FormEdit /> : <TodoElement /> } </div>
  )
}

export default Todo