import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledButton } from '@/styles';

export default function CreateCatForm({ cat = {} }) {
  const initialCatDataState = {
    name: cat.name || '',
    breed: cat.breed || '', 
    gender: cat.gender || '',
    color: cat.color || '',
    dateOfBirth: cat.dateOfBirth || '',
    identityNumber: cat.identityNumber || '',
    transponderCode: cat.transponderCode || '',
    active: cat.active || false,
  };
  const [catData, setCatData] = useState({...initialCatDataState, ...cat});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCatData((prevCatData) => ({
      ...prevCatData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={catData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={catData.breed}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={catData.gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={catData.color}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={catData.dateOfBirth}
            onChange={handleChange}
          />
          <input
            type="text"
            name="identityNumber"
            placeholder="Identity Number"
            value={catData.identityNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="transponderCode"
            placeholder="Transponder Code"
            value={catData.transponderCode}
            onChange={handleChange}
          />
      <div> 
          <h4>Active</h4>
          <input
            type="checkbox"
            name="active"
            checked={catData.active}
            onChange={handleChange} 
          /> <br />
          <StyledButton>
          <button type="submit">Save</button> 
          </StyledButton>
      </div>  
      </form>
      <ToastContainer />
    </>
  );
}

