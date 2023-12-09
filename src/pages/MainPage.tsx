import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { TopSales } from "../components/TopSales/TopSales";
import { MainContent } from "../components/MainContent/MainContent";
import { Catalog } from "../components/Catalog/Catalog";
export const MainPage:React.FunctionComponent = () => {
  return (
  <>
  <Header/>
  <MainContent>
    <Banner/>
    <TopSales/>
    <Catalog 
    inputStyle="deactive"/>
  </MainContent>
  <Footer/>
  </>
  );
}