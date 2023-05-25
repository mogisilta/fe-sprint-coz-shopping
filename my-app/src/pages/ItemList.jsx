import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import  ItemCard  from '../components/ItemCard/ItemCard';
import styles from './ItemList.module.css';
import Filter from '../components/Filter/Filter';
export default function ItemList() {
    const list = useSelector((state) => state.bookMarkUpdateReducer);
    const location = useLocation();
    const [filterType, setFilterType] = useState("All");
    
    useEffect(() => {
      localStorage.setItem("list", JSON.stringify(list));
    }, [list]);
  
    let filteredList = [];
  
    if (location.pathname === "/products/list") {
      filteredList = list.filter((item) => item.bookMark === false);
    } else {
      filteredList = list.filter((item) => item.bookMark === true);
    }
  
    if (filterType !== "All") {
      filteredList = filteredList.filter((item) => item.type === filterType);
    }
  
    return (
      <>
        <Filter setFilterType={setFilterType} />
        <ul className={styles.itemContainer}>
          {filteredList.map((item) => (
            <ItemCard item={item} />
          ))}
        </ul>
      </>
    );
  }