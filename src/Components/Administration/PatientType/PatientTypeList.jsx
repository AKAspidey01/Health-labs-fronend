import React from 'react';
import ThemeButton from '../../../utils/ThemeButton';
import ComponentTitle from '../../../utils/ComponentTitle';
import TableHeading from '../../../utils/TableComponents/TableHeading';
import SearchInput from '../../../utils/TableComponents/SearchInput';
import EditButton from '../../../utils/TableComponents/EditButton';
import { useNavigate } from 'react-router-dom';
import './PatientType.scss'

const PatientTypeList = () => {


    const navigate = useNavigate()

    const doctorCategoryList = [
        {
            patientType: 'ORTHO',
            createdAt: '08 Jan 2016'
        },
        {
            patientType: 'UROLOGY',
            createdAt: '08 Jan 2021'
        },
        {
            patientType: 'SARGEN',
            createdAt: '08 Feb 2024'
        },
        {
            patientType: 'SELF',
            createdAt: '08 Mar 2020'
        },
        {
            patientType: 'THERAPIST',
            createdAt: '08 Jan 2016'
        },
        {
            patientType: 'PHSYCOLOGY',
            createdAt: '08 Jan 2016'
        },
    ]


    const handleCreateDoctorCate = () => {
        navigate('/administration/patient-types/create-patient-type')
    }

  return (
    <div className="patient-type-creation-sec inner-view-section">
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Patient Type Management"}/>
            <div className="right-top-button-sec flex items-center gap-x-5">
                <ThemeButton type={'button'} text={'Add New Patient Type'} onClick={handleCreateDoctorCate} />
            </div>
        </div>

        <div className="main-table-section bg-white rounded-[20px] overflow-hidden">
            <div className="top-table-search-filter-header-sec flex items-center justify-between px-7 py-4">
                <TableHeading text={"Patient Type List"}/>
                <SearchInput placeHolder={'Search..'}/>
            </div>

            <div className="table-section-listing">
                <table cellPadding={10}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Patient Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorCategoryList.map((item ,index) => {
                            return (
                                <tr>
                                    <td>0{index+1}</td>
                                    <td>{item.patientType}</td>
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

export default PatientTypeList