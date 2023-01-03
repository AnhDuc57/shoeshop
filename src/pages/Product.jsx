import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import '../components/styles.css';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({
        id: 'SH001',
        title: 'Nike 121',
        description: '',
        price: 20,
        colors: ['blue', 'black', 'green'],
        image: '',
        sizes: [37, 38, 39],
    });

    const param = useParams();
    useEffect(() => {
        console.log('ID:', param);
        fetch('http://localhost:3001/products/' + param.id, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            },
        })
            .then((res) => res.json())
            .then((json) => setProduct(json))
            .catch((e) => console.log(e));
    }, product);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.image} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterSize>
                                {product.colors.map((color) => {
                                    console.log(color);
                                    return <FilterSizeOption>{color}</FilterSizeOption>;
                                })}
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                {product.sizes.map((s) => (
                                    <FilterSizeOption>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1);
                                    }
                                }}
                            />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => setQuantity(quantity + 1)} />
                        </AmountContainer>
                        <Link className="product-link-button-add" to="/cart">
                            ADD TO CART
                        </Link>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
