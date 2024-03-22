import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveButton from '@/components/Button';



export default function CreateOwnerForm() {
  const initialOwnerDataState = {
    name: "",
    email: "",
    address: "",
    city: "",
    telephone: "",
    active: false,

  };
  const [ownerData, setOwnerData] = useState({ ...initialOwnerDataState });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setOwnerData((prevOwnerData) => ({
      ...prevOwnerData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/owners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ownerData),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.message || 'Something went wrong.';
        toast.error(errorMessage);
        return;
      }

      if (response.status === 201) {
        console.log(result);
        toast.success(`${ownerData.name} added successfully!`);
        setOwnerData(initialOwnerDataState);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to add the owner due to a network or server error. Please try again.');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}>
        <h2>Create a owner profile</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={ownerData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={ownerData.email}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={ownerData.address}
          onChange={handleChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={ownerData.city}
          onChange={handleChange}
        />
        <label>Telephone:</label>
        <input
          type="text"
          name="telephone"
          placeholder="Telephone"
          value={ownerData.telephone}
          onChange={handleChange}
        />
         <h4>Active<input
          type="checkbox"
          name="active"
          checked={ownerData.active}
          onChange={handleChange}
        /> <br /></h4>
        <SaveButton
          type="submit">
          Save
        </SaveButton>
      </form>
      <ToastContainer />
    </>
  )
}
