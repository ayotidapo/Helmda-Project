import styled, { css } from 'styled-components';

const PopUpDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 500000000;
  overflow-y: scroll;
  top: 0px;
  left: 0px;
  padding-top: 50px;
  ${(p) =>
    p.isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `};
  transition: opacity 0.3s linear;
`;
const PopUp = (props) => {
  const { children, isOpen } = props;
  return <PopUpDiv isOpen={isOpen}>{children}</PopUpDiv>;
};
export default PopUp;
