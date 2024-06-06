import React, { useState } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';

function FormBuilder() {
  const { jobTitle } = useParams(); // Get jobTitle from URL params
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    state: '',
    employee: '',
    contact: '',
  });
  const [csvData, setCsvData] = useState(null); // Define csvData state

  async function submit(e) {
    try {
      e.preventDefault(); // Prevent the form from submitting
      alert("Application Submitted!");

      // If CSV data is present, send it to Firestore
      if (csvData) {
        const csvRows = csvData.split('\n').map(row => row.split(','));
        // Assuming the first row of CSV contains headers
        const headers = csvRows[0];
        for (let i = 1; i < csvRows.length; i++) {
          const row = csvRows[i];
          const data = {};
          // Construct an object with keys from headers and values from row
          headers.forEach((header, index) => {
            data[header.trim()] = row[index].trim();
          });
          // Send data to Firestore
          await addDoc(collection(db, jobTitle), data);
        }
      }

      // Send form data to Firestore
      const docRef = await addDoc(collection(db, jobTitle), formData);
      console.log("Document written with ID: ", docRef.id);

      // Clear form data and CSV data after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        state: 'India',
        employee: '',
        contact: '',
      });
      setCsvData(null);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target.result;
      setCsvData(result); // Set csvData state with the CSV file content
    };
    reader.readAsText(file);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function cancel() {
    // Clear form data and CSV data on cancel
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      state: 'India',
      employee: '',
      contact: '',
    });
    setCsvData(null);
  }

  return (
    <div className="formcontainer">
      <form className="text-black-900" onSubmit={submit}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-black">Personal Information</h2>

          {/* Form fields */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Form fields */}
            {/* First Name */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-black">First name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-black">Last name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Email address</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* State */}
            <div className="sm:col-span-3">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-black">State</label>
              <div className="mt-2">
                <select
                  id="state"
                  name="state"
                  autoComplete="state-name"
                  value={formData.state}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Haryana</option>
                  <option>Gujarat</option>
                  <option>Himachal Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                </select>
              </div>
            </div>

            {/* Employee ID */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="employee" className="block text-sm font-medium leading-6 text-black">Employee ID</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="employee"
                  id="employee"
                  autoComplete="address-level2"
                  value={formData.employee}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-black">Contact</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  autoComplete="address-level1"
                  value={formData.contact}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* CSV File Upload */}
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="sm:col-span-6 mt-4"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" onClick={cancel} className="text-sm font-semibold leading-6 text-black">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
    </div>
  );
}

export default FormBuilder;
