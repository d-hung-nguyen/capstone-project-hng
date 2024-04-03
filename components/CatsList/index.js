import {useState, useEffect} from "react";
import {
  BlackButton,
  ButtonContainer,
  Card,
  Card2,
  Card3,
  EditOverlay,
  F1,
  FormField,
  FormField1,
  H21,
  H31,
  H32,
  Label,
  WhiteButton,
} from "@/components/StyledComponents";
import CatEdit from "../CatEdit";
import {useRouter} from "next/router";
import {Box, Boxtitle, ElevatedBox, Wrapper} from "../boxes";
import {useFeedNavItems} from "../FeedavContext";
export default function CatsList() {
  const [cats, setCats] = useState([]);
  const [editingCat, setEditingCat] = useState(null);
  const router = useRouter();
  const {activateCat} = useFeedNavItems(); // Assuming this updates your context or state for navigation

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
  const handleActivate = async (cat) => {
    console.log(cat);

    if (!cat._id) {
      console.error("Cat ID is undefined.");
      return;
    }

    try {
      const response = await fetch(`/api/cats/${cat._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          active: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update the cat.");
      }
      console.log("Navigating to cat ID:", cat._id); // Ensure this is not undefined
      await router.push(`/cats/${encodeURIComponent(cat._id)}`);
    } catch (error) {
      console.error("Activation error:", error.message);
    }
  };

  return (
    <>
      <Wrapper>
        <H21>List of cats</H21>

        {cats.map((cat) => {
          if (editingCat && cat._id === editingCat._id) {
            return (
              <EditOverlay key={cat._id}>
                <CatEdit
                  cat={editingCat}
                  onCancel={handleEditCancel}
                  onSave={handleEditSave}
                />
              </EditOverlay>
            );
          }

          return (
            <>
              <Card key={cat._id}>
                <H32>{cat.name}</H32>
                <Card2>
                  <FormField1>
                    <label htmlFor="name">Name </label>
                    <h4>: {cat.name}</h4>
                  </FormField1>
                  <FormField1>
                    <label htmlFor="breed">Breed</label>
                    <h4>: {cat.breed}</h4>
                  </FormField1>
                  <FormField1>
                    <label htmlFor="Date of Birth">Dob</label>
                    <h4>
                      :{" "}
                      {new Date(cat.dateOfBirth)
                        .toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/ /g, " ")}
                    </h4>
                  </FormField1>

                  <FormField1>
                    <label htmlFor="Identity Number">ID Nr.</label>
                    <h4>: {cat.identityNumber}</h4>
                  </FormField1>
                  <FormField1>
                    <label htmlFor="Transponder Code">Transponder</label>
                    <h4>: {cat.transponderCode}</h4>
                  </FormField1>
                  <FormField1>
                    <label htmlFor="Active">Active</label>
                    <h4>{cat.active ? ": Yes" : ": No"}</h4>
                  </FormField1>
                </Card2>
                <ButtonContainer>
                  <WhiteButton onClick={() => handleEditClick(cat)}>
                    Edit
                  </WhiteButton>
                  <WhiteButton onClick={() => handleActivate(cat)}>
                    Activate
                  </WhiteButton>
                  <BlackButton onClick={() => handleDelete(cat._id)}>
                    Delete
                  </BlackButton>
                </ButtonContainer>
              </Card>
            </>
          );
        })}
      </Wrapper>
    </>
  );
}
