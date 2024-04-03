import {useRouter} from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
// Assuming the fetcher function is correctly parsing the JSON response
const CatDetails = () => {
  const router = useRouter();
  const {catId} = router.query;

  // Use the catId to fetch cat details. Note: SWR will not fetch until catId is defined.
  const {data, error} = useSWR(catId ? `/api/cats/${catId}` : null, fetcher);

  // Since your API returns { success: true, data: cat }, ensure to access `data` correctly.
  // If the fetch was successful, `data` should contain { success, data: cat }.
  const cat = data?.data; // Adjust this line to extract the cat from the response correctly.

  // Handle loading state
  if (!data && !error) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Failed to load the cat's details.</div>;

  // Check for the case when `catId` is defined, but no cat is found for that ID.
  if (data && !cat) return <div>Cat not found.</div>;

  // Now we can safely access `cat` since we've handled loading, error, and data presence states
  return (
    <div>
      <h1>Cat Details: {cat.name}</h1>
      {/* Display more details about the cat */}
    </div>
  );
};

export default CatDetails;
