import React from "react";
import welcome from "../../images/welcome.png";
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.bodyPhoto}>
      <img width="100%" src={welcome} alt="welcome" />
    </div>
  );
}
