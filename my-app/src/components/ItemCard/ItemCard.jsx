import React from "react";
import {useDispatch} from 'react-redux';
import styles from "./ItemCard.module.css";
import EmptyCard from "../EmptyCard/EmptyCard";
import { AiFillStar } from 'react-icons/ai';
import { update } from '../../actions/index';

export default function ItemCard({item}) {
    const dispatch = useDispatch();
    const handleUpdate = (id) => {
        dispatch(update(id));
    }
    switch(item.type){
        case "Category":
            return (
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${item.image_url}`} alt='Category'/>
                        <AiFillStar className={item.bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(item.id)}/>
                    </div>
                    <h3>#{item.title}</h3>
                </div>
            )
        case "Exhibition":
            return (
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${item.image_url}`} alt='Exhibition'/>
                        <AiFillStar className={item.bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(item.id)}/>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.sub_title}</p>
                </div>
            )
        case "Brand":
            return (
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${item.brand_image_url}`} alt='Brand'/>
                        <AiFillStar className={item.bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(item.id)}/>
                    </div>
                    <div className={styles.itemInfo}>
                        <h3>{item.brand_name}</h3>
                        <div>
                            <h3>관심고객수</h3>
                            <p>{item.follower}명</p>
                        </div>
                    </div>
                </div>
            )
        case "Product":
            return (
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${item.image_url}`} alt='Product'/>
                        <AiFillStar className={item.bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(item.id)}/>
                    </div>
                    <div className={styles.itemInfo}>
                        <h3>{item.title}</h3>
                        <div>
                            <p className={styles.discount}>{item.discountPercentage}%</p>
                            <p>{item.price}원</p>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <EmptyCard/>
            )
    }
    
}