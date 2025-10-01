import React from 'react'
import ThemeButton from '../../../utils/ThemeButton'
import ComponentTitle from '../../../utils/ComponentTitle'
import TableHeading from '../../../utils/TableComponents/TableHeading'
import SearchInput from '../../../utils/TableComponents/SearchInput'
import EditButton from '../../../utils/TableComponents/EditButton'
import { useNavigate } from 'react-router-dom'
import DownloadExcelBtn from '../../../utils/DownloadExcelBtn'

const TestsListOverview = () => {

    const navigate = useNavigate()

    const testDepartmentList = [
        {
            testCode: 'APTT',
            testName: 'ACTIVATED PARTIAL THROMBOPLASTIN....',
            price: '400.00',
            depName: 'DEPARTMENT OF HAEMATOLOGY AND ....',
            status: "Active"
        },
        {
            testCode: 'APTT',
            testName: 'ACTIVATED PARTIAL THROMBOPLASTIN....',
            price: '400.00',
            depName: 'DEPARTMENT OF HAEMATOLOGY AND ....',
            status: "inactive"
        },
        {
            testCode: 'APTT',
            testName: 'ACTIVATED PARTIAL THROMBOPLASTIN....',
            price: '400.00',
            depName: 'DEPARTMENT OF HAEMATOLOGY AND ....',
            status: "Active"
        },
        {
            testCode: 'APTT',
            testName: 'ACTIVATED PARTIAL THROMBOPLASTIN....',
            price: '400.00',
            depName: 'DEPARTMENT OF HAEMATOLOGY AND ....',
            status: "Active"
        },
        {
            testCode: 'APTT',
            testName: 'ACTIVATED PARTIAL THROMBOPLASTIN....',
            price: '400.00',
            depName: 'DEPARTMENT OF HAEMATOLOGY AND ....',
            status: "inactive"
        },
        {
            testCode: 'APTT',
            testName: 'ACTIVATED PARTIAL THROMBOPLASTIN....',
            price: '400.00',
            depName: 'DEPARTMENT OF HAEMATOLOGY AND ....',
            status: "inactive"
        },
        
    ]


    const handleCreateDepartment = () => {
        navigate('/administration/tests-overview/create-test')
    }

  return (
   <div className="main-test-creation-sec inner-view-section">
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Test Management"}/>
            <div className="right-top-button-sec flex items-center gap-x-5">
                <ThemeButton type={'button'} text={'Add New Test'} onClick={handleCreateDepartment}/>
                <DownloadExcelBtn />
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
                            <th>Test Code</th>
                            <th>Test Name</th>
                            <th>Price</th>
                            <th>Department Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testDepartmentList.map((item ,index) => {
                            return (
                                <tr>
                                    <td>0{index+1}</td>
                                    <td>{item.testCode}</td>
                                    <td>{item.testName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.depName}</td>
                                    <td>{item.status == "Active" ?
                                            <p className='active-inactive-main-pill text-sm font-manrope px-4 py-1 rounded-full bg-themeGreen/10 text-themeGreen w-fit flex items-center gap-x-2 font-semibold'><span className='bg-themeGreen'></span> Active</p> : 
                                            <p className='active-inactive-main-pill text-sm font-manrope px-4 py-1 rounded-full bg-themeOrange/10 text-themeOrange w-fit flex items-center gap-x-2 font-semibold'><span className='bg-themeOrange'></span> In-Active</p>
                                        }
                                    </td>
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

export default TestsListOverview