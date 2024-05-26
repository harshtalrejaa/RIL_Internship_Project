import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Add this import

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
const firestore = getFirestore(app); // Initialize Firestore

const FormBuilder = () => {
  const { jobId, jobTitle} = useParams();
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { email, city, phone };
      const docRef = await addDoc(collection(firestore, jobTitle), formData);
      console.log('Application submitted with ID: ', docRef.id);
      // Reset form fields
      setEmail('');
      setCity('');
      setPhone('');
      // Redirect to some confirmation page or back to job list
      navigate('/');
    } catch (error) {
      console.error('Error adding application: ', error);
    }
  };

  return (
    <div>
      <h2>Apply for {jobTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone No:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormBuilder;
