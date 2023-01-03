import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import './styles.css';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid while;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Input = styled.input`
    height: 30px;
    width: 560px;
    border: 2px solid black;
    border-radius: 12px;
    padding: 5px ${mobile({ width: '50px' })};
`;

const Center = styled.div`
    flex: 4;
    text-align: center;
    margin: auto 16px;
    cursor: pointer;
    ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
const NavbarAdmin = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link className="navbar-link-logo" to="/admin">
                        ADMIN
                    </Link>
                </Left>
                <Center>
                    <Link className ='navbaradmin-link'>Products</Link>
                    <Link className ='navbaradmin-link'>Dashboard</Link>
                    <Link className ='navbaradmin-link'>Categories</Link>
                    <Link className ='navbaradmin-link'>Orders</Link>
                    <Link className ='navbaradmin-link'>Users</Link>
                    <Link className ='navbaradmin-link'>Sellers</Link>
                </Center>
                <Right>
                    <Link>Hi Admin !</Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default NavbarAdmin;