import styled from "styled-components";
import MainFooterFrame from "../components/MainFooterFrame";
import AFooter1 from "../components/AFooter1";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
const LogoInstance = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: 0px;
  left: -0.5px;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  white-space: nowrap;
`;
const MMenuItems = styled.div`
  width: 49px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Div1 = styled.div`
  position: relative;
`;
const MMenuItems1 = styled.div`
  width: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const MMenuItems2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const TextCabinet = styled.div`
  width: 254px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const ALogoSignIcon = styled.img`
  height: 25.9px;
  width: 17.2px;
  position: relative;
  min-height: 26px;
`;
const Penat = styled.i`
  position: relative;
  font-weight: 600;
`;
const MMenuItems3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 8px;
  z-index: 1;
`;
const SaveButton = styled.div`
  width: 158px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AIconProfile = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const MMenuItems4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 8px;
  z-index: 1;
`;
const OMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-xl) var(--padding-lg) 22px;
  box-sizing: border-box;
  position: relative;
  gap: 0px 339px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 0px 339px;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 339px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 339px;
  }
`;
const TCap = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--header);
`;
const FrameProposal = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) var(--padding-8xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 59px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 59px 0px;
  }
`;

const Frame1 = () => {
  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <FrameProposal>
        <TCap>
          <OMenu>
            <LogoInstance />
            <TextCabinet>
              <MMenuItems>
                <Div>О нас</Div>
              </MMenuItems>
              <MMenuItems1>
                <Div1>FAQ</Div1>
              </MMenuItems1>
              <MMenuItems2>
                <Div1>Контакты</Div1>
              </MMenuItems2>
            </TextCabinet>
            <SaveButton>
              <MMenuItems3>
                <ALogoSignIcon loading="lazy" alt="" src="/a-logo-sign.svg" />
                <Penat>Penat</Penat>
              </MMenuItems3>
            </SaveButton>
            <MMenuItems4>
              <AIconProfile loading="lazy" alt="" src="/a-icon-profile.svg" />
              <Div>Личный кабинет</Div>
            </MMenuItems4>
          </OMenu>
        </TCap>
      </FrameProposal>
      <MainFooterFrame />
      <AFooter1 />
    </DivRoot>
  );
};

export default Frame1;
