import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FooterFrame from "../components/FooterFrame";
import AFooter1 from "../components/AFooter1";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
const OurInfoFrame = styled.div`
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
`;
const MMenuItems = styled.div`
  width: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const I = styled.i`
  position: relative;
  font-weight: 600;
`;
const MMenuItems1 = styled.div`
  width: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Div1 = styled.div`
  position: relative;
  cursor: pointer;
`;
const MMenuItems2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const MenuInstance = styled.div`
  width: 253px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-12xs) 0px 0px;
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
const MMenuItems3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 8px;
  z-index: 1;
`;
const MenuInstance1 = styled.div`
  width: 156px;
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
  padding: 0px var(--padding-10xs) 0px 0px;
  gap: 0px 7px;
  z-index: 1;
`;
const OMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-xl) var(--padding-lg)
    var(--padding-5xl);
  box-sizing: border-box;
  position: relative;
  gap: 0px 340px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 0px 340px;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 340px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 340px;
  }
`;
const TCap = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--header);
`;
const QuestionsFrame = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) var(--padding-24xl) 0px;
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
  gap: 43px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 43px 0px;
  }
`;

const Frame4 = () => {
  const navigate = useNavigate();

  const onText8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText12Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onText10Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onText11Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onText15Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText17Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onPenatTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText18Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <QuestionsFrame>
        <TCap>
          <OMenu>
            <OurInfoFrame />
            <MenuInstance>
              <MMenuItems>
                <Div onClick={onText15Click}>О нас</Div>
              </MMenuItems>
              <MMenuItems1>
                <I>FAQ</I>
              </MMenuItems1>
              <MMenuItems2>
                <Div1 onClick={onText17Click}>Контакты</Div1>
              </MMenuItems2>
            </MenuInstance>
            <MenuInstance1>
              <MMenuItems3>
                <ALogoSignIcon loading="lazy" alt="" src="/a-logo-sign.svg" />
                <Div1 onClick={onPenatTextClick}>Penat</Div1>
              </MMenuItems3>
            </MenuInstance1>
            <MMenuItems4>
              <AIconProfile loading="lazy" alt="" src="/a-icon-profile.svg" />
              <Div onClick={onText18Click}>Личный кабинет</Div>
            </MMenuItems4>
          </OMenu>
        </TCap>
      </QuestionsFrame>
      <FooterFrame />
      <AFooter1
        propPadding="var(--padding-30xl) var(--padding-77xl) var(--padding-45xl) var(--padding-43xl)"
        propPadding1="0px 0px 0px var(--padding-15xl)"
        propPadding2="unset"
        propWidth="unset"
        propPadding3="0px var(--padding-11xs)"
        divTextDecoration="unset"
        onText1Click={onText8Click}
        onText5Click={onText12Click}
        onText3Click={onText10Click}
        onText4Click={onText11Click}
      />
    </DivRoot>
  );
};

export default Frame4;
