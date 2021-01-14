import React from 'react'

export const Form = () => {

  return (
    <form className='mb-5'>
      <div className='form-group'>
        <input 
          type='text'
          className='form-control'
          placeholder='Новая заметка'
        />
        <input 
          type='text'
          className='form-control mt-3'
          placeholder='Пользователь'
        />
        <input type="submit" value="Добавить" className="btn btn-primary mt-3"/>
      </div>
    </form>
  )
} 