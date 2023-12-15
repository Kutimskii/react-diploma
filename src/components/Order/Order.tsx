import { useMakeOrderMutation } from "../../store/slicers/getProducts";
import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "../../store/slicers/cartSlice";
import { RootState } from "../../store/store";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Preloader } from "../share/Preloader/Preloader";
import { Error } from "../Error/Error";
import './order.style.css'
export const Order = () => {
  const cart = useSelector((state:RootState) => state.cartState);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ trigger, {data, isLoading, error} ] = useMakeOrderMutation();
  const phoneRef: React.MutableRefObject<null | HTMLInputElement>= useRef(null);
  const adressRef: React.MutableRefObject<null | HTMLInputElement>= useRef(null);
  const moveToMain = ()  => {
    dispatch(updateStore([]))
    navigate('/')
  }
  const createOrder = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderedItems = cart.map(el => {
      return {
        id: el.id,
        count: el.quantity,
        price: el.price,
      }
    })
    if(phoneRef.current && adressRef.current){
      trigger(JSON.stringify({
        owner: {
          phone: phoneRef.current.value,
          address: adressRef.current.value,
        },
        items:orderedItems.length < 1 ? null : orderedItems,
      }))
    }
  }
  if(isLoading) {
    return <Preloader/>
  }
  if (error){
    if('data' in error && 'error' in error) {
      return <Error
      error = {error.error}
      />
    }
  }
  if (data === null) {

    return (<div className="success_container" style={{maxWidth: '30rem', margin:'0 auto'}}>
      <div className="success_content">Ваш заказ успешно оформлен!</div>
      <button type="button" className="btn btn-outline-secondary" onClick={moveToMain}>ОК</button>
  </div>);
  }
  return (
    <section className="order">
    <h2 className="text-center">Оформить заказ</h2>
    <div className="card" style={{maxWidth: '30rem', margin:'0 auto'}}>
      <form className="card-body" onSubmit={(e)=> createOrder(e)}>
        <div className="form-group">
          <label htmlFor="phone" >Телефон</label>
          <input type="tel" ref={phoneRef} className="form-control" id="phone" placeholder="Ваш телефон" required/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес доставки</label>
          <input type="text"className="form-control"  ref={adressRef} id="address" placeholder="Адрес доставки" required/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="agreement" required/>
          <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
        </div>
        <button type="submit" className="btn btn-outline-secondary">Оформить</button>
      </form>
    </div>
  </section>
  );
} 