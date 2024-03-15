import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TCap1 from "../components/TCap1";
import AFooter1 from "../components/AFooter1";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
`;
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
const MenuInstancesG = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-4xl);
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--header);
`;
const P = styled.p`
  margin: 0;
`;
const Div = styled.div`
  height: 349.9px;
  width: 613.5px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
`;
const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 300;
`;
const MenuInstancesGParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
  }
`;
const FooterFrame = styled.div`
  width: 662px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) 145px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 750px) {
    padding-bottom: 94px;
    box-sizing: border-box;
  }
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
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 86px 0px;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--footer-size);
  color: var(--color-black);
  font-family: var(--footer);
  @media screen and (max-width: 750px) {
    gap: 86px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 86px 0px;
  }
`;

const Frame3 = () => {
  const navigate = useNavigate();

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
      <TCap1 />
      <FooterFrame>
        <MenuInstancesGParent>
          <MenuInstancesG>
            <H>Наша цель</H>
          </MenuInstancesG>
          <Text1>
            <Div>
              <P>
                Наша главная цель — помочь жить красиво. Мы соединяем дизайнеров
                мебели, продавцов и покупателей, чтобы сделать квартиры по всей
                России красивее, уютнее, и привлекательнее. Мы любим красоту
                и домашний уют и с радостью поможем вам подобрать уникальный
                интерьер за несколько секунд.
              </P>
              <P></P>
              <P>
                Пенат за вас просмотрит десятки мебельных сайтов и дополнительно
                обратится к собственной партнерской базе мебели и предметов для
                дома. Модель обучена на тысячах фотографий самых красивых
                (по нашему мнению) квартир от Парижа до Токио, от Стокгольма
                до Гонг-Конга.
              </P>
              <P></P>
              <P>
                Мы рекомендуем вещи основываясь не на том, что покупают другие,
                а на том, что порекомендовал бы профессиональный дизайнер.
                За несколько минут мы сможем сформировать ваш уникальный профиль
                и наиболее точно порекомендовать предметы мебели, которые
                вы сможете сразу купить у наших партнеров. Если вы уже точно
                знаете, как должна выглядеть ваша идеальная комната, просто
                загрузите фотографию, и мы найдем и скажем где купить предметы
                мебели, которые изображены на ней. Выбирайте нужный режим
                и пользуйтесь! Мы вместе будем создавать мир вашего дома.
              </P>
            </Div>
          </Text1>
          <Div1>
            <P>Живите красиво,</P>
            <P>Пенат</P>
          </Div1>
        </MenuInstancesGParent>
      </FooterFrame>
      <AFooter1
        propPadding="var(--padding-30xl) var(--padding-77xl) var(--padding-45xl) var(--padding-43xl)"
        propPadding1="0px 0px 0px var(--padding-15xl)"
        propPadding2="unset"
        propWidth="unset"
        propPadding3="0px var(--padding-11xs)"
        divTextDecoration="unset"
        onFAQTextClick={onFAQTextClick}
        onText5Click={onText5Click}
        onText2Click={onText2Click}
        onText3Click={onText3Click}
        onText4Click={onText4Click}
      />
    </DivRoot>
  );
};

export default Frame3;
