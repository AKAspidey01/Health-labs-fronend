import React, { useState } from 'react';
import ComponentTitle from '../../../utils/ComponentTitle';
import { Form, Formik , Field } from 'formik';
import Label from '../../../utils/FormComponents/Label';
import { patientTypeCreateValidation } from '../../../utils/Validation';
import ThemeButton from '../../../utils/ThemeButton';
import Modal from "react-modal";
import LoaderDna from '../../../utils/LoaderDna';
import modalStyles from '../../../utils/ModalStyles';
import './PatientType.scss';


const CreatePatientType = () => {

    const [loader , setLoader] = useState(false)
        
    const baseValues = {
        patientType: '',
    }


    const handleCreatePateintType = (values) => {
        console.log(values)

        setLoader(true)

        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }
    

  return (
    <div className='main-create-doctor-category inner-view-section'>
        <Modal
          isOpen={loader}
          style={modalStyles.loaderCustomStyles}
          contentLabel="Example Modal"
        >
          <LoaderDna/>
        </Modal>
        <div className="top-header-section-inner-page flex items-center justify-between mb-8">
            <ComponentTitle text={"Patient Type Creation"}/>
        </div>
        <div className="form-section-labs">
            <Formik
                validationSchema={patientTypeCreateValidation}
                initialValues={baseValues}
                onSubmit={(values) => handleCreatePateintType(values)}
            >
                {({errors , touched , handleSubmit , values}) => {
                    return (
                        <Form>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-12">
                                    <div className="label">
                                        <Label text={"Patient Type"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="patientType" placeholder='Enter pateint type' className={`${errors.patientType && touched.patientType ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-6 text-left">
                                    <ThemeButton type={'submit'} onClick={handleSubmit} text={"Add Patient Type"}/>
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

export default CreatePatientType