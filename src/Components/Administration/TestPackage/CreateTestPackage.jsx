import React, { useState } from 'react'
import ComponentTitle from '../../../utils/ComponentTitle'
import { Form, Formik , Field } from 'formik'
import Label from '../../../utils/FormComponents/Label'
import { testPackageCreationCalidation } from '../../../utils/Validation'
import ThemeButton from '../../../utils/ThemeButton'
import Modal from "react-modal";
import LoaderDna from '../../../utils/LoaderDna'
import modalStyles from '../../../utils/ModalStyles'
import Select from 'react-select'
import EditButton from '../../../utils/TableComponents/EditButton'
import DeleteButtton from '../../../utils/TableComponents/DeleteButton'


const CreateTestPackage = () => {

    const [loader , setLoader] = useState(false)
    
    const baseValues = {
        packageName: '',
        totalAmount: '',
        testName: '',
        testCode: '',
    }


    const handleCreateTestPackage = (values) => {
        console.log(values)

        setLoader(true)

        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }

    const departOptions = [
        { value: 'DEPARTMENT OF HAEMATOLOGY', label: 'DEPARTMENT OF HAEMATOLOGY' },
        { value: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY', label: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY' },
        { value: 'DEPARTMENT OF CLINICAL', label: 'DEPARTMENT OF CLINICAL' },
        { value: 'OTHERS', label: 'OTHERS' }
    ]

    const testDepartmentList = [
        {
            testName: 'ANTI SARS-CoV-2 (COVID-19) ANTIBODY',
            testCode:'COA19',
            price: '2500',
            specialPrice: '2500',
        },
        {
            testName: 'Covid Antigen',
            testCode:'AG19',
            price: '2500',
            specialPrice: '2500',
        }
    ]

  return (
    <div className='main-create-department-sec inner-view-section'>
        <Modal
          isOpen={loader}
          style={modalStyles.loaderCustomStyles}
          contentLabel="Example Modal"
        >
          <LoaderDna/>
        </Modal>
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Department Creation "}/>
        </div>
        <div className="form-section-labs">
            <Formik
                validationSchema={testPackageCreationCalidation}
                initialValues={baseValues}
                onSubmit={(values) => handleCreateTestPackage(values)}
            >
                {({errors , touched , handleSubmit , values}) => {
                    return (
                        <Form>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-6">
                                    <div className="label">
                                        <Label text={"Package Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="packageName" placeholder='Enter Package Name' className={`${errors.packageName && touched.packageName ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-6">
                                    <div className="label">
                                        <Label text={"Total Amount"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="totalAmount" placeholder='Enter Todat Amount' className={`${errors.totalAmount && touched.totalAmount ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-8">
                                    <div className="label">
                                        <Label text={"Test Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Select options={departOptions} 
                                            placeholder='Select test name'
                                            styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        paddingLeft: 10,
                                                        paddingTop: 4,
                                                        paddingBottom: 4,
                                                        borderColor: errors.testName ? '#ff0c0c' : '#CBD3DF',
                                                        fontFamily: '"Manrope" , sans-serif'
                                                    }),
                                                }}
                                            value={departOptions.find(option => option.value === values.testName)} 
                                            onChange={(option) => {setFieldValue('testName', option ? option.value : '')}}
                                        />
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Test Code"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="testCode" placeholder='Enter Test code' className={`${errors.testCode && touched.testCode ? 'error' : ''}`}/>
                                    </div>
                                </div>

                                <div className="col-span-12 ">
                                    <div className="main-table-section bg-lightBorder/40 rounded-[15px] overflow-hidden">
                                        <div className="table-section-listing">
                                            <table cellPadding={10}>
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Test Code</th>
                                                        <th>Test Name</th>
                                                        <th>Price</th>
                                                        <th>Special Price</th>
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
                                                                <td><input type="text" defaultValue={item.specialPrice} className='bg-white'/></td>
                                                                <td><DeleteButtton/></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>            
                                </div>

                                <div className="single-form-input-sec col-span-6 text-left">
                                    <ThemeButton type={'submit'} onClick={handleSubmit} text={"Add Test Package"}/>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    </div>
  )
}

export default CreateTestPackage