// src/App.js
import React from 'react';
import './App.css';
import FormBuilder from './components/FormBuilder/FormBuilder';
import Cards from './components/Cards/Cards';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Navigation/Layout';
import SignButton from './components/Navigation/SignButton';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminForm from './components/FormBuilder/AdminForm';
// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import HomePage from './pages/HomePage';
import JobCard from './components/Cards/Cards';

const firebaseConfig = {
  apiKey: "AIzaSyDf4MfMWs8ssZMDHuD_rwej_Y838_RTn1k",
  authDomain: "ril-internship-project.firebaseapp.com",
  projectId: "ril-internship-project",
  storageBucket: "ril-internship-project.appspot.com",
  messagingSenderId: "231836336479",
  appId: "1:231836336479:web:ad6ee8efa65ea5ee87b6ea",
  measurementId: "G-ZY4WMPYD0P"
};

const app = initializeApp(firebaseConfig);


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route index element={<SignButton />} />
          {/* <Route path="FormBuilder" element={<FormBuilder />} /> */}
        </Route>
        <Route path='/Admin' element = {<AdminLayout></AdminLayout>}/>
        <Route path='/AdminForm' element = {<AdminForm></AdminForm>}/>
        <Route path="/" element={<JobCard />} />
        <Route path="/:jobId/:jobTitle/" element={<FormBuilder />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
