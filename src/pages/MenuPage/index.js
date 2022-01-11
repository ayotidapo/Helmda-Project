import styled from 'styled-components';
import ImgLink from './components/ImgLink';
const MenuPageWrapper = styled.div`
  width: 70%;
  background: #000;
  margin: 90px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
`;

const MenuPage = () => {
  return (
    <MenuPageWrapper>
      <ImgLink imgName="products" />
      <ImgLink imgName="about us" />
      <ImgLink imgName="news" />
      <ImgLink imgName="contact us" />
    </MenuPageWrapper>
  );
};

export default MenuPage;
/* */
