import styled from "styled-components";
import FrameMainMenu from "../components/FrameMainMenu";
import AFooter1 from "../components/AFooter1";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 640px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 640px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 640px 0px;
  }
`;

const Frame7 = () => {
  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <FrameMainMenu
        prop="Реквизиты компании"
        prop1="ИП Аксюткина Ирина Николаевна, адрес [добавить]"
        textWarrantyMessageWidth="617px"
        h1Flex="1"
        propWidth="unset"
        propTextAlign="center"
        propAlignSelf="stretch"
      />
      <AFooter1
        propPadding="var(--padding-30xl) var(--padding-77xl) var(--padding-45xl) var(--padding-43xl)"
        propPadding1="0px 0px 0px var(--padding-15xl)"
        propPadding2="unset"
        propWidth="unset"
        propPadding3="0px var(--padding-11xs)"
        divTextDecoration="unset"
      />
    </DivRoot>
  );
};

export default Frame7;
