import styled from 'styled-components';
import Icon from 'components/Icons';

const FooterDiv = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  svg {
    margin: 0px 15px;
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Icon width={24} height={24} id="facebook" />
      <Icon width={24} height={24} id="linkedIn" />
      <Icon width={24} height={24} id="twitter" />
      <Icon width={24} height={24} id="mail" />
    </FooterDiv>
  );
};

export default Footer;
