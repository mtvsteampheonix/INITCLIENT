import styled from 'styled-components';

const StyledFooter = styled.footer`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #4199e1;
  height: 400px;
  width: 100%;
  min-width: 800px;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-size: 1em;
  width: 300px;
`;

const StyledA = styled.a`
  color: #f1db15;
`;

const StyledCSDiv = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-around;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledCSDiv>
        <StyledDetails>
          <h2>고객센터</h2>
          <br />
          <p>대표 번호 : 1588-1588</p>
          <br />
          <p>운영시간 : 오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)</p>
          <br />
          <p>점심시간 : 오후 11시 30분 ~ 오후 1시</p>
          <br />
        </StyledDetails>
        <StyledDetails>
          <h2>문의</h2>
          <br />
          <p>E-mail : bool_size_oh@metaverse.com</p>
          <br />
          <StyledA>자주묻는질문 FAQ</StyledA>
          <br />
          <StyledA>문의하기</StyledA>
          <br />
        </StyledDetails>
        <StyledDetails>
          <h2>개인정보 처리방침</h2>
          <br />
          <p>이용약관</p>
          <br />
          <p>결제/ 환불에 대한 법률</p>
          <br />
        </StyledDetails>
        {/* <p align='center'>Copyrightⓒ2022 team-phoenix All rights reserved.</p> */}
      </StyledCSDiv>
    </StyledFooter>
  );
}

export default Footer;
