import {Header} from "../components/share/Header/Header"
import {Footer} from "../components/share/Footer/Footer";
import { Banner } from "../components/share/Banner/Banner";
import { Contacts } from "../components/Contacts/Contacts";
import { MainContent } from "../components/MainContent/MainContent";
export const ContactsPage:React.FunctionComponent = () => {
  return<>
  <Header/>
  <MainContent>
    <Banner/>
    <Contacts/>
  </MainContent>
  <Footer/>
  </>
}