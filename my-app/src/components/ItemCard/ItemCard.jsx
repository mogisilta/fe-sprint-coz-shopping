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
    const {id, title, sub_title, brand_name, discountPercentage, price, image_url, brand_image_url, follower, bookMark, type}= item;
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image_url ? image_url : brand_image_url} alt={ItemType.Category}/>
                <AiFillStar className={bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(id,bookMark)}/>
            </div>
            {ItemType.Category===type && <h3>#{title}</h3>}
            {ItemType.Exhibition===type && <> <h3>{title}</h3> <p>{sub_title}</p> </>}
            {ItemType.Brand===type && 
                    <div className={styles.itemInfo}>
                        <h3>{brand_name}</h3>
                            <div>
                                <h3>관심고객수</h3>
                                <p>{follower}명</p>
                            </div>
                    </div>}
            {ItemType.Product===type && 
                    <div className={styles.itemInfo}>
                        <h3>{title}</h3>
                        <div>
                            <p className={styles.discount}>{discountPercentage}%</p>
                            <p>{price}원</p>
                        </div>
                    </div>}
        </div>
    )
}
