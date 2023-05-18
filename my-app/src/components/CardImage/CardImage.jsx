import { AiFillStar } from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import { update } from '../../actions/index';
import { showToast } from "../../actions/index";
import styles from "./CardImage.module.css";
import ItemType from "../ItemCard/ItemCard";
export default function CardImage({item}) {
    const dispatch = useDispatch();
    const handleUpdate = (id,bookMark,event) => {
        event.stopPropagation();
        const isMarked = bookMark;
        isMarked ? dispatch(showToast('북마크 삭제 됐어요')) : dispatch(showToast('북마크 추가 됐어요'));
        dispatch(update(id));
    }
    const {id, image_url, brand_image_url, bookMark}= item;
    return(
        <div className={styles.imageContainer}>
            <img className={styles.image} src={image_url ? image_url : brand_image_url} alt={ItemType.Category}/>
            <AiFillStar className={bookMark ? styles.starfilled : styles.star} onClick={(event)=>handleUpdate(id,bookMark,event)}/>
        </div>
    )
}