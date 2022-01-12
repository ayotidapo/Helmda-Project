import styled from 'styled-components';
import Footer from 'components/Footer';
import Button from 'components/Button';

const HomePageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: rgba(0, 0, 0, 1);
  background-image: url(https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/homeBg.png);
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat, repeat;

  @media (max-width: 1037px) {
    background-position: 100% 100%;
  }
`;

const HomeContentDiv = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .brand {
    position: relative;
    color: #fff;
    text-align: center;
    font-weight: bolder;
    margin-top: 25px;


   
    span {
      transform: translateY(35px);
      font-size: 2rem;
      display: inline-block;
      opacity: 0.5;

      @media (max-width: 768px) {
        transform: translateY(96px);
      }
    
    }
    h2 {
      font-size: 9.5rem;
      margin-top: 0px;
      margin-bottom: 0px;
      line-height:180.58px;

      @media (max-width: 768px) {
        font-size: 5.5rem;
        margin-top:50px;
        font-size: 6.5rem;
      }
    }
  }
  .brand-logo-div {
    width: 335px;
    height: 335px;
    top: 105px;
    left: 70px;
    position: absolute;
    @media (max-width: 820px) { 
      width: 55%;  
    }

    @media (max-width: 768px) {  
        
       top: 144px;
       left: 26px;
    }
     
    @media(max-width:425){
      width: 250px;
    }
  }
  .discover-btn-div {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    height: 90px;
    margin-bottom:15px;
    span {
      border: 1px color; #fff;
      background: #fff;
      height: 4px;
      width: 32px;
      margin:0px 10px;
      display:inline-block;
      :hover{
        cursor:pointer;
      }
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomeContentDiv>
        <div className="brand">
          <span>01</span>
          <h2>GaleaX-A</h2>
          <div className="brand-logo-div">
            <img
              src="https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/helmet.png"
              alt="logo"
            ></img>
          </div>
        </div>

        <div className="discover-btn-div">
          <Button>Discover</Button>
          <div>
            <span></span> <span></span>
          </div>
        </div>
      </HomeContentDiv>
      <Footer />
    </HomePageWrapper>
  );
};
export default HomePage;
