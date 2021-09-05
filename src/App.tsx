import React from 'react';
import styled from 'styled-components';
import './App.css';
import { AwardLeftComponent } from './components/AwardLeftComponent';
import { AwardRightComponent } from './components/AwardRightComponent';

const StyledLayout = styled.div`
  display: flex;
`;

function App() {
  return (
    <StyledLayout>
      <AwardLeftComponent></AwardLeftComponent>
      <AwardRightComponent></AwardRightComponent>
    </StyledLayout>
  );
}

export default App;
