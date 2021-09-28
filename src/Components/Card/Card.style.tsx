import styled from 'styled-components';
import { Priority } from '../../types';
import { priorityColors } from '../../constants';

type CardContainerProps = {
  priority: Priority;
};

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 2px 2px 3px -1px rgba(122,122,122,1);
  background-color: ${props => priorityColors[props.priority]};
  padding: 10px;
  margin: 5px 0px;

  & > div {
    display: flex;
    flex-direction: row-reverse;

    & > button {
      text-transform: capitalize;
    }
  }
`;