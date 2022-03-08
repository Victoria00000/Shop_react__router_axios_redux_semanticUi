import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Header } from './containers/Header';
import { ProductsList } from './containers/ProductsList';
import { ProductDetails } from './containers/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>

        <header>
          <Link to='/'> <Header />  </Link>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<ProductsList />} />
            <Route path='/product/:productID' element={<ProductDetails />} />
            <Route path='#'> 404 Not found </Route>
          </Routes>
        </main>

        <footer></footer>

      </BrowserRouter>
    </>
  );
}

export default App;
