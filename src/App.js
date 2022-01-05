import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import { HomePage } from './containers/HomePage';
import { ProductListPage } from './containers/ProductListPage';

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" exact element={<HomePage />} />
        <Route path="/:slug" element={<ProductListPage />} />
        {/*
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />

        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default App;
