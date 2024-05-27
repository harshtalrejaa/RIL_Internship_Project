import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import JobCard from '../components/Cards/Cards'; // Assume you have a JobCard component to render each job on a card
import { initializeApp } from 'firebase/app';
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

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'jobs'));
        const fetchedJobs = [];
        querySnapshot.forEach((doc) => {
          // Extract job data from Firestore document
          const jobData = doc.data();
          fetchedJobs.push({ id: doc.id, ...jobData });
        });
        setJobs(fetchedJobs);
        console.log(fetchedJobs)
      } catch (error) {
        console.error('Error fetching jobs: ', error);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard title={job.title} description={job.description} id={job.id} />
      ))}
    </div>
  );
};

export default HomePage;