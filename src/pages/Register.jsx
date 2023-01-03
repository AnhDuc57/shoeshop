import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import '../components/styles.css';
import { useState } from 'react';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://www.vfestival.vn/wp-content/uploads/2021/11/cac-loai-giay-sneaker-585x581.jpg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordComfirm, setPasswordComfirm] = useState('');
    const nav = useNavigate();
    const register = () => {
        if (password == passwordComfirm) {
            fetch('http://localhost:3001/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name }),
            })
                .then((res) => res.json)
                .then((json) => {
                    console.log(json);
                    if (json.status) {
                        alert('register fail');
                    } else {
                        alert('Register successfully');
                        nav('/login');
                    }
                })
                .catch((e) => {
                    console.log(e);
                    alert('register fail');
                });
        } else {
            alert('Comfirm password fail !!');
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />

                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    <Input
                        value={passwordComfirm}
                        onChange={(e) => setPasswordComfirm(e.target.value)}
                        placeholder="confirm password"
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the{' '}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Link className="register-link-button" onClick={register}>
                        CREATE
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
