import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { setInitial } from '../actions/index';
import { fetchData } from '../thunk/index';
import ItemContainer from '../components/ItemContainer/ItemContainer'
import Toast from "../components/Toast/Toast";
export default function Main() {

    const list = useSelector(state=>state.bookMarkUpdateReducer);

    const isLocalStorage = localStorage.getItem('list');//
    
    const noMarkList = list.filter((item)=>item.bookMark===false);
    
    const bookmarkList = list.filter((item)=>item.bookMark===true);
    
    useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
    },[list])
    
    const dispatch = useDispatch();

    useEffect(() => {
      isLocalStorage ? dispatch(setInitial(JSON.parse(isLocalStorage))):dispatch(fetchData()) ;
    }, []);

    return (
        <section>
          <ItemContainer list={noMarkList} title={'상품 리스트'}/>
          <ItemContainer list={bookmarkList} title={'북마크 리스트'}/>
          <Toast/>
        </section>
    )
}