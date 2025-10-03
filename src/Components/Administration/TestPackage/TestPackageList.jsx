import React from 'react';
import ThemeButton from '../../../utils/ThemeButton'
import ComponentTitle from '../../../utils/ComponentTitle'
import TableHeading from '../../../utils/TableComponents/TableHeading'
import SearchInput from '../../../utils/TableComponents/SearchInput'
import EditButton from '../../../utils/TableComponents/EditButton'
import { useNavigate } from 'react-router-dom'



const TestPackageList = () => {


    const navigate = useNavigate()

    const testDepartmentList = [
        {
            packageName: 'A 2 PACKAGE',
            amount: '1500.00'
        },
        {
            packageName: 'A 4 MASTER HELTH CHECK UP',
            amount: '1500.00'
        },
        {
            packageName: 'A1 PACKAGE',
            amount: '1500.00'
        },
        {
            packageName: 'ANC PROFILE',
            amount: '1500.00'
        },
        {
            packageName: 'COVID 19 PROFILE BHARTHI',
            amount: '1500.00'
        },
        {
            packageName: 'COVID 19 PROFLIE CARE',
            amount: '1500.00'
        },
    ]


    const handleCreateTestPackage = () => {
        navigate('/administration/test-packages/create-test-packages')
    }

  return (
    <div className="main-test-creation-sec inner-view-section">
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Tests Package Management"}/>
            <div className="right-top-button-sec flex items-center gap-x-5">
                <ThemeButton type={'button'} text={'Add New Package'} onClick={handleCreateTestPackage} />
            </div>
        </div>

        <div className="main-table-section bg-white rounded-[20px] overflow-hidden">
            <div className="top-table-search-filter-header-sec flex items-center justify-between px-7 py-4">
                <TableHeading text={"Packages List"}/>
                <SearchInput placeHolder={'Search..'}/>
            </div>

            <div className="table-section-listing">
                <table cellPadding={10}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Package Name</th>
                            <th>Package Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testDepartmentList.map((item ,index) => {
                            return (
                                <tr>
                                    <td>0{index+1}</td>
                                    <td>{item.packageName}</td>
                                    <td>{item.amount}</td>
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

export default TestPackageList