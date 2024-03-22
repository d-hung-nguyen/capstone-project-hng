import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveButton from '@/components/Button';



export default function CreateCatForm() {
  const initialCatDataState = {
    name: '',
    breed: '',
    gender: '',
    color: '',
    dateOfBirth: '',
    identityNumber: '',
    transponderCode: '',
    active: false,
  };
  const [catData, setCatData] = useState({ ...initialCatDataState });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCatData((prevCatData) => ({
      ...prevCatData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(catData),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.message || 'Something went wrong.';
        toast.error(errorMessage);
        return; //loose it
      }

      if (response.status === 201) {
        console.log(result);
        toast.success(`${catData.name} added successfully!`);
        setCatData(initialCatDataState);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to add the cat due to a network or server error. Please try again.');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}>
        <h2>Create a cat profile</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={catData.name}
          onChange={handleChange}
          required
        />
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={catData.breed}
          onChange={handleChange}
        />
        <label>Gender:</label>
        <select
          type="text"
          name="gender"
          placeholder="Gender"
          value={catData.gender}
          onChange={handleChange}
          >
             <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
          </select>

        <label>Color:</label>
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={catData.color}
          onChange={handleChange}
        />
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={catData.dateOfBirth}
          onChange={handleChange}
        />
        <label>Identity Number:</label>
        <input
          type="text"
          name="identityNumber"
          placeholder="Identity Number"
          value={catData.identityNumber}
          onChange={handleChange}
        />
        <label>Transponder Code:</label>
        <input
          type="text"
          name="transponderCode"
          placeholder="Transponder Code"
          value={catData.transponderCode}
          onChange={handleChange}
        />
        <h4>Active<input
          type="checkbox"
          name="active"
          checked={catData.active}
          onChange={handleChange}
        /> <br /></h4>

        <SaveButton
          type="submit">
          Save
        </SaveButton>
      </form>
      <ToastContainer />
    </>
  );
}

