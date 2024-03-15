import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RectangleLogo = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: 0px;
  left: -1px;
  background-color: var(--background);
  border-bottom: 1px solid var(--main-black);
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
`;
const Faq = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 1;
`;
const ALogoSignIcon = styled.img`
  height: 25.9px;
  width: 17.2px;
  position: relative;
  min-height: 26px;
`;
const Penat = styled.div`
  position: relative;
  cursor: pointer;
`;
const MMenuItems = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 17px;
  left: 685px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 8px;
  z-index: 2;
`;
const AIconProfile = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const I = styled.i`
  position: relative;
  font-weight: 600;
  white-space: nowrap;
`;
const MMenuItems1 = styled.div`
  margin: 0 !important;
  position: absolute;
  right: 90px;
  bottom: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 8px;
  z-index: 2;
`;
const RectangleLogoParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-72xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-29xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-29xl);
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const OMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
const TCapRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--header);
`;

const TCap = () => {
  const navigate = useNavigate();

  const onText15Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQText1Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onText16Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onPenatTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <TCapRoot>
      <OMenu>
        <RectangleLogoParent>
          <RectangleLogo />
          <Div onClick={onText15Click}>О нас</Div>
          <Faq onClick={onFAQText1Click}>FAQ</Faq>
          <Faq onClick={onText16Click}>Контакты</Faq>
          <MMenuItems>
            <ALogoSignIcon loading="lazy" alt="" src="/a-logo-sign.svg" />
            <Penat onClick={onPenatTextClick}>Penat</Penat>
          </MMenuItems>
          <MMenuItems1>
            <AIconProfile loading="lazy" alt="" src="/a-icon-profile1.svg" />
            <I>Личный кабинет</I>
          </MMenuItems1>
        </RectangleLogoParent>
      </OMenu>
    </TCapRoot>
  );
};

export default TCap;
