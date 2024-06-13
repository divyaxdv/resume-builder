import React, { useContext } from "react";

import resumeSvg from "../../assets/resume.svg";

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
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
            Create Now
          </Button>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </>
  );
}

export default Header;
