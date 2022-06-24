import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <BgImage />
      <Content>
        <CTA>
          <CtaLogoOne src="/images/cta-logo-one.svg" alt="" />
          <Signup>GET ALL THERE</Signup>
          <Description>
            Get Premier Access to Raya and a Last Dragon for an additiona fee
            with a Disney+ subscription. As of 03/06/21, the price od Disney+
            and The Disney Bundle will increse by $1.
          </Description>
          <CtaLogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;

  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 0vw;
  width: 100%;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  position: absolute;

  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  top: 70px;
  right: 0px;
  left: 0px;
  bottom: 0px;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  flex-direction: column;
  display: flex;
  text-align: center;
`;

const CtaLogoOne = styled.img`
  margin-bottom: 12px;
`;

const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  width: 100%;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CtaLogoTwo = styled.img``;

export default Login;
