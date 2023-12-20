import { Preloader } from "../share/Preloader/Preloader";
import { useGetCatalogByTextQuery } from "../../store/slicers/getProducts";
import { useSelector } from 'react-redux';
import { useState,useEffect } from "react";
import { Categories } from "../Categories/Categories";
import { RootState } from "../../store/store";
import { Item } from "../Item/Item";
import { useRef } from "react";
import { ErrorLoad } from "../ErrorLoad/ErrorLoad";
import { ICard } from "../Item/Item";
import "./catalog.styles.css"

export const Catalog: React.FunctionComponent<{inputStyle:string}> = ({inputStyle}) => {
  const inputRef:React.MutableRefObject<HTMLInputElement | null> = useRef(null)
  const [items, setItems] = useState<ICard[]>([]);
  const [isAnyItems,setAnyItems] = useState(true)
  const text = useSelector((state:RootState) => state.catalogFilter.searchText)
  const [offset, setOffset] = useState(0);
  const filter: number = useSelector((state:RootState) => state.catalogFilter.value);
  const  {data,isLoading, error, refetch, isFetching} =  useGetCatalogByTextQuery({inputText:inputRef.current?.value ? inputRef.current?.value : '',idCategory:filter, offset});
  const handler = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateItems();
  }
  const updateItems = async () => {
    setAnyItems(true)
    refetch();
  }
  const addMore = () => { 
    setOffset((prev)=> prev += 6);
  }
  useEffect(() => {
    setOffset(0);
    setAnyItems(true);
  },[filter])
  useEffect(() => {
    if(data){
      if(data.length < 6){
        setAnyItems(false);
      }
      if(offset >= 6 && data){
        return setItems((prevState:ICard[]):ICard[] => [...prevState,...data])
      }
      setItems(data)
    }
  },[data])

  if(error){
    if('error' in error) {
        return <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <form className={`catalog-search-form form-inline ${inputStyle}`} onSubmit={(e)=>handler(e)}>
          <input className="form-control" placeholder="Поиск" 
          defaultValue={text} autoFocus ref = {inputRef}/>
        </form>
        <Categories/>
         <ErrorLoad
        error={error.error}
        updateFetch={()=>refetch()}
      />
      </section>
    }
  }
  return (
    <section className="catalog">
    <h2 className="text-center">Каталог</h2>
    <form className={`catalog-search-form form-inline ${inputStyle}`} onSubmit={(e)=>handler(e)}>
      <input className="form-control" placeholder="Поиск" 
      defaultValue={text} autoFocus ref = {inputRef}/>
    </form>
    <Categories/>
      {isLoading || isFetching? <Preloader/> : items.length > 1 ?
    <div className="row">
    {items?.map((el, index):React.ReactElement => {
      return <Item
      key={index}
      props={el}/> 
    })}
    </div> : <div className="text-center">
      К сожалению, по вашему запросу ничего не найдено
    </div>}
    <div className="text-center">
      <button className={`btn btn-outline-primary ${isAnyItems ? '' : 'deactive'}`} onClick={addMore}>Загрузить ещё</button>
    </div>
  </section>);
}