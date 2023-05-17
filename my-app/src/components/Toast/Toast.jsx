import React from "react";
import { useSelector } from 'react-redux';

export default function Toast() {
  const { message, visible } = useSelector(state => state.toastReducer);
  
  return visible ? <div className="toast">{message}</div> : null;
}