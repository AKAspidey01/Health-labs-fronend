import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import SideBar from './Components/SideBar/SideBar'
import TopBar from './Components/Topbar/TopBar'
import TestDepartmentCreation from './Components/Administration/TestDepartmentCreation/TestDepartmentCreation'
import CreateDepartment from './Components/Administration/TestDepartmentCreation/CreateDepartment'
import TestsListOverview from './Components/Administration/TestCreation.jsx/TestsListOverview'
import CreateTest from './Components/Administration/TestCreation.jsx/CreateTest'
import DoctorCategoryList from './Components/Administration/DoctorCategory/DoctorCategoryList'
import CreateDoctorCategory from './Components/Administration/DoctorCategory/CreateDoctorCategory'
import DoctorList from './Components/Administration/Doctor/DoctorList'
import CreateDoctor from './Components/Administration/Doctor/CreateDoctor'
import CreatePatientType from './Components/Administration/PatientType/CreatePatientType'
import PatientTypeList from './Components/Administration/PatientType/PatientTypeList'
import RefCustomerList from './Components/Administration/RefCustomer/RefCustomerList'
import CreateRefCustomer from './Components/Administration/RefCustomer/CreateRefCustomer'
import TestPackageList from './Components/Administration/TestPackage/TestPackageList'
import CreateTestPackage from './Components/Administration/TestPackage/CreateTestPackage'

function App() {

  return (
    <Router>
      <TopBar/>
      <SideBar/>
      <Routes>
        <Route Component={Dashboard} path='/' exact={true} />
        <Route Component={TestDepartmentCreation} path='/administration/manage-test-department' exact={true} />
        <Route Component={CreateDepartment} path='/administration/manage-test-department/create-department' exact={true} />
        <Route Component={TestsListOverview} path='/administration/tests-overview' exact={true} />
        <Route Component={CreateTest} path='/administration/tests-overview/create-test' exact={true} />
        <Route Component={DoctorCategoryList} path='/administration/doctor-categories' exact={true} />
        <Route Component={CreateDoctorCategory} path='/administration/doctor-categories/create-doctor-category' exact={true} />
        <Route Component={DoctorList} path='/administration/doctor-list' exact={true} />
        <Route Component={CreateDoctor} path='/administration/doctor-list/create-doctor' exact={true} />
        <Route Component={PatientTypeList} path='/administration/patient-types' exact={true} />
        <Route Component={CreatePatientType} path='/administration/patient-types/create-patient-type' exact={true} />
        <Route Component={RefCustomerList} path='/administration/ref-customers' exact={true} />
        <Route Component={CreateRefCustomer} path='/administration/ref-customers/create-ref-customer' exact={true} />
        <Route Component={TestPackageList} path='/administration/test-packages' exact={true} />
        <Route Component={CreateTestPackage} path='/administration/test-packages/create-test-packages' exact={true} />
      </Routes>
    </Router>
  )
}

export default App
