import React from 'react'
import ExcelImg from '../assets/images/dashboard-images/excel-icon.svg';


const DownloadExcelBtn = ({onClick}) => {
  return (
    <button type='button' onClick={onClick} className='bg-white rounded-[8px] px-5 h-11 gap-x-2 flex items-center justify-center border border-lightBorder font-semibold font-manrope duration-300 text-buttonBg'>
        <img src={ExcelImg} className='w-6 h-6' alt="" />
        Download
    </button>
  )
}

export default DownloadExcelBtn