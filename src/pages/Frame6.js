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
  gap: 564px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 564px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 564px 0px;
  }
`;

const Frame6 = () => {
  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <FrameMainMenu
        prop="Гарантия на возврат"
        prop1="Мы не предоставляем гарантию на вещи, на которые даём ссылки. Условия гарантии и возврата уточняйте на сайтах продавцов. Вы можете найти их заново, пройдя по ссылкам, которые сохранены во вкладке «Сохраненные предметы». Если ссылка уже удалилась (так как прошло больше года с момента оплаты), напишите в поддержку, мы поможем её восстановить."
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

export default Frame6;
