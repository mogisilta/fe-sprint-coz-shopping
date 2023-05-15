import React from "react";
import { useSelector } from "react-redux";
export default function ItemList() {
    let list = useSelector(state=>state);
    return (
        //location에 따라 북마크없는 아이템리스트 or 북마크된 아이템리스트 가져오기
        <p>아이템리스트</p>
    )
}