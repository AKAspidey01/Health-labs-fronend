import React from 'react';
import SearchIcon from '../../assets/images/dashboard-images/search-icon.svg';


const SearchInput = ({onChange , placeHolder}) => {
  return (
    <div className='search-input-sec bg-[#F0F8FF] rounded-lg relative min-w-80 overflow-hidden h-11'>
        <input type="text" onChange={onChange} placeholder={placeHolder} className='h-full w-full font-medium  text-Black opacity-80 pl-10 pr-5' />
        <div className="abs-search-icon absolute top-1/2 left-3">
            <img src={SearchIcon} alt="" />
        </div>
    </div>
  )
}

export default SearchInput