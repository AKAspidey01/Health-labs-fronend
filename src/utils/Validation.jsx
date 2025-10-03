import * as yup from 'yup'


export const departmentCreationValidation = yup.object().shape({
  departName: yup.string().required('Please Enter Department Name'),
  date: yup.string().required('Please Select Date'),
});



export const testPackageCreationCalidation = yup.object().shape({
  packageName: yup.string().required('Please Enter Package Name'),
  totalAmount: yup.string().notRequired('Please Enter Total Amount'),
  testName: yup.string().required('Please Enter Test Name'),
  testCode: yup.string().required('Please Enter Test Code'),
});


export const testCreationValidation = yup.object().shape({
  testName: yup.string().required('Please Enter Test Name'),
  testCode: yup.string().required('Please Enter Testcode'),
  price: yup.string().required('Please Enter Price'),
  cost: yup.string().required('Please Enter Cost'),
  department: yup.string().required('Please Select Department'),
  testSample: yup.string().required('Please Enter Test Sample'),
  templateName: yup.string().required('Please Enter Template Sample'),
  ageRangeMin: yup.number().required("Min age is required").min(0, "Min age cannot be negative"),
  ageRangeMax: yup.number().required("Max age is required").moreThan(yup.ref("ageRangeMin"), "Max must be greater than Min"),
  applicableTo: yup.string().required("Please select applicable gender").oneOf(["male", "female", "both"], "Invalid selection"),
  testSelect: yup.string().required('Please Select Test'),
  reUseTemplateName: yup.string().required('Please Select Template Name'),
});


export const doctorCategoryCreateValidation = yup.object().shape({
  categoryName: yup.string().required('Please Enter Department Name'),
  date: yup.string().required('Please Select Date'),
});

export const doctorCreationValidation = yup.object().shape({
  doctorId: yup.string().required('Please Enter doctor id'),
  doctorName: yup.string().required('Please Enter doctor name'),
  currentAddress: yup.object({
    line1: yup.string().required("Address Line 1 required"),
    city: yup.string().required("City required"),
    state: yup.string().required("State required"),
    pincode: yup.string().required("Pincode required"),
  }),
  isSameAddress: yup.string().required("Please select option"),
  permanentAddress: yup.object().when("isSameAddress", {
    is: "no",
    then: yup.object({
      line1: yup.string().required("Address Line 1 required"),
      city: yup.string().required("City required"),
      state: yup.string().required("State required"),
      pincode: yup.string().required("Pincode required"),
    }),
  }),
  referralValue: yup.number().required("Referral value is required"),
  referralType: yup.string().oneOf(["%", "Value"], "Invalid type").required("Please select referral type"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  contactNo: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Digits"),
  alternateContact: yup.number().notRequired('Please Enter Your Mobile Number').min(10 , "Minimum 10 Digits"),
  dateOfBirth: yup.string().required('Please Enter Birthdate'),
  loginId: yup.string().required("Login ID is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
  docCategory: yup.string().required("Please select doctor category"),
  refCalcMethod: yup.string().required("Please select referral calculation method"),
});


export const patientTypeCreateValidation = yup.object().shape({
  patientType: yup.string().required('Please Enter Patient Type'),
});