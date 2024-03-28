import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, H21, Label, HeaderCard, FormField, Input, WhiteButton, BlackButton ,CheckboxContainer, F1 , Select, StyledFlex} from '../StyledComponents';

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
        toast.error(result.message || "Something went wrong.");
        return;
      }

      if (response.status === 201) {
        toast.success(`${catData.name} added successfully!`);
        setCatData({ ...initialCatDataState }); 
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "Failed to add the cat due to a network or server error. Please try again."
      );
    }
  };

  const handleReset = () => {
    setCatData({ ...initialCatDataState }); 
  };

  return (
    <>
      <HeaderCard>
        <H21>Create a cat profile</H21>
      </HeaderCard>
      <Card>
        <F1 onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={catData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="breed">Breed:</Label>
            <Input
              type="text"
              name="breed"
              placeholder="Breed"
              value={catData.breed}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="gender">Gender:</Label>
            <Select
              name="gender"
              value={catData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormField>
          <FormField>
            <Label htmlFor="color">Color:</Label>
            <Input
              type="text"
              name="color"
              placeholder="Color"
              value={catData.color}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="dateOfBirth">Date of Birth:</Label>
            <Input
              type="date"
              name="dateOfBirth"
              value={catData.dateOfBirth}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="identityNumber">Identity Number:</Label>
            <Input
              type="text"
              name="identityNumber"
              value={catData.identityNumber}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="transponderCode">Transponder Code:</Label>
            <Input
              type="text"
              name="transponderCode"
              value={catData.transponderCode}
              onChange={handleChange}
            />
          </FormField>
          <CheckboxContainer>
            <FormField>
            <Label htmlFor="active">Active:</Label>
            </FormField>
            <FormField>
            <input
              type="checkbox"
              name="active"
              checked={catData.active}
              onChange={handleChange}
            />
            </FormField>
          </CheckboxContainer>
          <StyledFlex>

          <WhiteButton type="submit">Submit</ WhiteButton>
          <BlackButton type="button" onClick={handleReset}>
            Reset
          </BlackButton>
          </StyledFlex>
        </F1>
        <ToastContainer />
      </Card>
    </>
  );
}
