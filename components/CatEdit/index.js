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
} from "@/components/StyledComponents";

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
    setCatData({ ...catData, submitted: false });
  };
  return (
    <>
      <HeaderCard>
        <H21>
          Edit profile for
          <br />
        </H21>
        <P11>{cat.name}</P11>
      </HeaderCard>
      <Card>
        <HeaderCard>
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
                <option value="">Select Gender</option>
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
              <Label htmlFor="dateOfBirth">Date of Birth:</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="identityNumber">Identity Number:</Label>
              <Input
                id="identityNumber"
                type="text"
                value={identityNumber}
                onChange={(e) => setIdentityNumber(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="transponderCode">Transponder Code:</Label>
              <Input
                id="transponderCode"
                type="text"
                value={transponderCode}
                onChange={(e) => setTransponderCode(e.target.value)}
              />
            </FormField>

            <CheckboxContainer>
              <FormField>
                <Label htmlFor="active">Active:</Label>
              </FormField>

              <FormField1>
                <Input
                  id="active"
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                />
              </FormField1>
            </CheckboxContainer>
          </F1>
        </HeaderCard>
      </Card>
              <WhiteButton type="submit"> Save</WhiteButton>
              <BlackButton type="button" onClick={onCancel}>
        Cancel
      </BlackButton>
    </>
  );
}

export default CatEdit;
