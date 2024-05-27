import React from 'react'
import AdminNavbar from '../../components/Admin/Navbar'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './AdminHome'
import FormBuilder from '../../components/FormBuilder/FormBuilder'
import AdminForm from '../../components/FormBuilder/AdminForm'

function AdminLayout() {
  return (
    <>
    <AdminNavbar></AdminNavbar>
    <Routes><Route path='/AdminHome' element={<AdminHome />} />
    <Route path='/AdminForm' element={<AdminForm />} />
    </Routes>
    
    </>
  )
}

export default AdminLayout