import { Helmet } from "react-helmet-async";

// Not using Helmet as it is giving error.

const PageTitle = ({ title }) => {
  return (
    // <Helmet>
      <title>
        {title} | Yum Reactjs - Multipurpose Food Tailwind CSS Template
      </title>
    // </Helmet>
  );
};

export default PageTitle;