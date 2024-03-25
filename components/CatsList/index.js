import { useState, useEffect } from "react";
import { BlueButton, CatsListWrapper, RedButton, StyledCatsList } from "@/components/StyledComponents";
import CatEdit from "../CatEdit";

export default function CatsList() {
  const [cats, setCats] = useState([]);
  const [editingCat, setEditingCat] = useState(null);

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
          method: 'DELETE',
      });
      setCats((prevCats) => prevCats.filter((cat) => cat._id !== id));
  }

  function handleEditClick(cat) {
      setEditingCat(cat);
  }

  function handleEditCancel() {
      setEditingCat(null);
  }

  function handleEditSave(updatedCat) {
      setCats((prevCats) =>
          prevCats.map((cat) => (cat._id === updatedCat._id ? updatedCat : cat))
      );
      setEditingCat(null);
  }

  return (
    <>
        {cats.map((cat) => {
            if (editingCat && cat._id === editingCat._id) {
                return (
      <CatEdit  
                        key={cat._id}
                        cat={editingCat}
                        onCancel={handleEditCancel}
                        onSave={handleEditSave}
                    />  
                );
            }

            return (
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
     <BlueButton onClick={() => handleEditClick(cat)}> Edit</BlueButton>
     <RedButton onClick={() => handleDelete(cat._id)}> Delete</RedButton>
        </CatsListWrapper>
             );
            })}
        </>
    );
}


