import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const location = useLocation().pathname;
  console.log(location);

  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default Protected;
