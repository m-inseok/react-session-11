//Coin.tsx
import styled from "styled-components";
import { useState } from "react";
import { useLocation ,useParams } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
`;

interface RouteParms {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true); 
  const { coinId } = useParams<RouteParms>();
  const { state } = useLocation<RouteState>();

  return (
      <Container>
        <Header>
          <Title>코인 {coinId}</Title>
          <Title>Type : {state?.type || "loading"}</Title>
        </Header>
        {loading ? "Loading..." : null}
      </Container>)
}
export default Coin;
