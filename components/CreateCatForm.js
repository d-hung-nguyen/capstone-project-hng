import React, { useState } from 'react';

export default function CreateCatForm({ onCatCreated, cat = {}, onSuccess }) {
  const [catData, setCatData] = useState({
    name: cat.name || '',
    breed: cat.breed || '', // Ensure breed is included if you're using it in the form
    gender: cat.gender || '',
    color: cat.color || '',
    dateOfBirth: cat.dateOfBirth || '',
    identityNumber: cat.identityNumber || '',
    transponderCode: cat.transponderCode || '',
    active: cat.active || false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCatData({
      ...catData,
      [name]: type === 'checkbox' ? checked : value,
    });
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

      if (!response.ok) {
        throw new Error('Something went wrong with the request.');
      }

      const result = await response.json();
      console.log(result);

      if (onSuccess) {
        onSuccess(result); // Call the onSuccess callback if provided
      }
    } catch (error) {
      console.error('Failed to create cat profile:', error);
    }
  };

  return (
    <>
      <form
          onSubmit={handleSubmit}>  
          <h3>CREATE A CAT PROFILE</h3>
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
          <span>Active</span>
          <input
            type="checkbox"
            name="active"
            checked={catData.active}
            onChange={handleChange} 
          /> <br />
          <button type="submit">SAVE</button> 
      </div>  
      </form>
    </>
  );
}

