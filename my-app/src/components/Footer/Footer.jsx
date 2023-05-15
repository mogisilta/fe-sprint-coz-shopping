import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
    return (
        <footer>
        <p className={styles.text}>개인정보 처리방침 | 이용약관</p>
        <p className={styles.text}>All rights reserved @ Codestates</p>
        </footer>
    )
}