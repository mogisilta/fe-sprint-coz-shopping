import React from "react";
import styles from "./Filter.module.css";
import All from "../../images/All.jpg";
import Brand from "../../images/Brand.jpg";
import Category from "../../images/Category.jpg";
import Exhibition from "../../images/Exhibition.jpg";
import Product from "../../images/Product.jpg";
//src경로로 이미지 불러올 시, 계속 엑박이 떠서 import해서 진행.

const filterData = [{imageSrc: All, text: "전체", type: "All"},
    {imageSrc: Brand, text: "브랜드", type: "Brand"},
    {imageSrc: Category, text: "카테고리", type: "Category"},
    {imageSrc: Exhibition, text: "기획전", type: "Exhibition"}, 
    {imageSrc: Product, text: "상품", type: "Product"}]

    export default function Filter({ setFilterType }) {
        const handleFilter = (type) => {
          setFilterType(type);
        };
        return (
          <ul className={styles.filterContainer}>
            {filterData.map((data, idx) => (
              <li className={styles.filterInfo} key={idx} onClick={() => handleFilter(data.type)}>
                <img className={styles.filterImage} src={data.imageSrc} alt="filterImage"/>
                <p>{data.text}</p>
              </li>
            ))}
          </ul>
        );
      }