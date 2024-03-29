import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import './styles.css';
import { useContext } from 'react';
import { StateLoginContext, UserContext } from '../App';
import { useState } from 'react';

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
    flex: 1;
    text-align: center;
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

const Navbar = () => {
    const { isLogin, setIsLogin } = useContext(StateLoginContext);
    const { user, setUser } = useContext(UserContext);
    console.log('is login:' + isLogin);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link className="navbar-link-logo" to="/">
                        DC SHOP
                    </Link>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: 'gray', fontSize: 20 }} />
                    </SearchContainer>
                </Center>
                <Right>
                    {!isLogin && (
                        <Link className="navbar-link-register" to="/register">
                            REGISTER
                        </Link>
                    )}
                    {!isLogin && (
                        <Link className="navbar-link-login" to="/login">
                            SIGN IN
                        </Link>
                    )}
                    {isLogin && <Link className="navbar-link-login">Hello {user?.name}</Link>}
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <Link to="/cart">
                                <ShoppingCartOutlined />
                            </Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
