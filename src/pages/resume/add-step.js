import styled from 'styled-components';

const OutletContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;

  width: 100%;
  min-width: 1200px;
`;

const AddMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 64px;

  width: 100%;
  max-width: 1200px;
  height: fit-content;
`;

const AddHeaderText = styled.div`
  width: 100%;
  font-family: 'Inder';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
`;

const AddBox = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  mix-blend-mode: normal;
  border: 1px solid #4199e1;
  border-radius: 20px;
`;

const AddBoxText = styled.div`
  font-family: 'Inder';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
`;

const AddBoxTextRed = styled.div`
  color: red;
`;

const SelectCategoryTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: 74px;
`;
const SelectCategoryTextBoxBasix = styled.div`
  height: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
`;

const selectCategoryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: 74px;
`;

const selectCategoryContentContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 50px;

  width: 100%;
  height: 29px;
`;

const selectCategoryContentContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 20%;
  max-width: 245px;
  height: 29px;
`;

export function AddStepCategory() {
  return (
    <OutletContainer>
      <AddMainContainer>
        <AddHeaderText>이력서 등록</AddHeaderText>
        <AddBox>
          <AddBoxText>
            이력서는 최대 5개까지 등록이 가능합니다.
            <br />
            원하는 항목을 자유롭게 선택하여 이력서를 작성할 수 있습니다.
            <br />
            <AddBoxTextRed>
              구직신청은 이력서 작성과 포트폴리오 작성 후 꼭 인재풀 매칭 서비스
              활성화를 하셔야만 완료 됩니다.
            </AddBoxTextRed>
          </AddBoxText>
        </AddBox>
        <SelectCategoryTextBox>
          <AddHeaderText>이력서 항목 선택</AddHeaderText>
          <SelectCategoryTextBoxBasix>
            인적 사항, 학력사항, 기술 스택, 희망 직군은 기본 입력 항목입니다.
          </SelectCategoryTextBoxBasix>
        </SelectCategoryTextBox>
        <selectCategoryContentContainer>
          <selectCategoryContentContainerList>
            여기서부터
          </selectCategoryContentContainerList>
        </selectCategoryContentContainer>
      </AddMainContainer>
    </OutletContainer>
  );
}
