import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  & > .button-container{
    display: flex;
    flex-direction: row;
    width: 160px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ToastContainer = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  justify-content: space between;
  cursor: pointer;
`;
