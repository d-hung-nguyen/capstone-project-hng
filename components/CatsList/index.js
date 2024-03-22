import React, { useState, useEffect } from 'react';
import { CatsListWrapper, StyledCatsList } from '@/styles';

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

    return (
        <>
            {cats.map(cat => (
                <CatsListWrapper key={cat._id}>
                    <StyledCatsList>
                        <h3>{cat.name}</h3>
                        <p><strong>Gender:</strong> {cat.gender}</p>
                        <p><strong>Breed:</strong> {cat.breed}</p>
                        <p><strong>Color:</strong> {cat.color}</p>
                        <p><strong>Date of birth:</strong> {cat.dateOfBirth}</p>
                        <p><strong>Identity number:</strong> {cat.identityNumber}</p>
                        <p><strong>Transponder code:</strong> {cat.transponderCode}</p>
                        <p><strong>Active:</strong> {cat.active ? 'Yes' : 'No'}</p>
                    </StyledCatsList>
                </CatsListWrapper>
            ))}
        </>
    )
}
