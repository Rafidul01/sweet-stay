import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider);
    }
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node,
}
export default AuthProvider;