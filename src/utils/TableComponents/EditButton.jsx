import React from 'react'

const EditButton = ({onClick}) => {
  return (
    <button type='button' className='flex items-center gap-x-2 text-blueColorLink hover:text-buttonBg'>
        <i class="bi bi-pencil-square"></i>
        Edit
    </button>
  )
}

export default EditButton