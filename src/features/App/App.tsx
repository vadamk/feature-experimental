import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const StyledContainer = styled.div`
	text-align: center;
`;

const App = () => (
  <StyledContainer>
    <h1>React Starter</h1>
  </StyledContainer>
);

export default hot(module)(App);
