import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyDf4MfMWs8ssZMDHuD_rwej_Y838_RTn1k",
    authDomain: "ril-internship-project.firebaseapp.com",
    projectId: "ril-internship-project",
    storageBucket: "ril-internship-project.appspot.com",
    messagingSenderId: "231836336479",
    appId: "1:231836336479:web:ad6ee8efa65ea5ee87b6ea",
    measurementId: "G-ZY4WMPYD0P"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

const AdminForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobsCollection = collection(firestore, 'jobs');
    try {
      await addDoc(jobsCollection, {
        title: jobTitle,
        description: jobDescription,
        createdAt: serverTimestamp()
      });
      console.log('Job added successfully!');
      // Reset the form after submission
      setJobTitle('');
      setJobDescription('');
    } catch (error) {
      console.error('Error adding job: ', error);
    }
  };

  return (
    <div>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AdminForm;