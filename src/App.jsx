import { Routes, Route, Link } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Container } from '@material-ui/core';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://63a68b14318b23efa7ab7198.mockapi.io/products')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    }, []);
    console.log('hello');
    return (
        <DataContext.Provider value={data}>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/products" element={<ProductList></ProductList>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/cart" element={<Cart></Cart>} />
                <Route path="/detail" element={<Product></Product>} />
            </Routes>
        </DataContext.Provider>
    );
};

export default App;
