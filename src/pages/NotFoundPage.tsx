import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { NotFound } from "../components/NotFound/NotFound";
import { MainContent } from "../components/MainContent/MainContent";
export const NotFoundPage:React.FunctionComponent = () => {
  return(
  <>
  <Header/>
  <MainContent>
    <Banner/>
    <NotFound/>
  </MainContent>
  <Footer/>
  </>);
}