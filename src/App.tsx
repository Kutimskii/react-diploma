import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import CatalogPage from './pages/CatalogPage';
import InformationPage from './pages/InformationPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/catalog.html' exact element={<CatalogPage/>}></Route>
        <Route path='/about.html' exact element={<InformationPage/>}></Route>
        <Route path='/contacts.html' exact element={<ContactsPage/>}></Route>
      </Routes>
    </Router>
  </> );
}

export default App;
