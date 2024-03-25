import React, { useState } from 'react';
import { BlueButton, RedButton } from '../StyledComponents';

function CatEdit({ cat, onSave, onCancel }) {
    const [name, setName] = useState(cat.name);
    const [breed, setBreed] = useState(cat.breed || '');
    const [gender, setGender] = useState(cat.gender || '');
    const [color, setColor] = useState(cat.color || '');
    const [dateOfBirth, setDateOfBirth] = useState(cat.dateOfBirth ? cat.dateOfBirth.substring(0, 10) : '');
    const [identityNumber, setIdentityNumber] = useState(cat.identityNumber || '');
    const [transponderCode, setTransponderCode] = useState(cat.transponderCode || '');
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

    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
        
                <label htmlFor="breed">Breed:</label>
                <input
                    id="breed"
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                />
        
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
        
                <label htmlFor="color">Color:</label>
                <input
                    id="color"
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
        
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                    id="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
        
                <label htmlFor="identityNumber">Identity Number:</label>
                <input
                    id="identityNumber"
                    type="text"
                    value={identityNumber}
                    onChange={(e) => setIdentityNumber(e.target.value)}
                />
        
                <label htmlFor="transponderCode">Transponder Code:</label>
                <input
                    id="transponderCode"
                    type="text"
                    value={transponderCode}
                    onChange={(e) => setTransponderCode(e.target.value)}
                />
        
                <label htmlFor="active">Active:</label>
                <input
                    id="active"
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                />
                <br />
                
            <BlueButton type="submit"> Save</BlueButton>
            <RedButton type="button" onClick={onCancel}>Cancel</RedButton>
        </form>
    );
}

export default CatEdit;
