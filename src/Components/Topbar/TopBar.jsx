import React, { useEffect, useState } from 'react';
import './TopBar.scss';
import ProfileIcon from '../../assets/images/sidemenu-icon/user-icn.svg'
import { useLocation } from 'react-router-dom';


const TopBar = () => {

    const location = useLocation();

    // console.log(location.pathname.split('/'))


  return (
    <div className='top-bar-main'>
        <div className="inner-topbar-section flex items-center justify-between">
            <h2 className='text-black font-plusjakarta font-semibold text-xl capitalize'>{location.pathname.split('/')[1] == "" ? 'Dashboard' : location.pathname.split('/')[1]}</h2>
            <div className="right-profile-section">
                <button type="button" className='flex justify-between items-center gap-x-6 text-left'>
                    <div className="left-image-details-sec flex items-center gap-3">
                        <div className="left-prof-icon">
                            <img src={ProfileIcon} className='w-10 h-10 rounded-lg' alt="" />
                        </div>
                        <div className="name-role-sec">
                            <h4 className='text-sm font-plusjakarta font-bold text-darkBlue'>Prasad Kumar</h4>
                            <p className='text-sm font-manrope font-normal text-[#92939B]'>Super Admin</p>
                        </div>
                    </div>
                    <div className="right-drop-icon">
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopBar