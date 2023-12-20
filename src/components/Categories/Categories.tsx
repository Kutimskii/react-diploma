import { Link } from "react-router-dom";

import { useGetCategoriesQuery } from "../../store/slicers/getProducts";
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from "../../store/slicers/catalogSlice";
import { RootState } from "../../store/store";
import { ErrorLoad } from "../ErrorLoad/ErrorLoad";
export const Categories: React.FunctionComponent = () => {
  const {data, error, refetch} = useGetCategoriesQuery();
  const filter = useSelector((state:RootState) => state.catalogFilter.value)
  const dispatch = useDispatch();
  if(error) {
    if('error' in error) {
      return <ErrorLoad
      error={error.error}
      updateFetch={()=>refetch()}
      />
    }
 }
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <Link to = '' className = {`nav-a ${filter === 0 ? 'active': ''}`} onClick={()=> dispatch(changeCategory(0))}>Все</Link>
      </li>
      {data?.map(el => {
        return <li className="nav-item" key={el.id}>
        <Link to = '' className = {`nav-a ${filter === el.id ? 'active': ''}`} onClick={()=> dispatch(changeCategory(el.id))}>{el.title}</Link>
      </li>
      })}
    </ul>);
}