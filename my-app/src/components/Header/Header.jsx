import React,{useState} from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import { RxHamburgerMenu } from 'react-icons/rx';
import Menu from "../Menu/Menu";
export default function Header() {
    const [isShow,setShow] = useState(false);
    const handleShow = () => {
        setShow(!isShow);
    }

    return (
        <header>
            <Link to='/' className={styles.textLogo}>
                <img src="img/codestates.jpg" alt="codestates_logo"/>
                <h1>COZ Shopping</h1>
            </Link>
            <div className={styles.menuContainer}>
                <RxHamburgerMenu className={styles.hamburger} onClick={handleShow}/>
                {isShow ? <Menu className={styles.dropDown}/> : null}
            </div>
        </header>
    )
}