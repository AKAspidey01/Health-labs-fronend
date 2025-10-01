import React from 'react';
import ThemeButton from '../../../utils/ThemeButton';
import ComponentTitle from '../../../utils/ComponentTitle';
import TableHeading from '../../../utils/TableComponents/TableHeading';
import SearchInput from '../../../utils/TableComponents/SearchInput';
import EditButton from '../../../utils/TableComponents/EditButton';
import { useNavigate } from 'react-router-dom';
import './DoctorCategory.scss'


const DoctorCategoryList = () => {

    const navigate = useNavigate()

    const doctorCategoryList = [
        {
            cateName: 'ORTHO',
            createdAt: '08 Jan 2016'
        },
        {
            cateName: 'UROLOGY',
            createdAt: '08 Jan 2021'
        },
        {
            cateName: 'SARGEN',
            createdAt: '08 Feb 2024'
        },
        {
            cateName: 'SELF',
            createdAt: '08 Mar 2020'
        },
        {
            cateName: 'THERAPIST',
            createdAt: '08 Jan 2016'
        },
        {
            cateName: 'PHSYCOLOGY',
            createdAt: '08 Jan 2016'
        },
    ]


    const handleCreateDoctorCate = () => {
        navigate('/administration/doctor-categories/create-doctor-category')
    }

  return (
    <div className="doctor-category-creation-sec inner-view-section">
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Doctor Category Management"}/>
            <div className="right-top-button-sec flex items-center gap-x-5">
                <ThemeButton type={'button'} text={'Add New Category'} onClick={handleCreateDoctorCate} />
            </div>
        </div>

        <div className="main-table-section bg-white rounded-[20px] overflow-hidden">
            <div className="top-table-search-filter-header-sec flex items-center justify-between px-7 py-4">
                <TableHeading text={"Doctor Category List"}/>
                <SearchInput placeHolder={'Search..'}/>
            </div>

            <div className="table-section-listing">
                <table cellPadding={10}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Category ID</th>
                            <th>Category Name</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorCategoryList.map((item ,index) => {
                            return (
                                <tr>
                                    <td>0{index+1}</td>
                                    <td>0{index+1}</td>
                                    <td>{item.cateName}</td>
                                    <td>{item.createdAt}</td>
                                    <td><EditButton/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DoctorCategoryList