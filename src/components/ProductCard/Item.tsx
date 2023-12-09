import { Link } from "react-router-dom"
export interface ICard {
  category: number
  id: number
  images: string[],
  price: number
  title: string
}

export const Item: React.FunctionComponent<{props:ICard}> = ({props}) => {
  console.log
  return (
    <div className="col-4">
    <div className="card">
      <img src={props.images[0]}
        className="card-img-top img-fluid" alt="Босоножки 'Keira'"/>
      <div className="card-body">
        <p className="card-text">Босоножки 'Keira'</p>
        <p className="card-text">7 600 руб.</p>
        <Link to = {`/products/${props.id}.html`} className="btn btn-outline-primary">Заказать</Link>
      </div>
    </div>
  </div>
  )
}