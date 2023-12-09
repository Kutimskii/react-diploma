import {useGetAnotherByCategoryQuery,
useGetAnotherCatalogQuery} from "../../store/slicers/getProducts";
import { useState,useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector } from 'react-redux';
import { Preloader } from "../share/Preloader/Preloader";
import { Item } from "../ProductCard/Item";
import { ICard } from "../ProductCard/Item";
export const AdditionalItems: React.FunctionComponent = () => {
const [offset, setOffset] = useState(6);
const filter: number = useSelector((state:RootState) => state.catalogFilter.value);
const idCategory = filter;
const {data, isLoading} = filter === 0 ? useGetAnotherCatalogQuery(offset) : useGetAnotherByCategoryQuery({idCategory,offset});
const [items, setItems] = useState<ICard[]>([]);
const addMore = () => {  
  setOffset((prev)=> prev += 6);
  if (items.length >= 6){
    return setItems((prevState:ICard[]):ICard[] => [...prevState,...data])}
  setItems(data)
}
useEffect(()=>{
  setOffset(6);
  setItems([])
},[filter])

  return (
    <>
    { isLoading ? <Preloader/> : <div className="row">{items.map((el:ICard):React.ReactElement => {
    return <Item
    key={el.id}
    props={el}/>
  })}</div>}
    {isLoading ? 
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={addMore}>Загрузить ещё</button>
    </div> : data.length >= 1 ?
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={addMore}>Загрузить ещё</button>
    </div> : <></>}

    </>
  );
}