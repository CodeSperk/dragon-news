import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useState } from "react";
import app from '../firebase/firebase.config';

export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

const authInfo = {
  user, 
  loading,
  createUser
};

  return(
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes={
  children: PropTypes.node
}

export default AuthProvider;