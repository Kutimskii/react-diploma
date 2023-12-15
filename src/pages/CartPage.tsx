import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { Cart } from "../components/Cart/Cart";
import { MainContent } from "../components/MainContent/MainContent";
import { Order } from "../components/Order/Order";
export const CartPage:React.FunctionComponent = () => {
  return(
  <>
  <Header/>
  <MainContent>
    <Banner/>
    <Cart/>
    <Order/>
  </MainContent>
  <Footer/>
  </>);
}