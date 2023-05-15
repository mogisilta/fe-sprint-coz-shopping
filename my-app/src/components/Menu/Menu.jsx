import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Menu.module.css";
import { SlPresent, SlStar } from 'react-icons/sl';

export default function Menu() {
    return (
        <div className = {styles.menu}>
            <p className = {styles.text}>코린이님, 안녕하세요!</p>
            <Link to="/products/list">
                <p className = {`${styles.text} ${styles.textLink}`}><SlPresent className = {styles.icon}/> 상품리스트 페이지</p>
            </Link>
            <Link to="/bookmark">
                <p className = {`${styles.text} ${styles.textLink}`}><SlStar className = {styles.icon}/> 북마크 페이지</p>
            </Link>
        </div>
    )
}