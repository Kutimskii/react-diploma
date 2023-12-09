import { Preloader } from "../share/Preloader/Preloader";
import { useGetTopSalesQuery } from "../../store/slicers/getProducts";
import { Item } from "../ProductCard/Item";
import { useNavigate } from "react-router-dom";
export const TopSales:React.FunctionComponent = () => {
  const navigate = useNavigate();
  const {data, isLoading, error } = useGetTopSalesQuery();
  if(error){
    if ('originalStatus' in error){
      error.originalStatus === 404 ? navigate('/404') : null
    }
  }
  return (      
  <section className="top-sales">
  <h2 className="text-center">Хиты продаж!</h2>
  {isLoading? <Preloader/> :
  <div className="row">
  {data?.map((el):React.ReactElement  => {
    return <Item
    key={el.id}
    props={el}/>
  })}
  </div>}
</section>);
}