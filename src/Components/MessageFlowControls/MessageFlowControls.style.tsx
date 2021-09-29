import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Priority } from '../../types';
import { priorityColors } from '../../constants';

export const StyledButton = styled(Button)`
  && {
    background-color: ${priorityColors[Priority.Info]};
    padding: 5px 20px;
    font-weight: bold;

    &:hover {
      background-color: ${priorityColors[Priority.Info]};
      filter: brightness(85%);
    }
  }
`;