import React from "react";
import {useDispatch} from 'react-redux';
import styles from "./ItemCard.module.css";
import EmptyCard from "../EmptyCard/EmptyCard";
import { AiFillStar } from 'react-icons/ai';
import { update } from '../../actions/index';
import { showToast } from "../../actions/index";

export const ItemType = Object.freeze({
    Category: "Category",
    Exhibition: "Exhibition",
    Brand: "Brand",
    Product: "Product"
})

export default function ItemCard({item}) {
    const dispatch = useDispatch();
    const handleUpdate = (id,bookMark) => {
        const isMarked = bookMark;
        isMarked ? dispatch(showToast('북마크 삭제 됐어요')) : dispatch(showToast('북마크 추가 됐어요'));
        dispatch(update(id));
    }
    const cardInfo = {
        [ItemType.Category]: {imageSrc: 'image_url', text: ["title"], etc: ['#']},
        [ItemType.Exhibition]: {imageSrc: 'image_url', text: ["title","sub_title"], etc: []},
        [ItemType.Brand]: {imageSrc: 'brand_image_url', text: ["brand_name","follower"], etc: ['관심고객수','명']},
        [ItemType.Product]: {imageSrc: 'image_url', text: ["title","discountPercentage","price"], etc: ["%",'원']},
    }
    const data = cardInfo[item.type];
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={`${item[data.imageSrc]}`} alt={item.type}/>
                <AiFillStar className={item.bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(item.id,item.bookMark)}/>
            </div>
            <div className={styles.itemInfo}>
                {data.text.map((el,idx)=><p key={idx}>{item[el]}</p>)}
                {data.etc.map((el,idx)=><p key={idx}>{el}</p>)}
            </div>
        </div>
        )
        
}
