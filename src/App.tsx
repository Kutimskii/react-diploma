import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {CatalogPage} from './pages/CatalogPage';
import {InformationPage} from './pages/InformationPage';
import {MainPage} from './pages/MainPage';
import {ContactsPage} from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<MainPage/>}></Route>
        <Route path = '/catalog.html' element = {<CatalogPage/>}></Route>
        <Route path = '/about.html' element = {<InformationPage/>}></Route>
        <Route path = '/contacts.html' element = {<ContactsPage/>}></Route>
        <Route path = '/products/:id.html' element = {<MainPage/>}></Route>
        <Route path = '*' element = {<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  </> );
}

export default App;
