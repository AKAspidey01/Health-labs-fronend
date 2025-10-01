import React, { useState } from 'react'
import './TestCreation.scss';
import ComponentTitle from '../../../utils/ComponentTitle'
import { Form, Formik , Field } from 'formik'
import Label from '../../../utils/FormComponents/Label'
import { testCreationValidation } from '../../../utils/Validation'
import Modal from "react-modal";
import LoaderDna from '../../../utils/LoaderDna'
import modalStyles from '../../../utils/ModalStyles'
import ThemeButton from '../../../utils/ThemeButton';
import MiniFormHeadingStrips from '../../../utils/FormComponents/MiniFormHeadingStrips';
import Select from 'react-select'
import Switch from '@mui/material/Switch';



const CreateTest = () => {

    const [loader , setLoader] = useState(false);
    const [isACtive , setIsActive] = useState(false)

    const departOptions = [
        { value: 'DEPARTMENT OF HAEMATOLOGY', label: 'DEPARTMENT OF HAEMATOLOGY' },
        { value: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY', label: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY' },
        { value: 'DEPARTMENT OF CLINICAL', label: 'DEPARTMENT OF CLINICAL' },
        { value: 'OTHERS', label: 'OTHERS' }
    ]


    const baseValues = {
        testName: '',
        testCode: '',
        price: '',
        cost: '',
        department: '',
        testSample: '',

        templateName: '',
        // ageRange: {
        //     min: '',
        //     max: ''
        // },
        ageRangeMin: "",
        ageRangeMax: '',
        applicableTo: '',
        testSelect: '',
        reUseTemplateName: ''

    }

    const handleCreateTest = (values) => {
        console.log(values)

        setLoader(true)

        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }
    
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  return (
    <div className='main-create-test-sec inner-view-section'>
        <Modal
          isOpen={loader}
          style={modalStyles.loaderCustomStyles}
          contentLabel="Example Modal"
        >
          <LoaderDna/>
        </Modal>
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Test Creation"}/>
        </div>
        <div className="form-section-labs">
            <Formik
                validationSchema={testCreationValidation}
                initialValues={baseValues}
                onSubmit={(values) => handleCreateTest(values)}
            >
                {({errors , touched , handleSubmit , values , setFieldValue}) => {
                    return (
                        <Form>
                            <div className="rounded-t-[18px] overflow-hidden">
                                <MiniFormHeadingStrips text={"Test Details"}/>
                            </div>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Test Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="testName" placeholder='Enter test name' className={`${errors.testName && touched.testName ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Test Code"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="testCode" placeholder='Enter test code' className={`${errors.testCode && touched.testCode ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Price"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="price" placeholder='Enter test price' className={`${errors.price && touched.price ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Cost (Expense to perform the test)"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="cost" placeholder='Enter cost' className={`${errors.cost && touched.cost ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Department"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Select options={departOptions} 
                                            placeholder='Select Department'
                                            styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        paddingLeft: 10,
                                                        paddingTop: 4,
                                                        paddingBottom: 4,
                                                        borderColor: errors.department ? '#ff0c0c' : '#CBD3DF',
                                                        fontFamily: '"Manrope" , sans-serif'
                                                    }),
                                                }}
                                            value={departOptions.find(option => option.value === values.department)} 
                                            onChange={(option) => {setFieldValue('department', option ? option.value : '')}}
                                        />
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Test Sample"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="testSample" placeholder='Enter test sample' className={`${errors.testSample && touched.testSample ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <button type="button" className={`flex items-center text-left text-sm justify-between gap-x-4 swicth-outer-btn-form`} onClick={() => setIsActive(!isACtive)}>
                                        <p>Active</p>
                                        <Switch {...label} checked={isACtive} color='success' />
                                    </button>
                                    
                                </div>
                            </div>
                            <div className="">
                                <MiniFormHeadingStrips text={"Template Details"}/>
                            </div>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Template Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="templateName" placeholder='Enter template name' className={`${errors.templateName && touched.templateName ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Age Range"}/>
                                    </div>
                                    <div className="input-sec flex items-center gap-x-4">
                                        <Field type="number" name="ageRangeMin" placeholder='Min' className={`${errors.ageRangeMin && touched.ageRangeMin ? 'error' : ''}`}/>
                                        <Field type="number" name="ageRangeMax" placeholder='Max' className={`${errors.ageRangeMax && touched.ageRangeMax ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Price"}/>
                                    </div>
                                    <div className="input-sec flex items-center gap-x-8">
                                        <div className="single-radio-option flex items-center gap-x-2">
                                            <Field type="radio" name="applicableTo" value="male" />
                                            <p>Male</p>
                                        </div>
                                        <div className="single-radio-option flex items-center gap-x-2">
                                            <Field type="radio" name="applicableTo" value="female" />
                                            <p>Fe-Male</p>
                                        </div>
                                        <div className="single-radio-option flex items-center gap-x-2">
                                            <Field type="radio" name="applicableTo" value="both" />
                                            <p>Both</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Test Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Select options={departOptions} 
                                            placeholder='Select Test Name'
                                            styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        paddingLeft: 10,
                                                        paddingTop: 4,
                                                        paddingBottom: 4,
                                                        borderColor: errors.testSelect ? '#ff0c0c' : '#CBD3DF',
                                                        fontFamily: '"Manrope" , sans-serif'
                                                    }),
                                                }}
                                            value={departOptions.find(option => option.value === values.testSelect)} 
                                            onChange={(option) => {setFieldValue('testSelect', option ? option.value : '')}}
                                        />
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Template Name for Re Use"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Select options={departOptions} 
                                            placeholder='Select Template name'
                                            styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        paddingLeft: 10,
                                                        paddingTop: 4,
                                                        paddingBottom: 4,
                                                        borderColor: errors.reUseTemplateName ? '#ff0c0c' : '#CBD3DF',
                                                        fontFamily: '"Manrope" , sans-serif'
                                                    }),
                                                }}
                                            value={departOptions.find(option => option.value === values.reUseTemplateName)} 
                                            onChange={(option) => {setFieldValue('reUseTemplateName', option ? option.value : '')}}
                                        />
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-6 text-left">
                                    <ThemeButton onClick={handleSubmit} text={"Add Template"} type={"submit"}/>
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

export default CreateTest