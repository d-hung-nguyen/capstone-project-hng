import React, {useState} from "react";
import {
  F1,
  BlackButton,
  HeaderCard,
  Input,
  Label,
  Select,
  WhiteButton,
  FormField,
  Card,
  H21,
  P11,
  CheckboxContainer,
  FormField1,
  H31,
  ButtonContainer,
  H32,
  H4,
} from "@/components/StyledComponents";
import {Wrapper} from "../boxes";

function CatEdit({cat, onSave, onCancel}) {
  const [name, setName] = useState(cat.name);
  const [breed, setBreed] = useState(cat.breed || "");
  const [gender, setGender] = useState(cat.gender || "");
  const [color, setColor] = useState(cat.color || "");
  const [dateOfBirth, setDateOfBirth] = useState(
    cat.dateOfBirth ? cat.dateOfBirth.substring(0, 10) : ""
  );
  const [identityNumber, setIdentityNumber] = useState(
    cat.identityNumber || ""
  );
  const [transponderCode, setTransponderCode] = useState(
    cat.transponderCode || ""
  );
  const [active, setActive] = useState(cat.active || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...cat,
      name,
      breed,
      gender,
      color,
      dateOfBirth,
      identityNumber,
      transponderCode,
      active,
    });
  };

  const handleReset = () => {
    setCatData({...catData, submitted: false});
  };
  return (
    <>
      <Wrapper>
        <HeaderCard>
          <H32>
            Edit profile for <br /> <H4>{cat.name}</H4>
          </H32>
        </HeaderCard>
        <Card>
          <F1 onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">Name:</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="breed">Breed:</Label>
              <Input
                id="breed"
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="gender">Gender:</Label>
              <Select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option value="">- - - </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormField>
            <FormField>
              <Label htmlFor="color">Color:</Label>
              <Input
                id="color"
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="dateOfBirth">Dob:</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="identityNumber">ID Nr.:</Label>
              <Input
                id="identityNumber"
                type="text"
                value={identityNumber}
                onChange={(e) => setIdentityNumber(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="transponderCode">Transponder:</Label>
              <Input
                id="transponderCode"
                type="text"
                value={transponderCode}
                onChange={(e) => setTransponderCode(e.target.value)}
              />
            </FormField>

            <FormField1>
              <Label htmlFor="active">Active:</Label>
              <input
                id="active"
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />
            </FormField1>
          </F1>
          <ButtonContainer>
            <WhiteButton type="submit" onClick={handleSubmit}>
              {" "}
              Save
            </WhiteButton>
            <BlackButton type="button" onClick={onCancel}>
              Cancel
            </BlackButton>
          </ButtonContainer>
        </Card>
      </Wrapper>
    </>
  );
}

export default CatEdit;
