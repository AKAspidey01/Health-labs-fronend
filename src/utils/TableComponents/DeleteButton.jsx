import React from 'react'

const DeleteButtton = ({onClick}) => {
  return (
    <button type='button' className='flex items-center gap-x-2 text-red-400 hover:text-buttonBg'>
        <i class="bi bi-trash"></i>
        Delete
    </button>
  )
}

export default DeleteButtton