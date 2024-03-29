import { useContext } from 'react';
import { DataContext } from '../App';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ router }) => {
    const nav = useNavigate();
    const goToTop = () => {
        window.scrollTo(0, 0);
    };
    const data = useContext(DataContext);
    return (
        <Container>
            {data.map((item) => (
                <Product
                    onClick={() => {
                        nav('/detail/' + item._id, { state: item });
                        goToTop();
                    }}
                    item={item}
                    key={item.id}
                />
            ))}
        </Container>
    );
};

export default Products;
