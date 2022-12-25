import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from '../responsive';
import '../components/styles.css';
import { Description } from '@material-ui/icons';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64DNXiJyVtgBo5MOTc0wHORUkQm2l5tkPdA&usqp=CAU')
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
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Link className='login-link-button' to='/'>LOGIN</Link>
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
