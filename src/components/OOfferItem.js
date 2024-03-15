import styled from "styled-components";

const Div = styled.div`
  position: relative;
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
  width: 125px;
  position: relative;
  font-size: var(--footer-size);
  font-weight: 500;
  font-family: var(--footer);
  color: var(--main-black);
  text-align: left;
  display: inline-block;
  box-sizing: border-box;
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
`;
const ASecondarySave = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-black);
  padding: var(--padding-xs);
  background-color: var(--background);
  align-self: stretch;
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
const OOfferItemRoot = styled.div`
  align-self: stretch;
  width: 235px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 18px 0px;
  text-align: center;
  font-size: var(--footer-size);
  color: var(--main-black);
  font-family: var(--footer);
`;

const OOfferItem = ({ prop, aImage }) => {
  return (
    <OOfferItemRoot>
      <Div>{prop}</Div>
      <AImageIcon loading="lazy" alt="" src={aImage} />
      <ASecondarySave>
        <Div1>Сохранить</Div1>
      </ASecondarySave>
    </OOfferItemRoot>
  );
};

export default OOfferItem;
