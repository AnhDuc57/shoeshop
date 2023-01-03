import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>BEST SELL</Container>;
};

export default Announcement;