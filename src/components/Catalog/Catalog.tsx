import { Preloader } from "../share/Preloader/Preloader";
import { useGetCatalogQuery,useGetCatalogByCategoryQuery,useLazyGetCatalogByTextQuery } from "../../store/slicers/getProducts";
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from "react";
import { Categories } from "../Categories/Categories";
import { changeCategory } from "../../store/slicers/catalogSlice";
import { RootState } from "../../store/store";
import { Item } from "../Item/Item";
import { useNavigate } from "react-router-dom";
import { ICard } from "../Item/Item";
import "./catalog.styles.css"
import { AdditionalItems } from "../AdditionalItems/AdditionalItems";
export const Catalog: React.FunctionComponent<{inputStyle:string}> = ({inputStyle}) => {
  const  dispatch = useDispatch();
  const [items, setItems] = useState<ICard[] | null | undefined>(null)
  const text = useSelector((state:RootState) => state.catalogFilter.searchText)
  const navigate = useNavigate();
  const filter: number = useSelector((state:RootState) => state.catalogFilter.value);
  const {data, isLoading, error } = filter === 0 ? useGetCatalogQuery() : useGetCatalogByCategoryQuery(filter);
  const [ trigger, response ] = useLazyGetCatalogByTextQuery()
  const handler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems(response.data)
  }
  const searchItems = (e:React.ChangeEvent<HTMLInputElement>) => {
    trigger(e.target.value);
    if (response.data.length < 1 ){
      dispatch(changeCategory(999))
    }
  }
  useEffect(()=>{
    setItems(data)
  },[data])
  if(error){
    if ('originalStatus' in error){
      error.originalStatus === 404 ? navigate('/404') : null
    }
  }
  return (
    <section className="catalog">
    <h2 className="text-center">Каталог</h2>
    <form className={`catalog-search-form form-inline ${inputStyle}`} onSubmit={(e)=>handler(e)}>
      <input className="form-control" placeholder="Поиск" defaultValue={text} autoFocus onChange={(e)=>searchItems(e)}/>
    </form>
    <Categories/>
    {isLoading? <Preloader/> :
    <div className="row">
    {items?.map((el):React.ReactElement => {
      return <Item
      key={el.id}
      props={el}/>
    })}
    </div>}
    <AdditionalItems/>
  </section>);
}