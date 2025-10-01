import React, { useState } from 'react'
import ComponentTitle from '../../../utils/ComponentTitle'
import { Form, Formik , Field } from 'formik'
import Label from '../../../utils/FormComponents/Label'
import { departmentCreationValidation } from '../../../utils/Validation'
import ThemeButton from '../../../utils/ThemeButton'
import Modal from "react-modal";
import LoaderDna from '../../../utils/LoaderDna'
import modalStyles from '../../../utils/ModalStyles'

const CreateDepartment = () => {

    const [loader , setLoader] = useState(false)

    const baseValues = {
        departName: '',
        date: ''
    }


    const handleCreateDepart = (values) => {
        console.log(values)

        setLoader(true)

        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }

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
                validationSchema={departmentCreationValidation}
                initialValues={baseValues}
                onSubmit={(values) => handleCreateDepart(values)}
            >
                {({errors , touched , handleSubmit , values}) => {
                    return (
                        <Form>
                            <div className="inner-form-main-section grid grid-cols-12 gap-8">
                                <div className="single-form-input-sec col-span-6">
                                    <div className="label">
                                        <Label text={"Department Name"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="text" name="departName" placeholder='Enter Department Name' className={`${errors.departName && touched.departName ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-6">
                                    <div className="label">
                                        <Label text={"Date"}/>
                                    </div>
                                    <div className="input-sec">
                                        <Field type="date" name="date" placeholder='Select Date' className={`${errors.date && touched.date ? 'error' : ''}`}/>
                                    </div>
                                </div>
                                <div className="single-form-input-sec col-span-6 text-left">
                                    <ThemeButton type={'submit'} onClick={handleSubmit} text={"Add Department"}/>
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

export default CreateDepartment