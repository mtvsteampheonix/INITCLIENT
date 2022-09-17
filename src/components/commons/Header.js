import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import logo from '../../design/images/Logo.png';
import Button from '@mui/material/Button';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 800px;
  height: 82px;
`;
const HeaderFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 50px;
`;

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 128px;
  height: 50px;
  gap: 16px;
`;

const LogoGroup = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const LogoImg = styled.div`
  width: 50px;
  height: 50px;
  background: #4199e1;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoText = styled.span`
  width: 62px;
  height: 39px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #4199e1;
  textdecoration: none;
  text-border: 1px;
`;

const LogoContainer = styled.img`
  left: 20%;
  right: 10%;
  top: 16%;
  bottom: 14%;
`;

const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

const InnerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 333px;
  height: 19px;
  gap: 32px;
`;

const InnerHeaderFrame = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #4199e1;
`;

const LoginText = styled.div`
  min-width: 173.2px;
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const LoginMemberText = styled.div`
  color: #4199e1;
  margin-left: 5px;
`;

function Header() {
  const authenticated = false;
  const memberStatus = 'member';

  const InnerHeaderCorComponent = () => {
    return (
      <InnerHeader>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>채용공고</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>상품</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>인재풀조회</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>마이페이지</InnerHeaderFrame>
        </Link>
      </InnerHeader>
    );
  };

  const InnerHeaderPersonalComponent = () => {
    return (
      <InnerHeader>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>채용공고</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>기업조회</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>커리어</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>프로필관리</InnerHeaderFrame>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <InnerHeaderFrame>마이페이지</InnerHeaderFrame>
        </Link>
      </InnerHeader>
    );
  };

  return (
    <StyledHeader>
      <HeaderFrame>
        <HeaderLogo>
          <LogoGroup>
            <Link to='/' style={{textDecoration: 'none'}}>
              <LogoImg>
                <LogoContainer src={process.env.PUBLIC_URL + '/Logo.png'} />
              </LogoImg>
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}>
              <LogoText>INIT</LogoText>
            </Link>
          </LogoGroup>
        </HeaderLogo>
        {memberStatus === 'company'
          ? InnerHeaderCorComponent()
          : InnerHeaderPersonalComponent()}
        {authenticated ? (
          <LoginText>
            어서오세요,<LoginMemberText>홍길동</LoginMemberText>님
          </LoginText>
        ) : (
          <Link to='/member/login'>
            <StyledButton>로그인</StyledButton>
          </Link>
        )}
      </HeaderFrame>
    </StyledHeader>
  );
}

export default Header;
