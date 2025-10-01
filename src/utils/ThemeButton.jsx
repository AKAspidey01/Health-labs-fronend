import React from 'react'

const ThemeButton = ({onClick , text , type}) => {
  return (
    <button type={type} onClick={onClick} className='bg-buttonBg rounded-[8px] px-5 h-11 flex items-center justify-center font-semibold font-manrope duration-300 text-white hover:bg-primary hover:text-white'>
        {text}
    </button>
  )
}

export default ThemeButton