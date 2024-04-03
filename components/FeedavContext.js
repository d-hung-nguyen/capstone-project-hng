import React, {createContext, useContext, useState} from "react";

const NavigationItemsContext = createContext();

export const FeedNavItemsProvider = ({children}) => {
  const [activeCats, setActiveCats] = useState([]);

  // Example function to update activeCats
  const activateCat = (catId, catName) => {
    setActiveCats((prevCats) => [...prevCats, {id: catId, name: catName}]);
  };

  return (
    <NavigationItemsContext.Provider value={{activeCats, activateCat}}>
      {children}
    </NavigationItemsContext.Provider>
  );
};

export const useFeedNavItems = () => {
  const context = useContext(NavigationItemsContext);
  if (context === undefined) {
    throw new Error(
      "useFeedNavItems must be used within a FeedNavItemsProvider"
    );
  }
  return context;
};
