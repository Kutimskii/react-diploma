import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { AboutShop } from "../components/AboutShop/AboutShop";
import { MainContent } from "../components/MainContent/MainContent";

export const InformationPage:React.FunctionComponent = () => {
  return(
  <>
  <Header/>
  <MainContent>
    <Banner/>
    <AboutShop/>
  </MainContent>
  <Footer/>
  </>);
}