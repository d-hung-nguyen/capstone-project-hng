import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  H21,
  Label,
  HeaderCard,
  FormField,
  Input,
  BlackButton,
  WhiteButton,
  CheckboxContainer,
  F1,
  StyledFlex,
  Spacer,
} from "../StyledComponents";

export default function CreateOwnerForm() {
  const initialOwnerDataState = {
    name: "",
    email: "",
    address: "",
    city: "",
    telephone: "",
    active: false,
  };
  const [ownerData, setOwnerData] = useState(initialOwnerDataState);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    setOwnerData((prevOwnerData) => ({
      ...prevOwnerData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/owners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ownerData),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.message || "Something went wrong.";
        toast.error(errorMessage);
        return;
      }

      if (response.status === 201) {
        console.log(result);
        toast.success(`${ownerData.name} added successfully!`);
        setOwnerData(initialOwnerDataState);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "Failed to add the owner due to a network or server error. Please try again."
      );
    }
  };

  const handleReset = () => {
    setOwnerData({...initialOwnerDataState});
  };
  return (
    <>
      <HeaderCard>
        <H21>Create a owner profile</H21>
      </HeaderCard>
      <Card>
        <F1 onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={ownerData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={ownerData.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Address:</Label>
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={ownerData.address}
              onChange={handleChange}></Input>
          </FormField>
          <FormField>
            <Label htmlFor="city">City:</Label>
            <Input
              type="text"
              name="city"
              placeholder="City"
              value={ownerData.city}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="telephone">Telephone:</Label>
            <Input
              type="text"
              name="telephone"
              placeholder="Telephone"
              value={ownerData.telephone}
              onChange={handleChange}
            />
          </FormField>
          <CheckboxContainer>
            <FormField>
              <Label htmlFor="active">Active:</Label>
              <Input
                type="checkbox"
                id="active"
                name="active"
                checked={ownerData.active}
                onChange={handleChange}
              />
            </FormField>
          </CheckboxContainer>
        </F1>
        <StyledFlex>
          <WhiteButton type="submit">Submit</WhiteButton>
          <BlackButton type="button" onClick={handleReset}>
            Reset
          </BlackButton>
        </StyledFlex>
        <ToastContainer />
      </Card>
    </>
  );
}
