import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
  const {user} = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);


  if(user){
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRout.propTypes={
  children:PropTypes.node
}

export default PrivateRout;