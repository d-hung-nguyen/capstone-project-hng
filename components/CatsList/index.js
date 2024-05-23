/** @format */

import {useState, useEffect} from "react";
import {
  BlackButton,
  Card,
  H21,
  HeaderCard,
  StyledFlex,
  WhiteButton,
} from "@/components/StyledComponents";
import CatEdit from "../CatEdit";

export default function CatsList() {
  const [cats, setCats] = useState([]);
  const [editingCat, setEditingCat] = useState(null);

  useEffect(() => {
    async function fetchCats() {
      try {
        const response = await fetch("/api/cats");
        if (!response.ok) throw new Error("Network response was not ok.");
        const catsData = await response.json();
        setCats(catsData.data);
      } catch (error) {
        console.error("Failed to fetch cats:", error);
      }
    }
    fetchCats();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await fetch(`/api/cats?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete the cat.");
      setCats((prevCats) => prevCats.filter((cat) => cat._id !== id));
    } catch (error) {
      console.error("Failed to delete cat:", error);
    }
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
      <HeaderCard>
        <H21>List of cats</H21>
      </HeaderCard>
      <StyledFlex>
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
            <>
              <Card key={cat._id}>
                <h3>{cat.name}</h3>

                <p>
                  <strong>Gender:</strong> {cat.gender}
                </p>
                <p>
                  <strong>Breed:</strong> {cat.breed}
                </p>
                <p>
                  <strong>Color:</strong> {cat.color}
                </p>
                <p>
                  <strong>Date of birth:</strong> {cat.dateOfBirth}
                </p>
                <p>
                  <strong>Identity number:</strong> {cat.identityNumber}
                </p>
                <p>
                  <strong>Transponder code:</strong> {cat.transponderCode}
                </p>
                <p>
                  <strong>Active:</strong> {cat.active ? "Yes" : "No"}
                </p>

                <StyledFlex>
                  <WhiteButton onClick={() => handleEditClick(cat)}>
                    Edit
                  </WhiteButton>
                  <BlackButton onClick={() => handleDelete(cat._id)}>
                    Delete
                  </BlackButton>
                </StyledFlex>
              </Card>
            </>
          );
        })}
      </StyledFlex>
    </>
  );
}
