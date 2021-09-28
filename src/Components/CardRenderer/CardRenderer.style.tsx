import styled from 'styled-components';

export const CardRendererContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  min-width: 550px;
  max-width: 1920px;
  max-height: 90vh;
  overflow-y: auto;

  & > .card-renderer-column{
    display: flex;
    flex-direction: column;  
    width: 30%;
    margin: 5px 10px;
  }
`;