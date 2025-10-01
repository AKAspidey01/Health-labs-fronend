import React from 'react'
import './RefCustomer.scss';
import ThemeButton from '../../../utils/ThemeButton';
import ComponentTitle from '../../../utils/ComponentTitle';
import TableHeading from '../../../utils/TableComponents/TableHeading';
import SearchInput from '../../../utils/TableComponents/SearchInput';
import EditButton from '../../../utils/TableComponents/EditButton';
import { useNavigate } from 'react-router-dom';
import DownloadExcelBtn from '../../../utils/DownloadExcelBtn';
import PrintButton from '../../../utils/PrintBtn';


const RefCustomerList = () => {

     const navigate = useNavigate()
    
     const doctorList = [
        {
            docId: 'APTT',
            doctorName: 'Y.NAGESWARAO. MS.Ortho',
            emailId: 'mendaprasad1990@gmail.com',
            mobileNo: '9848745874',
            status: "Active"
        },
        {
            docId: 'APTT',
            doctorName: 'RAMESH KUMAR. M.S..ORTHO',
            emailId: 'mendaprasad1990@gmail.com',
            mobileNo: '9848745874',
            status: "inactive"
        },
        {
            docId: 'APTT',
            doctorName: 'V.R.N.B.PRASAD GARU',
            emailId: 'mendaprasad1990@gmail.com',
            mobileNo: '9848745874',
            status: "Active"
        },
        {
            docId: 'APTT',
            doctorName: 'Self',
            emailId: 'mendaprasad1990@gmail.com',
            mobileNo: '9848745874',
            status: "Active"
        },
        {
            docId: 'APTT',
            doctorName: 'CH.SHESHAGIRI RAO.,MD.CHEST',
            emailId: 'mendaprasad1990@gmail.com',
            mobileNo: '9848745874',
            status: "inactive"
        },
        {
            docId: 'APTT',
            doctorName: 'S.S.RAVI GARU',
            emailId: 'mendaprasad1990@gmail.com',
            mobileNo: '9848745874',
            status: "inactive"
        },
        
    ]


    const handleCreateRefCustomer = () => {
        navigate('/administration/ref-customers/create-ref-customer')
    }

  return (
    <div className="doctor-list-sec inner-view-section">
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Ref Customer Management "}/>
            <div className="right-top-button-sec flex items-center gap-x-5">
                <ThemeButton type={'button'} text={'Add New Customer'} onClick={handleCreateRefCustomer} />
                <DownloadExcelBtn />
                <PrintButton/>
            </div>
        </div>

        <div className="main-table-section bg-white rounded-[20px] overflow-hidden">
            <div className="top-table-search-filter-header-sec flex items-center justify-between px-7 py-4">
                <TableHeading text={"Ref Customer Overview"}/>
                <SearchInput placeHolder={'Search..'}/>
            </div>

            <div className="table-section-listing">
                <table cellPadding={10}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Ref Customer ID</th>
                            <th>Ref Customer Name</th>
                            <th>Email ID</th>
                            <th>Mobile No</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorList.map((item ,index) => {
                            return (
                                <tr>
                                    <td>0{index+1}</td>
                                    <td>{item.docId}</td>
                                    <td>{item.doctorName}</td>
                                    <td>{item.emailId}</td>
                                    <td>{item.mobileNo}</td>
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

export default RefCustomerList