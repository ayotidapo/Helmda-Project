import styled from 'styled-components';
import ImgLink from './components/ImgLink';

const MenuPageWrapper = styled.div`
  width: 70%;
  background: #000;
  margin: 90px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  @media (max-width: 1130px) {
    grid-template-columns: auto auto;
    width: 95%;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
    width: 65%;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    width: 85%;
  }
`;

const MenuPage = ({ onToggleMenu }) => {
  return (
    <MenuPageWrapper>
      <ImgLink imgName="products" onToggleMenu={onToggleMenu} />
      <ImgLink imgName="about us" onToggleMenu={onToggleMenu} />
      <ImgLink imgName="news" onToggleMenu={onToggleMenu} />
      <ImgLink imgName="contact us" onToggleMenu={onToggleMenu} />
    </MenuPageWrapper>
  );
};

export default MenuPage;
/* */
