import { Routes, Route, Link } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import { Container } from '@material-ui/core';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();
export const StateLoginContext = createContext();
export const UserContext = createContext();

const App = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(undefined);
    const [data, setData] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        console.log('token:' + token);

        fetch('http://localhost:3001/products', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    }, []);
    console.log('hello');
    return (
        <DataContext.Provider value={data}>
            <StateLoginContext.Provider value={{ isLogin, setIsLogin }}>
                <UserContext.Provider value={{ user, setUser }}>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/products" element={<ProductList></ProductList>} />
                        <Route path="/login" element={<Login></Login>} />
                        <Route path="/register" element={<Register></Register>} />
                        <Route path="/cart" element={<Cart></Cart>} />
                        <Route path="/detail/:id" element={<Product></Product>} />
                        {isLogin && user?.isAdmin && <Route path="/admin" element={<Admin></Admin>} />}
                    </Routes>
                </UserContext.Provider>
            </StateLoginContext.Provider>
        </DataContext.Provider>
    );
};

export default App;
