import { useState } from 'react';
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import '../components/styles.css';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
    color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && '500'};
    font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link className="cart-link-button-continue" to="/products">
                        CONTINUE SHOPPING
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="data:image/jpeg;base64,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" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> Nike Air Max 90 Futura FB1877-110
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="white" />
                                    <ProductSize>
                                        <b>Size:</b> 38
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove
                                        onClick={() => {
                                            if (quantity > 1) {
                                                setQuantity(quantity - 1);
                                            }
                                        }}
                                    />
                                    <ProductAmount>{quantity}</ProductAmount>
                                    <Add onClick={() => setQuantity(quantity + 1)} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 200</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="data:image/jpeg;base64,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" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> Nike Air Max DC9402-001
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size:</b> 39
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>1</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 159</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 359</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 359</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
