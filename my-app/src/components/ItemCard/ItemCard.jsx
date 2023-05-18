import React,{useState} from "react";
import styles from "./ItemCard.module.css";
import CardImage from "../CardImage/CardImage";
import Modal from "../Modal/Modal";

export const ItemType = Object.freeze({
    All: "All",
    Category: "Category",
    Exhibition: "Exhibition",
    Brand: "Brand",
    Product: "Product"
})

export default function ItemCard({item}) {
    const {title, sub_title, brand_name, discountPercentage, price, follower, type}= item;
    const [showModal,setModal] = useState(false);

    const handleModal= () => {
        setModal(!showModal);
    }

    return (
        <>
        <div className={styles.card} onClick={handleModal}>
            <CardImage item={item}/>
            {/* ItemType별로 카드 정보를 표시 */}
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
        {showModal && <Modal item={item} handleModal={handleModal}/>}
        </>
    )
}
