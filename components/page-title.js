import React from "react";

const usePageTitle = () => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    setTitle(window.location.pathname);
  }, []);

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return {
    title,
    updateTitle,
  };
};

const PageTitle = ({title}) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
