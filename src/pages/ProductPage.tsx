import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { MainContent } from "../components/MainContent/MainContent";
import { ProductCard } from "../components/ProductCard/ProductCard";
export const ProductPage:React.FunctionComponent = () => {
  return (
  <>
  <Header/>
  <MainContent>
    <Banner/>
    <ProductCard/>
  </MainContent>
  <Footer/>
  </>)
}