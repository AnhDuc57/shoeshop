import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import  './styles.css';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;



const CategoryItem = ({ item }) => {
  const goToTop=()=>{
    window.scrollTo(0, 0)
  }
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link onClick={goToTop} className='categoryitem-link-button' to='/products'>SHOP NOW</Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
