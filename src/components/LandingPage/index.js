import React, { useContext } from "react";



import styles from "./landing.module.css";
import NavBar from "../Navbar";
import { Button } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleClick() {
    if (currentUser) {
      navigate("/create");
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.center}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume.</p>
            <p className={styles.heading}> <span>It's free</span></p>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
            Create Now
          </Button>
       
        </div> 
      </div>
    </>
  );
}

export default Header;
