import styled from 'styled-components';
import { useHistory } from 'react-router';

const ImgLinkWrapper = styled.div`
  position: relative;

  .simulate {
    position: absolute;
    width: 115px;
    height: 35px;
    border: 1px solid #fff;
    top: 124px;
    left: 187px;
    opacity: 0;
    transition: opacity 0.2s linear;
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  &:nth-of-type(3) {
    .simulate {
      width: 80px;
      left: 205px;
    }
  }
  &:nth-of-type(4) {
    .simulate {
      width: 135px;
      left: 177px;
    }
  }
`;

const ImgLink = (props) => {
  const history = useHistory();
  console.log(history);
  const { imgName, onToggleMenu } = props;
  return (
    <ImgLinkWrapper>
      <img
        src={`https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/${imgName}.png`}
        alt="logo"
      ></img>
      <div
        className="simulate"
        onClick={() => {
          onToggleMenu();
          history.push('/about-us');
        }}
      ></div>
    </ImgLinkWrapper>
  );
};

export default ImgLink;
