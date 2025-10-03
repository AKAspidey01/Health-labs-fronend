import React, { useState } from 'react'
import './Doctor.scss';
import ComponentTitle from '../../../utils/ComponentTitle'
import { Form, Formik , Field } from 'formik'
import Label from '../../../utils/FormComponents/Label'
import { doctorCreationValidation } from '../../../utils/Validation'
import Modal from "react-modal";
import LoaderDna from '../../../utils/LoaderDna'
import modalStyles from '../../../utils/ModalStyles'
import ThemeButton from '../../../utils/ThemeButton';
import MiniFormHeadingStrips from '../../../utils/FormComponents/MiniFormHeadingStrips';
import Select from 'react-select'
import Switch from '@mui/material/Switch';

const CreateDoctor = () => {

    const [loader , setLoader] = useState(false);
    const [isACtive , setIsActive] = useState(true);
    const [password , setPassword] = useState(false);
    const [confirmPass , setConfirmPass] = useState(false)

    const departOptions = [
        { value: 'DEPARTMENT OF HAEMATOLOGY', label: 'DEPARTMENT OF HAEMATOLOGY' },
        { value: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY', label: 'DEPARTMENT OF CLINICAL BIOCHEMISTRY' },
        { value: 'DEPARTMENT OF CLINICAL', label: 'DEPARTMENT OF CLINICAL' },
        { value: 'OTHERS', label: 'OTHERS' }
    ]


    const baseValues = {
        doctorId: '',
        doctorName: '',
        email: '',
        contactNo: '',
        alternateContact: '',
        dateOfBirth: '',
        currentAddress: {
            line1: '',
            line2: '',
            landmark: '',
            city: '',
            state: '',
            pincode: '',
        },
        permanentAddress: {
            line1: '',
            line2: '',
            landmark: '',
            city: '',
            state: '',
            pincode: '',
        },
        isSameAddress: 'yes',
        docCategory: '',
        refCalcMethod: '',
        referralValue: '', 
        referralType: '%',
        loginId: '',
        password: '',
        confirmPassword: ''
    }

    const handleCreateDoctor = (values) => {
        console.log(values)

        setLoader(true)

        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }
    
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };


    function numbersOnly(e) {
        var key = e.key;
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            e.preventDefault();
        }
        else {
            // console.log("You pressed a key: " + key);
        }
    }

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
            <ComponentTitle text={"Doctor Creation"}/>
        </div>
        <div className="form-section-labs">
            <Formik
                validationSchema={doctorCreationValidation}
                initialValues={baseValues}
                onSubmit={(values) => handleCreateDoctor(values)}
            >
                {({errors , touched , handleSubmit , values , setFieldValue}) => {
                    return (
                        <Form>
                            <div className="rounded-t-[18px] overflow-hidden">
                                <MiniFormHeadingStrips text={"Contact Details"}/>
                            </div>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Doctor Id"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" disabled={false} name="doctorId" placeholder='Enter Doctor ID' className={`${errors.doctorId && touched.doctorId ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Doctor Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="doctorName" placeholder='Enter doctor name' className={`${errors.doctorName && touched.doctorName ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Email"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="email" name="email" placeholder='Enter email' className={`${errors.email && touched.email ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Contact No"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="tel" onKeyPress={(e) => numbersOnly(e)} maxLength={10} name="contactNo" placeholder='Enter contact number' className={`${errors.contactNo && touched.contactNo ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Alternate Contact No"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="tel" name="alternateContact" onKeyPress={(e) => numbersOnly(e)} maxLength={10} placeholder='Enter alternate contact' className={`${errors.alternateContact && touched.alternateContact ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Date of birth"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="date" name="dateOfBirth" placeholder='Select date of brith' className={`${errors.dateOfBirth && touched.dateOfBirth ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="middle-form-headers py-3 col-span-12 bg-Black/10 px-5">
                                    <p className='text-Black opacity-60 font-semibold'>Present Address</p>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Address Line1"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="currentAddress.line1" placeholder='Enter address line 1' className={`${errors.currentAddress?.line1 && touched.currentAddress?.line1 ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Address Line2"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="currentAddress.line2" placeholder='Enter address line 2' className={`${errors.currentAddress?.line2 && touched.currentAddress?.line2 ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Landmark"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="currentAddress.landmark" placeholder='Enter Landmark' className={`${errors.currentAddress?.landmark && touched.currentAddress?.landmark ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"City"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="currentAddress.city" placeholder='Enter city' className={`${errors.currentAddress?.city && touched.currentAddress?.city ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"State"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="currentAddress.state" placeholder='Enter state' className={`${errors.currentAddress?.state && touched.currentAddress?.state ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Pincode"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="currentAddress.pincode" placeholder='Enter pincode' className={`${errors.currentAddress?.pincode && touched.currentAddress?.pincode ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Permanent Address same as above"}/>
                                    </div>
                                    <div className="input-sec flex items-center gap-x-8">
                                        <div className="single-radio-option flex items-center gap-x-2">
                                            <Field type="radio" name="isSameAddress" value="yes" />
                                            <p>Yes</p>
                                        </div>
                                        <div className="single-radio-option flex items-center gap-x-2">
                                            <Field type="radio" name="isSameAddress" value="no" />
                                            <p>No</p>
                                        </div>
                                    </div>
                                </div>
                                {values.isSameAddress === "no" && (
                                    <div className="col-span-12">
                                        <div className="grid grid-cols-12 gap-8">
                                            <div className="middle-form-headers py-3 col-span-12 bg-Black/10 px-5">
                                                <p className='text-Black opacity-60 font-semibold'>Permanent Address</p>
                                            </div>
                                            <div className="single-form-input-sec col-span-4">
                                                <div className="label">
                                                    <Label text={"Address Line1"}/>
                                                </div>
                                                <div className="input-sec">
                                                    <Field type="text" name="permanentAddress.line1" placeholder='Enter address line 1' className={`${errors.permanentAddress?.line1 && touched.permanentAddress?.line1 ? 'error' : ''}`}/>
                                                </div>
                                            </div>
                                            <div className="single-form-input-sec col-span-4">
                                                <div className="label">
                                                    <Label text={"Address Line2"}/>
                                                </div>
                                                <div className="input-sec">
                                                    <Field type="text" name="permanentAddress.line2" placeholder='Enter address line 2' className={`${errors.permanentAddress?.line2 && touched.permanentAddress?.line2 ? 'error' : ''}`}/>
                                                </div>
                                            </div>
                                            <div className="single-form-input-sec col-span-4">
                                                <div className="label">
                                                    <Label text={"Landmark"}/>
                                                </div>
                                                <div className="input-sec">
                                                    <Field type="text" name="permanentAddress.landmark" placeholder='Enter Landmark' className={`${errors.permanentAddress?.landmark && touched.permanentAddress?.landmark ? 'error' : ''}`}/>
                                                </div>
                                            </div>
                                            <div className="single-form-input-sec col-span-4">
                                                <div className="label">
                                                    <Label text={"City"}/>
                                                </div>
                                                <div className="input-sec">
                                                    <Field type="text" name="permanentAddress.city" placeholder='Enter city' className={`${errors.permanentAddress?.city && touched.permanentAddress?.city ? 'error' : ''}`}/>
                                                </div>
                                            </div>
                                            <div className="single-form-input-sec col-span-4">
                                                <div className="label">
                                                    <Label text={"State"}/>
                                                </div>
                                                <div className="input-sec">
                                                    <Field type="text" name="permanentAddress.state" placeholder='Enter state' className={`${errors.permanentAddress?.state && touched.permanentAddress?.state ? 'error' : ''}`}/>
                                                </div>
                                            </div>
                                            <div className="single-form-input-sec col-span-4">
                                                <div className="label">
                                                    <Label text={"Pincode"}/>
                                                </div>
                                                <div className="input-sec">
                                                    <Field type="text" name="permanentAddress.pincode" placeholder='Enter pincode' className={`${errors.permanentAddress?.pincode && touched.permanentAddress?.pincode ? 'error' : ''}`}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="col-span-12">
                                    <div className="grid grid-cols-12 gap-8 items-end">
                                        <div className="single-form-input-sec col-span-4">
                                            <div className="label">
                                                <Label text={"Doctor Category"}/>
                                            </div>
                                            <div className="input-sec">
                                                <Select options={departOptions} 
                                                    placeholder='Select Category'
                                                    styles={{
                                                            control: (baseStyles, state) => ({
                                                                ...baseStyles,
                                                                borderRadius: 8,
                                                                paddingLeft: 10,
                                                                paddingTop: 4,
                                                                paddingBottom: 4,
                                                                borderColor: errors.docCategory ? '#ff0c0c' : '#CBD3DF',
                                                                fontFamily: '"Manrope" , sans-serif'
                                                            }),
                                                        }}
                                                    value={departOptions.find(option => option.value === values.docCategory)} 
                                                    onChange={(option) => {setFieldValue('docCategory', option ? option.value : '')}}
                                                />
                                            </div>
                                        </div>
                                        <div className="single-form-input-sec col-span-4">
                                            <div className="label">
                                                <Label text={"Refferal calculation method"}/>
                                            </div>
                                            <div className="input-sec">
                                                <Select options={departOptions} 
                                                    placeholder='Select Refferal calculation'
                                                    styles={{
                                                            control: (baseStyles, state) => ({
                                                                ...baseStyles,
                                                                borderRadius: 8,
                                                                paddingLeft: 10,
                                                                paddingTop: 4,
                                                                paddingBottom: 4,
                                                                borderColor: errors.refCalcMethod ? '#ff0c0c' : '#CBD3DF',
                                                                fontFamily: '"Manrope" , sans-serif'
                                                            }),
                                                        }}
                                                    value={departOptions.find(option => option.value === values.refCalcMethod)} 
                                                    onChange={(option) => {setFieldValue('refCalcMethod', option ? option.value : '')}}
                                                />
                                            </div>
                                        </div>
                                        <div className="single-form-input-sec col-span-4">
                                            <button type="button" className={`flex text-left text-sm items-center justify-between gap-x-4 swicth-outer-btn-form`} onClick={() => setIsActive(!isACtive)}>
                                                <p>Include in multiple doctor referrals</p>
                                                <Switch {...label} checked={isACtive} color='success' />
                                            </button>
                                        </div>
                                        <div className="single-form-input-sec col-span-4">
                                            <div className="label">
                                                <Label text={"Referral"}/>
                                            </div>
                                            <div className="input-sec grid grid-cols-12 gap-x-4">
                                                <div className="col-span-8">
                                                    <Field type="number" name="referralValue" placeholder='Enter Refferal value' className={`${errors.referralValue && touched.referralValue ? 'error' : ''}`}/>
                                                </div>
                                                <div className="col-span-4">
                                                    <Field as="select" name="referralType" className={`${errors.referralType && touched.referralType ? 'error' : ''}`}>
                                                        <option value="%">%</option>
                                                        <option value="Value">Value</option>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-form-input-sec col-span-4">
                                            <button type="button" className={`flex text-left text-sm items-center justify-between gap-x-4 swicth-outer-btn-form`} onClick={() => setIsActive(!isACtive)}>
                                                <p>Is Active</p>
                                                <Switch {...label} checked={isACtive} color='success' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <MiniFormHeadingStrips text={"Login Details"}/>
                            </div>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Login ID"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" disabled={false} name="loginId" placeholder='' className={`${errors.loginId && touched.loginId ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Password"}/>
                                    </div>
                                    <div className="input-sec relative">
                                        <Field type={password ? 'text' : 'password'} name="password" placeholder='' className={`${errors.password && touched.password ? 'error' : ''}`}/>
                                        <div className="abs-password-show-icon">
                                            <button type="button" onClick={() => setPassword(!password)}><i className={`bi ${password ? 'bi-eye-slash' : 'bi-eye'} text-Black/70 text-lg`}></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-4">
                                    <div className="label">
                                        <Label text={"Confirm Password"}/>
                                    </div>
                                    <div className="input-sec relative">
                                        <Field type={confirmPass ? 'text' : 'password'} name="confirmPassword" placeholder='' className={`${errors.confirmPassword && touched.confirmPassword ? 'error' : ''}`}/>
                                        <div className="abs-password-show-icon">
                                            <button type="button" onClick={() => setConfirmPass(!confirmPass)}><i className={`bi ${confirmPass ? 'bi-eye-slash' : 'bi-eye'} text-Black/70 text-lg`}></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-6 text-left">
                                    <ThemeButton onClick={handleSubmit} text={"Add Doctor"} type={"submit"}/>
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

export default CreateDoctor