import { CatsListWrapper, StyledCatsList, StyledDeleteButton, StyledEditButton } from '@/styles';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SaveButton from '../Button';


export default function CatsList() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function fetchCats() {
            const response = await fetch('/api/cats');
            const catsData = await response.json();
            setCats(catsData.data);
        }
        fetchCats();
    }, []);

    async function handleDelete(id) {
        await fetch(`/api/cats?id=${id}`, {
            method: 'DELETE'
        });
        setCats(prevCats => prevCats.filter(cat => cat._id !== id));
    }

    async function handleUpdate(catToUpdate) {
        const response = await fetch('/api/cats', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(catToUpdate)
        });
        const updatedCatData = await response.json();
        setCats(prevCats =>
            prevCats.map(cat =>
                cat._id === updatedCatData.data._id ? updatedCatData.data : cat)
        );
    }

    return (
        <>
            {cats.map(cat => (
                <CatsListWrapper key={cat._id}>
                    <StyledCatsList>
                        <h3>{cat.name}</h3>
                        <label>Age:</label>
                        <p>{cat.age} years old</p>
                        <label>Breed:</label>
                        <p>{cat.breed}</p>
                    </StyledCatsList>
                    <StyledEditButton onClick={() => handleUpdate(cat)} >
                        Edit
                    </StyledEditButton>
                    <StyledDeleteButton onClick={() => handleDelete(cat._id)}>
                        Delete
                    </StyledDeleteButton>
                </CatsListWrapper>
            ))}
            </>
    );
}

