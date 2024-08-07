import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // children here is SharedLayout
  const { user } = useSelector((store) => store.user);

  //If user doesnt exsists then naivate to  landing page
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
