import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';

export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  //To Create user with email & password
  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // To login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //To logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }


useEffect(()=> {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log(currentUser);
    setUser(currentUser);
    setLoading(false);
  })
  return() => {
    unSubscribe();
  }
})

const authInfo = {
  user, 
  loading,
  createUser,
  loginUser,
  logOutUser
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