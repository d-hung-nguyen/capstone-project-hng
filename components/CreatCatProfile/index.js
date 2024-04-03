import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  H21,
  Label,
  Option,
  FormField,
  Input,
  WhiteButton,
  BlackButton,
  F1,
  Select,
  ButtonContainer,
  HeaderCard,
  FormField1,
  BlackButtonT,
} from "../StyledComponents";
import {Wrapper} from "../boxes";
import {useRouter} from "next/router";

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

  const [catData, setCatData] = useState({...initialCatDataState});
  const router = useRouter();
  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    setCatData((prevCatData) => ({
      ...prevCatData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const CustomToastContent = () => (
    <div>
      New cat added successfully!
      <ButtonContainer>
        <BlackButtonT onClick={() => router.push("/lists/cats")}>
          View Cats List
        </BlackButtonT>
        <BlackButtonT onClick={() => toast.dismiss()}>
          Add another cat
        </BlackButtonT>
        <BlackButtonT onClick={() => toast.dismiss()}>Close</BlackButtonT>
      </ButtonContainer>
    </div>
  );
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
        toast(<CustomToastContent />, {
          position: "top-center",
          autoClose: false,
          closeOnClick: false,
          draggable: true,
        });
        setCatData({...initialCatDataState});
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "Failed to add the cat due to a network or server error. Please try again."
      );
    }
  };

  const handleReset = () => {
    setCatData({...initialCatDataState});
  };

  return (
    <>
      <Wrapper>
        <HeaderCard>
          <H21>Create a cat profile</H21>
        </HeaderCard>
        <Card>
          <h5>Fill out the form below to create a new profile for your cat.</h5>
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
                onChange={handleChange}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
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
            <FormField1>
              <Label htmlFor="active">Active:</Label>
              <input
                type="checkbox"
                name="active"
                checked={catData.active}
                onChange={handleChange}
              />
            </FormField1>
          </F1>
          <ButtonContainer>
            <WhiteButton type="submit" onClick={handleSubmit}>
              Save
            </WhiteButton>
            <BlackButton type="button" onClick={handleReset}>
              Reset
            </BlackButton>
          </ButtonContainer>
          <ToastContainer
            position="top-center"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              margin: "0 auto",
              width: "100%",
              height: "40%",
            }}
          />
        </Card>
      </Wrapper>
    </>
  );
}
