import React, { useEffect, useRef, useState } from 'react';
import './SideBar.scss';
import Logo from '../../assets/images/logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';


// Active Icons;
import DashBoardIconActive from '../../assets/images/sidemenu-icon/dashboard-active.svg';
import AdminIconActive from '../../assets/images/sidemenu-icon/administration-active.svg';
import PatientIconActive from '../../assets/images/sidemenu-icon/patient-creation-active.svg';
import ReortIconActive from '../../assets/images/sidemenu-icon/reports-active.svg';
import UserManageIconActive from '../../assets/images/sidemenu-icon/user-manage-active.svg';
import OtherIconActive from '../../assets/images/sidemenu-icon/others-active.svg';


// In Active Icons;
import DashBoardIcon from '../../assets/images/sidemenu-icon/dashboard.svg';
import AdminIcon from '../../assets/images/sidemenu-icon/administration.svg';
import PatientIcon from '../../assets/images/sidemenu-icon/patient-creation.svg';
import ReortIcon from '../../assets/images/sidemenu-icon/reports.svg';
import UserManageIcon from '../../assets/images/sidemenu-icon/user-manage.svg';
import OtherIcon from '../../assets/images/sidemenu-icon/others.svg';





const SideBar = () => {

  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const handleToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };


  const sideMenu = [
    {
      iconActive: DashBoardIconActive,
      icon: DashBoardIcon,
      name: 'Dashboard',
      link: '/',
      isSubMenu: false
    },
    {
      iconActive: AdminIconActive,
      icon: AdminIcon,
      name: 'Administration',
      isSubMenu: true,
      link: '/administration',
      subMenu : [
        {
          singleItem: 'Test Department Creation',
          link: '/administration/manage-test-department',
        },
        {
          singleItem: 'Test Creation',
          link: '/administration/tests-overview',
        },
        {
          singleItem: 'Doctor Category Creation',
          link: '/administration/doctor-categories',
        },
        {
          singleItem: 'Doctor Creation',
          link: '/administration/doctor-list',
        },
        {
          singleItem: 'Price List Creation',
          link: '/administration/price-list-creation',
        },
        {
          singleItem: 'Ref Customers',
          link: '/administration/ref-customers',
        },
        {
          singleItem: 'Referral Rates',
          link: '/administration/ref-rates',
        },
        {
          singleItem: 'Test Package Creation',
          link: '/administration/test-packages',
        },
        {
          singleItem: 'Patient Types',
          link: '/administration/patient-types',
        },
      ]
    },
    {
      iconActive: PatientIconActive,
      icon: PatientIcon,
      name: 'Manage Patient',
      isSubMenu: true,
      link: '/patientManagement',
      subMenu : [
        {
          singleItem: 'Patient Management',
          link: '/patientManagement/create-patient',
        },
        {
          singleItem: 'Sample Received',
          link: '/patientManagement/tests-overview',
        },
        {
          singleItem: 'Test Results Entry',
          link: '/patientManagement/doctor-categories',
        },
        {
          singleItem: 'Test Authorization',
          link: '/patientManagement/doctor-list',
        },
        {
          singleItem: 'Patient Search',
          link: '/patientManagement/price-list-creation',
        },
        {
          singleItem: 'Patient Status',
          link: '/patientManagement/ref-customers',
        },
        {
          singleItem: 'Patient Due Payment',
          link: '/patientManagement/ref-rates',
        },
        {
          singleItem: 'Patient Deletion',
          link: '/patientManagement/test-packages',
        },
        {
          singleItem: 'Inpatient Details',
          link: '/patientManagement/patient-types',
        },
        {
          singleItem: 'Test Results print',
          link: '/patientManagement/ref-rates',
        },
        {
          singleItem: 'Patient Tests Cancellation',
          link: '/patientManagement/test-packages',
        },
        {
          singleItem: 'Patient Payment Edit',
          link: '/patientManagement/patient-types',
        },
      ]
    },
  ]

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    sideMenu.forEach((menu, index) => {
      if (contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight =
          openIndex === index
            ? `${contentRefs.current[index].scrollHeight}px`
            : "0px";
      }
    });
  }, [openIndex, sideMenu]);


  return (
    <div className="SideBar">
      <div className="inner-sidebar-section">
          <div className="top-logo-part mb-10">
            <img src={Logo} className='w-full' alt="" />
          </div>
          <div className="side-navigation-section">
            <nav>
              <ul className="parent-nav-list flex-col flex gap-y-5">
                {sideMenu.map((item , index) => {
                  const isActive =  location.pathname === item.link || (item.subMenu && item.subMenu.some((sub) => location.pathname === sub.link));
                  return (
                    <li className="parent-nav-item" key={index}>
                      {item.isSubMenu ? 
                      <div className=''> 
                        <button className={`px-5 py-3 w-full rounded-xl flex items-center justify-between ${isActive ? 'active' : ''}`} onClick={() => item.isSubMenu && toggleMenu(index)}>
                          <div className="main-icon-text-sec flex items-center gap-x-4">
                            <div className="left-icon w-5 h-5 relative">
                              <img src={item.icon} className='absolute top-0 left-0 w-full h-full inactive-icon' alt="" />
                              <img src={item.iconActive} className='absolute top-0 left-0 w-full h-full active-icon' alt="" />
                            </div>
                            <div className="right-text">
                              <p className='text-inactivegray font-manrope font-semibold'>{item.name}</p>
                            </div>
                          </div>
                          <div className="arrow-icon">
                            <i class="bi bi-chevron-down"></i>
                          </div>
                        </button>
                        <div className="submenu-section overflow-hidden duration-300"  ref={(el) => (contentRefs.current[index] = el)} >
                          <ul className=''>
                              {item.subMenu.map((sub, subIdx) => (
                                <li key={subIdx}>
                                  <NavLink to={sub.link}>{sub.singleItem}</NavLink>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      :
                      <NavLink className={'px-5 py-3 inline-block w-full rounded-xl'} to={item.link} end>
                        <div className="main-icon-text-sec flex items-center gap-x-4">
                          <div className="left-icon w-5 h-5 relative">
                            <img src={item.icon} className='absolute top-0 left-0 w-full h-full inactive-icon' alt="" />
                            <img src={item.iconActive} className='absolute top-0 left-0 w-full h-full active-icon' alt="" />
                          </div>
                          <div className="right-text">
                            <p className='text-inactivegray font-manrope font-semibold'>{item.name}</p>
                          </div>
                        </div>                        
                      </NavLink>
                      }
                    </li>
                  ) 
                })}
              </ul>
            </nav>
          </div>
      </div>
    </div>
  );
}

export default SideBar;
