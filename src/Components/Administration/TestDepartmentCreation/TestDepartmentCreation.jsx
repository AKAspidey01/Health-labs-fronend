import React from 'react'
import ThemeButton from '../../../utils/ThemeButton'
import ComponentTitle from '../../../utils/ComponentTitle'
import TableHeading from '../../../utils/TableComponents/TableHeading'
import SearchInput from '../../../utils/TableComponents/SearchInput'
import EditButton from '../../../utils/TableComponents/EditButton'
import { useNavigate } from 'react-router-dom'

const TestDepartmentCreation = () => {

    const navigate = useNavigate()

    const testDepartmentList = [
        {
            depName: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY',
            createdAt: '08 Jan 2016'
        },
        {
            depName: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY',
            createdAt: '08 Jan 2021'
        },
        {
            depName: 'DEPARTMENT OF HAEMATOLOGY AND CLINICAL PATHOLOGY',
            createdAt: '08 Feb 2024'
        },
        {
            depName: 'DEPARTMENT OF ANATOMICAL PATHOLOGY AND CYTOLOGY',
            createdAt: '08 Mar 2020'
        },
        {
            depName: 'DEPARTMENT OF IMMUNOLOGY/SEROLOGY',
            createdAt: '08 Jan 2016'
        },
        {
            depName: 'DEPARTMENT OF MICROBIOLOGY',
            createdAt: '08 Jan 2016'
        },
    ]


    const handleCreateDepartment = () => {
        navigate('/administration/manage-test-department/create-department')
    }


  return (
    <div className="main-test-creation-sec inner-view-section">
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Test Department Management"}/>
            <div className="right-top-button-sec flex items-center gap-x-5">
                <ThemeButton type={'button'} text={'Add New Header Template'}/>
                <ThemeButton type={'button'} text={'Add New Department'} onClick={handleCreateDepartment} />
            </div>
        </div>

        <div className="main-table-section bg-white rounded-[20px] overflow-hidden">
            <div className="top-table-search-filter-header-sec flex items-center justify-between px-7 py-4">
                <TableHeading text={"Departments List"}/>
                <SearchInput placeHolder={'Search..'}/>
            </div>

            <div className="table-section-listing">
                <table cellPadding={10}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Department ID</th>
                            <th>Department Name</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testDepartmentList.map((item ,index) => {
                            return (
                                <tr>
                                    <td>0{index+1}</td>
                                    <td>0{index+1}</td>
                                    <td>{item.depName}</td>
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

export default TestDepartmentCreation