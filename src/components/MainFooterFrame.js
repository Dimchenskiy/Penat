import styled from "styled-components";
import OOfferItem from "./OOfferItem";

const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const TextYourRoom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 5px);
  }
`;
const Div = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-11xs);
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 2px);
  }
`;
const AImageIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--footer-size);
  font-weight: 500;
  font-family: var(--footer);
  color: var(--main-black);
  text-align: left;
`;
const ASecondarySave = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-black);
  padding: var(--padding-xs) var(--padding-54xl) var(--padding-xs)
    var(--padding-55xl);
  background-color: var(--background);
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-lightgray);
    border: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
`;
const OOfferItem1 = styled.div`
  align-self: stretch;
  width: 236px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 18px 0px;
`;
const TOfferSet = styled.div`
  width: 1253px;
  flex: 1;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  gap: 0px 18px;
  max-width: 100%;
  font-size: var(--footer-size);
  font-family: var(--footer);
`;
const CircleButtonInstance = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 80px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 80px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 80px 0px;
  }
`;
const MCircleButtonIcon = styled.img`
  width: 61.4px;
  height: 61.4px;
  position: relative;
  object-fit: contain;
`;
const Div2 = styled.div`
  margin-top: -1px;
  margin-bottom: -1px;
  position: relative;
  font-weight: 500;
`;
const ORestart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  gap: 17px 0px;
`;
const RestartButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-smi);
  font-size: var(--footer-size);
  font-family: var(--footer);
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 13px);
  }
`;
const RestartButton1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 35px 0px;
  }
`;
const MainFooterFrameRoot = styled.section`
  height: 693px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
`;

const MainFooterFrame = () => {
  return (
    <MainFooterFrameRoot>
      <RestartButton1>
        <CircleButtonInstance>
          <TextYourRoom>
            <H>Ваша комната собрана!</H>
          </TextYourRoom>
          <TOfferSet>
            <OOfferItem prop="Стул" aImage="/a-image1@2x.png" />
            <OOfferItem prop="Стол" aImage="/a-image-16@2x.png" />
            <OOfferItem1>
              <Wrapper>
                <Div>Кровать</Div>
              </Wrapper>
              <AImageIcon alt="" src="/a-image-21@2x.png" />
              <ASecondarySave>
                <Div1>Сохранить</Div1>
              </ASecondarySave>
            </OOfferItem1>
            <OOfferItem prop="Комод" aImage="/a-image-31@2x.png" />
            <OOfferItem prop="Растение" aImage="/a-image-41@2x.png" />
          </TOfferSet>
        </CircleButtonInstance>
        <RestartButton>
          <ORestart>
            <MCircleButtonIcon
              loading="lazy"
              alt=""
              src="/m-circle-button@2x.png"
            />
            <Div2>Давайте попробуем ещё раз!</Div2>
          </ORestart>
        </RestartButton>
      </RestartButton1>
    </MainFooterFrameRoot>
  );
};

export default MainFooterFrame;
