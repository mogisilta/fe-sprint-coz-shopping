import React from "react";
import styles from "./Modal.module.css";
import { AiOutlineClose } from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { update } from '../../actions/index';
import { showToast } from "../../actions/index";
import ItemType from "../ItemCard/ItemCard";
// modal_imageContainer modal_image modal_starfilled modal_star
export default function Modal({item, handleModal}) {
    const title = item.title ? item.title : item.brand_name;
    const dispatch = useDispatch();
    const handleUpdate = (id,bookMark) => {
        const isMarked = bookMark;
        isMarked ? dispatch(showToast('북마크 삭제 됐어요')) : dispatch(showToast('북마크 추가 됐어요'));
        dispatch(update(id));
    }
    const {id, image_url, brand_image_url, bookMark}= item;
    return (
        <div className={styles.modalScreen}>
            <div className={styles.imageContainer}>
                <AiOutlineClose className={styles.closeButton} onClick={handleModal}/>
                <img className={styles.image} src={image_url ? image_url : brand_image_url} alt={ItemType.Category}/>
                <div className={styles.modalInfo}>
                    <p className={styles.title}>{title}</p>
                    <AiFillStar className={bookMark ? styles.starfilled : styles.star} onClick={()=>handleUpdate(id,bookMark)}/>
                </div>
            </div>
        </div>
    )
}