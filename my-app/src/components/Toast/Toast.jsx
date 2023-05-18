import React from "react";
import { useSelector } from 'react-redux';
import styles from "./Toast.module.css";

export default function Toast() {
  const { message, visible } = useSelector(state => state.toastReducer);
  
  return visible ? <div className={styles.toast}>{message}</div> : null;
}