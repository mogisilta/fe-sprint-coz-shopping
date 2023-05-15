import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from '../actions/index';
import ItemContainer from '../components/ItemContainer/ItemContainer'

export default function Main() {

    const list = useSelector(state=>state);

    const noMarkList = list.filter((item)=>item.bookMark===false);
    const bookmarkList = list.filter((item)=>item.bookMark===true); 

    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list));
    },[list])

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);

    return (
        <section>
        <ItemContainer list={noMarkList} title={'상품 리스트'}/>
        <ItemContainer list={bookmarkList} title={'북마크 리스트'}/>
        </section>
    )
}