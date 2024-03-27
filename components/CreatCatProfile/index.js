import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BlueButton, Card, H21,F1 } from "../StyledComponents";


export default function CreateCatForm() {
  const initialCatDataState = {
    name: "",
    breed: "",
    gender: "",
    color: "",
    dateOfBirth: "",
    identityNumber: "",
    transponderCode: "",
    active: false,
  };
  const [catData, setCatData] = useState({ ...initialCatDataState });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCatData((prevCatData) => ({
      ...prevCatData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catData),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.message || "Something went wrong.";
        toast.error(errorMessage);
        return; //loose it
      }

      if (response.status === 201) {
        console.log(result);
        toast.success(`${catData.name} added successfully!`);
        setCatData(initialCatDataState);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "Failed to add the cat due to a network or server error. Please try again."
      );
    }
  };

  return (
    <>
        <H21>Create a cat profile</H21>
    <Card>
      <F1 onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={catData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={catData.breed}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={catData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={catData.color}
          onChange={handleChange}
        />
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={catData.dateOfBirth}
          onChange={handleChange}
        />
        <label htmlFor="identityNumber">Identity Number:</label>
        <input
          type="text"
          name="identityNumber"
          placeholder="Identity Number"
          value={catData.identityNumber}
          onChange={handleChange}
        />
        <label htmlFor="transponderCode">Transponder Code:</label>
        <input
          type="text"
          name="transponderCode"
          placeholder="Transponder Code"
          value={catData.transponderCode}
          onChange={handleChange}
        />
        <h4>
          Active
          <input
            type="checkbox"
            name="active"
            checked={catData.active}
            onChange={handleChange}
          />{" "}
          <br />
        </h4>
        <BlueButton type="submit">Save</BlueButton>
      </F1>
      <ToastContainer />
      </Card>
    </>
  );
}
