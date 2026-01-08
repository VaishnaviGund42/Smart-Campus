import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
import Signup from './views/Signup.jsx'
import Cart from './views/Cart.jsx'
import Contact from './views/Contact.jsx'
import StationaryStore from './views/StationaryStore.jsx'
import Material from './views/Material.jsx'
import Upload from './views/Upload.jsx'

// Dashboards
import AdminDashboard from './views/Admin/Dashboard.jsx'
import StudentDashboard from './views/Student/StudentDashboard.jsx'
import FacultyDashboard from './views/Faculty/FacultyDashboard.jsx'
import ManageStudents from './views/Admin/ManageStudents.jsx'
import ManageFaculty from './views/Admin/ManageFaculty.jsx'
import Reports from './views/Admin/Reports.jsx'
import Settings from './views/Admin/Settings.jsx'
import UploadMarks from './views/Faculty/UploadMarks.jsx'
import UploadAttendance from './views/Faculty/UploadAttendance.jsx'
import ManageSubjects from './views/Faculty/ManageSubjects.jsx'
import ViewNotices from './views/Faculty/ViewNotices.jsx'
  


import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/store" element={<StationaryStore />} />
      <Route path="/m" element={<Material />} />
      <Route path="/u" element={<Upload />} />

      {/* Dashboards */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/manage-students" element={<ManageStudents />} />
       <Route path="/admin/manage-faculty" element={<ManageFaculty />} />
  <Route path="/admin/reports" element={<Reports />} />
  <Route path="/admin/settings" element={<Settings />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/faculty" element={<FacultyDashboard />} />  

      <Route path="/faculty" element={<FacultyDashboard />} />
<Route path="/faculty/upload-marks" element={<UploadMarks />} />
<Route path="/faculty/upload-attendance" element={<UploadAttendance />} />
<Route path="/faculty/manage-subjects" element={<ManageSubjects />} />
<Route path="/faculty/view-notices" element={<ViewNotices />} />

    </Routes>
  </BrowserRouter>
)
