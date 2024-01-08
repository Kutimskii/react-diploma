import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {CatalogPage} from './pages/CatalogPage';
import {InformationPage} from './pages/InformationPage';
import {MainPage} from './pages/MainPage';
import {ContactsPage} from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<MainPage/>}></Route>
        <Route path = '/catalog' element = {<CatalogPage/>}></Route>
        <Route path = '/about' element = {<InformationPage/>}></Route>
        <Route path = '/contacts' element = {<ContactsPage/>}></Route>
        <Route path = '/catalog/:id' element = {<ProductPage/>}></Route>
        <Route path = '/cart' element = {<CartPage/>}></Route>
        <Route path = '*' element = {<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  </> );
}

export default App;
