import styled from 'styled-components';
import { useState } from 'react';
import classnames from 'classnames';
import PopUp from 'components/PopUp';
import { Link } from 'react-router-dom';
import MenuPage from 'pages/MenuPage';

const Navbar = styled.div`
  height: 57.68px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  z-index: 500000005;
  background-color: transparent;
  .logo-div {
    width: 95px;
    height: 100%;
  }
  .hamburger {
    span {
      display: block;
      width: 23px;
      height: 1px;
      background: #fff;
      margin: 5px;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
  }
  .hamburger-click {
    span {
      :nth-of-type(1) {
        -webkit-transform: rotate(45deg) translateX(10px);
        -ms-transform: rotate(45deg) translateX(10px);
        transform: rotate(45deg) translateX(10px);
        -webkit-transform-origin: 18%;
        -ms-transform-origin: 18%;
        transform-origin: 18%;
        -webkit-transform: rotate(45deg) translateX(10px);
        -webkit-transform-origin: 18%;
      }
      :nth-of-type(2) {
        opacity: 0;
        visibility: hidden;
      }
      :nth-of-type(3) {
        webkit-transform: rotate(-48deg) translateY(10px);
        -ms-transform: rotate(-48deg) translateY(10px);
        transform: rotate(-48deg) translateY(10px);
        -webkit-transform-origin: 15%;
        -ms-transform-origin: 15%;
        transform-origin: 15%;
        -webkit-transform: rotate(-48deg) translateY(10px);
        -webkit-transform-origin: 15%;
      }
    }
  }
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0px;
  height: 100vh;
  background: #000;
`;

const AppLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onToggleMenu = () => {
    setToggleMenu((prevVal) => !prevVal);
  };

  return (
    <AppWrapper>
      <PopUp isOpen={toggleMenu}>
        <MenuPage onToggleMenu={onToggleMenu} />
      </PopUp>
      <Link to="/">
        <Navbar>
          <div className="logo-div">
            <img
              src="https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/logo.png"
              alt="logo"
            ></img>
          </div>
          <div
            className={classnames('hamburger hand', {
              'hamburger-click': toggleMenu,
            })}
            onClick={onToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar>
      </Link>
      <main>{children}</main>
    </AppWrapper>
  );
};

export default AppLayout;
