import React from "react";
import styles from "./ItemContainer.module.css";
import ItemCard from '../ItemCard/ItemCard';
import EmptyCard from "../EmptyCard/EmptyCard";

export default function ItemContainer({list, title}) {
    let categoryItems = list.filter((item)=>item.type==='Category');
    let categoryItem = categoryItems[getRandomInt(categoryItems.length)];

    let exhibitionItems = list.filter((item)=>item.type==='Exhibition');
    let exhibitionItem = exhibitionItems[getRandomInt(exhibitionItems.length)];

    let brandItems = list.filter((item)=>item.type==='Brand');
    let brandItem = brandItems[getRandomInt(brandItems.length)];

    let productItems =list.filter((item)=>item.type==='Product');
    let productItem = productItems[getRandomInt(productItems.length)];

    return (
        <section className={styles.body}>
        <h1 className={styles.itemName}>{title}</h1>
        <ul className={styles.itemContainer}>
            {productItem ? <ItemCard key={productItem.id} item={productItem}/> : <EmptyCard/>}
            {categoryItem ? <ItemCard key={categoryItem.id} item={categoryItem}/>: <EmptyCard/>}
            {exhibitionItem ? <ItemCard key={exhibitionItem.id} item={exhibitionItem}/>: <EmptyCard/>}
            {brandItem ? <ItemCard key={brandItem.id} item={brandItem}/>: <EmptyCard/>}
        </ul>
        </section>
    )
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }