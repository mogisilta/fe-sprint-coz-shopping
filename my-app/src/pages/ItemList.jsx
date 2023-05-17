import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import  ItemCard  from '../components/ItemCard/ItemCard';
import styles from './ItemList.module.css';

export default function ItemList() {
    let list = useSelector(state=>state.bookMarkUpdateReducer);
    const location = useLocation();
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list));
        },[list])
        
    //location에 따라 북마크없는 아이템리스트 or 북마크된 아이템리스트 가져오기
    let filteredList = null;
    if(location.pathname==='/products/list'){
        filteredList = list.filter((item)=>item.bookMark===false);
    }else{
        filteredList = list.filter((item)=>item.bookMark===true);
    }

    return (
        <ul className={styles.itemContainer}>
        {filteredList && filteredList.map((item) => <ItemCard item={item}/>)}
        </ul>
    )
}