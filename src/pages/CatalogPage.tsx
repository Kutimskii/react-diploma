import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { MainContent } from "../components/MainContent/MainContent";
import { Catalog } from "../components/Catalog/Catalog";
export const CatalogPage:React.FunctionComponent = () => {
  return (
  <>
  <Header/>
  <MainContent>
    <Banner/>
    <Catalog 
       inputStyle = {''}
    />
  </MainContent>
  <Footer/>
  </>);
}