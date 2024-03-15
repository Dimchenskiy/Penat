import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TCap from "../components/TCap";
import SortingFrame from "../components/SortingFrame";
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
  gap: 86px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 86px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 86px 0px;
  }
`;

const Frame2 = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <TCap />
      <SortingFrame />
      <AFooter1
        propPadding="var(--padding-30xl) var(--padding-77xl) var(--padding-45xl) var(--padding-43xl)"
        propPadding1="0px 0px 0px var(--padding-15xl)"
        propPadding2="unset"
        propWidth="unset"
        propPadding3="0px var(--padding-11xs)"
        divTextDecoration="none"
        onText1Click={onText1Click}
        onFAQTextClick={onFAQTextClick}
        onText5Click={onText5Click}
        onText2Click={onText2Click}
        onText3Click={onText3Click}
        onText4Click={onText4Click}
      />
    </DivRoot>
  );
};

export default Frame2;
