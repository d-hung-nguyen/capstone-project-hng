import {use, useState} from "react";
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
  F1,
  ButtonContainer,
  FormField1,
  BlackButtonT,
} from "../StyledComponents";
import {Wrapper} from "../boxes";
import {useRouter} from "next/router";

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
  const router = useRouter();

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    setOwnerData((prevOwnerData) => ({
      ...prevOwnerData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const CustomToastContent = () => (
    <div>
      New owner added successfully!
      <ButtonContainer>
        <BlackButtonT onClick={() => router.push("/lists/owners")}>
          View Owners List
        </BlackButtonT>
        <BlackButtonT onClick={() => toast.dismiss()}>
          Create Another Profile
        </BlackButtonT>
      </ButtonContainer>
    </div>
  );

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
        toast(<CustomToastContent />, {
          position: "top-center",
          autoClose: false,
          closeOnClick: false,
          draggable: true,
        });
        setOwnerData({...initialOwnerDataState});
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

  const navigateToList = () => {
    router.push("/path-to-list-of-owners");
  };

  const navigateToCreateAnother = () => {
    setOwnerData(initialOwnerDataState);
  };

  return (
    <>
      <Wrapper>
        <HeaderCard>
          <H21>Create an owner&apos;s profile</H21>
        </HeaderCard>
        <Card>
          <h5>Fill out the form below to create a new profile for an owner.</h5>
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
            <FormField1>
              <Label htmlFor="active">Active:</Label>
              <input
                type="checkbox"
                id="active"
                name="active"
                checked={ownerData.active}
                onChange={handleChange}
              />
            </FormField1>
          </F1>
          <ButtonContainer>
            <WhiteButton type="submit" onClick={handleSubmit}>
              Submit
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
              transform: "translateX(-50%)",
              margin: "0 auto",
              width: "100%",
              height: "30%",
            }}
          />
        </Card>
      </Wrapper>
    </>
  );
}
