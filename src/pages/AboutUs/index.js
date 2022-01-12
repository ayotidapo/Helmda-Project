import styled from 'styled-components';
import Footer from 'components/Footer';

const AboutWrapper = styled.div`
  background: rgba(0, 0, 0, 1);
  height: calc(100% - 0px);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/bg2.png);
  background-position: 50% 10%;
  background-size: contain;
  background-repeat: no-repeat, repeat;
  h2 {
    font-size: 4.4rem;
    text-align: center;
  }
  .contact {
    list-style: none;
    padding-left: 0px;
    width: 200px;
    margin-top: 10px;
    li {
      background-color: #ccc;
      background-image: linear-gradient(45deg, #ccc 0%, rgba(0, 0, 0, 0) 97.4%);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .content-about {
    display: flex;
    justifycontent: flex-end;
    align-items: flex-end;
    padding-top: 50px;
    width: 80%;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    margin-right: 70px;
    font-size: 1.2rem;
  }

  .abt-img-wrapper {
    width: 377px;
    margin-right: 5px;
    margin-top: auto;
  }
  .list-header {
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0px;
    margin-left: 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.03) 2.28%,
      rgba(255, 255, 255, 0.142) 40.98%,
      rgba(255, 255, 255, 0.162) 58.84%,
      rgba(255, 255, 255, 0) 99.32%
    );
  }
  .right-div {
    .top-right {
      display: flex;
      height: 120px;
      p {
        :nth-of-type(1) {
          width: 25%;
          margin-left: 25px;
        }
        :nth-of-type(2) {
          width: 35%;
          margin-left: 35px;
        }
      }
    }
  }
  .down-right {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      :nth-of-type(1) {
        margin: 0 35px;
      }
    }
  }
`;

const AboutUs = () => {
  console.log('renders');
  return (
    <AboutWrapper>
      <div>
        <h2>CONTACT US</h2>
        <div className="content-about">
          <div className="abt-img-wrapper">
            <img
              src="https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/Rectangle 125.png"
              alt="cont-img"
            />
          </div>
          <div style={{ lineHeight: '2.5' }} className="right-div">
            <div className="top-right">
              <p>
                Harju Makond, Talinn Keskilinna, Linnaosa Narva mn 5, 10117
                Estonia
              </p>
              <p>
                <span style={{ color: '#fff' }}>
                  For Investors <br />
                </span>
                davidh.h@helma-systems.com
              </p>
            </div>

            <div className="down-right">
              <p>
                <span style={{ color: '#fff' }}>General inquiries</span>
                <br />
                davidh.h@helma-systems.com
                <br />
                +3726027216
              </p>
              <div>
                <div className="list-header">Contact us</div>
                <ul className="contact">
                  <li>Careers</li>
                  <li>About us</li>
                  <li>Mission</li>
                  <li>Our Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AboutWrapper>
  );
};

export default AboutUs;
