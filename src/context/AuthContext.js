import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({
  currentUser: null,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  signInWithGoogle: async () => {},
});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function signup(name, email, password) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        await updateProfile(res.user, {
          displayName: name,
        });
        navigate("/create");
      }
    } catch (err) {
      console.log(err);
      if (err.message === "failed to create an account") {
        auth.currentUser?.delete();
      }
    }
  }

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function signInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          navigate("/create");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  async function logout() {
    await auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signInWithGoogle,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
