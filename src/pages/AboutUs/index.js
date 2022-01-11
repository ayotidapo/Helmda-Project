import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const AboutWrapper = styled.div`
  background-image: url('https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/Rectangle 119.png');
  background: #000;
  height: calc(100% - 20px);
  color: #fff;
  h2 {
    font-size: 2.4rem;
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
`;

const AboutUs = () => {
  return (
    <AboutWrapper>
      <h2>CONTACT US</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingTop: '50px',
          width: '80%',
          color: 'rgba(255,255,255,0.6)',
          margin: '0 auto',
          marginRight: '70px',
          fontSize: '1.2rem',
        }}
      >
        <div style={{ width: '377px', marginRight: '5px', marginTop: 'auto' }}>
          <img
            src="https://raw.githubusercontent.com/ayotidapo/Helmda-graphics/main/Rectangle 125.png"
            alt="cont-img"
          />
        </div>
        <div style={{ lineHeight: '2.5' }}>
          <div style={{ display: 'flex', height: '120px' }}>
            <p style={{ width: '25%', marginLeft: '25px' }}>
              Harju Makond, Talinn Keskilinna, Linnaosa Narva mn 5, 10117
              Estonia
            </p>
            <p style={{ width: '35%', marginLeft: '35px' }}>
              <span style={{ color: '#fff' }}>
                For Investors <br />
              </span>
              davidh.h@helma-systems.com
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <p style={{ margin: '0px 35px' }}>
              <span style={{ color: '#fff' }}>General inquiries</span>
              <br />
              davidh.h@helma-systems.com
              <br />
              +3726027216
            </p>
            <div>
              <p
                style={{
                  color: '#fff',
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  marginBottom: '0px',
                  background:
                    'linear-gradient(270deg, rgba(255, 255, 255, 0.03) 2.28%, rgba(255, 255, 255, 0.142) 40.98%, rgba(255, 255, 255, 0.162) 58.84%, rgba(255, 255, 255, 0) 99.32%)',
                }}
              >
                Contact us
              </p>
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
    </AboutWrapper>
  );
};

export default withRouter(AboutUs);
