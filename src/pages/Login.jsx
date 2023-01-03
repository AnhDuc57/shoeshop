import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import '../components/styles.css';
import { Description } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { StateLoginContext, UserContext } from '../App';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://lh3.googleusercontent.com/7py97GqYXRCE8uIwX7amyOuAkMcBOKzMunPY9Js-pPY6p8PZrV4p3c_on8nRmxG95cNQwJGtYwfeDE6l-TpOWaBeyhqTgD5gQZAiWnI59TeauNeBi7cLtSVvf-WmLnsxqU3UOXl98g=w440')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLogin, setIsLogin } = useContext(StateLoginContext);
    const { user, setUser } = useContext(UserContext);

    const saveToken = (token) => {
        localStorage.setItem('accessToken', token);
    };
    const nav = useNavigate();
    const login = () => {
        console.log(email, password);
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);

                if (json.status) {
                    alert(json.message);
                } else {
                    saveToken(json.accessToken);
                    setIsLogin(true);
                    setUser(json.user);
                    nav('/');
                }
            });
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={'password'}
                        placeholder="password"
                    />
                    <Link onClick={login} className="login-link-button">
                        LOGIN
                    </Link>
                    <Link className="login-forgotpassword">DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link className="login-link" to="/register">
                        CREATE A NEW ACCOUNT
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
