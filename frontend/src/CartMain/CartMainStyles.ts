import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
export type CartProductType = {
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};