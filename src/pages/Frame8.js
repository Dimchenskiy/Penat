import styled from "styled-components";
import Navbar from "../components/Navbar";
import HeaderFrame from "../components/HeaderFrame";
import FrameComponent1 from "../components/FrameComponent1";
import DataSubjectConsents from "../components/DataSubjectConsents";
import AFooter2 from "../components/AFooter2";

const Child = styled.img`
  width: 33.3px;
  height: 16px;
  position: relative;
  border-radius: var(--br-12xs);
  object-fit: contain;
  display: none;
  z-index: 0;
`;
const ContentFrameIcon = styled.img`
  width: 1px;
  height: 3442.8px;
  position: absolute;
  margin: 0 !important;
  top: 2790.9px;
  left: 509px;
  z-index: 1;
`;
const ContentFrameIcon1 = styled.img`
  width: 1px;
  height: 3442.8px;
  position: absolute;
  margin: 0 !important;
  top: 2790.9px;
  right: 507px;
  z-index: 1;
`;
const ContentFrameIcon2 = styled.img`
  width: 1px;
  height: 1251.3px;
  position: absolute;
  margin: 0 !important;
  bottom: 5478px;
  left: calc(50% - 0px);
  z-index: 3;
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
const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) var(--padding-5xs) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  color: var(--main-black);
  font-family: var(--header);
`;
const H1 = styled.h3`
  margin: 0;
  width: 613.5px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const PENAT = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--header-2-size);
  @media screen and (max-width: 750px) {
    max-width: calc(100% - 5px);
  }
`;
const Div = styled.div`
  height: 228px;
  width: 403px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  min-width: 403px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const Li = styled.li`
  margin-bottom: 12px;
`;
const Li1 = styled.li``;
const Ul = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-2xl);
`;
const Div1 = styled.div`
  width: 362.7px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  min-width: 362.7px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const PartiesBenefitting = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 44px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 44px;
  }
`;
const CookiesContainer = styled.div`
  height: 1323px;
  width: 378.9px;
  position: relative;
  font-weight: 300;
  display: inline-block;
  flex-shrink: 0;
  min-width: 378.9px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const ConditionsForProcessing = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 59px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 59px;
  }
`;
const FrameWithPersonalData = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) var(--padding-7xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--footer-size);
`;
const Text2 = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--header-size);
  color: var(--color-black);
  font-family: var(--footer);
  @media screen and (max-width: 750px) {
    gap: 32px 0px;
  }
`;
const TextWrapper = styled.main`
  width: 1252px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
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
  gap: 80px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 80px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 80px 0px;
  }
`;

const Frame8 = () => {
  return (
    <DivRoot>
      <Child alt="" src="/vector-425.svg" />
      <ContentFrameIcon loading="lazy" alt="" src="/vector-430.svg" />
      <ContentFrameIcon1 loading="lazy" alt="" src="/vector-430.svg" />
      <ContentFrameIcon2 loading="lazy" alt="" src="/vector-436.svg" />
      <Navbar />
      <TextWrapper>
        <Text2>
          <Text1>
            <H>Обработка персональных данных</H>
          </Text1>
          <PENAT>
            <H1>
              Политика ООО «Интернет Решения» в отношении обработки персональных
              данных. Редакция от 14 октября 2022 г.
            </H1>
          </PENAT>
          <HeaderFrame />
          <FrameComponent1 />
          <FrameWithPersonalData>
            <ConditionsForProcessing>
              <PartiesBenefitting>
                <Div>
                  Для соблюдения и исполнения требований действующего
                  законодательства Российской Федерации, включая,
                  не ограничиваясь, осуществление бухгалтерского и налогового
                  учета, организацию документооборота и архивного хранения,
                  направление соответствующих сведений в государственные органы,
                  исполнение требований и предписаний государственных органов,
                  исполнение судебных актов, рассмотрение претензий
                  правообладателей и обращений субъектов персональных данных
                  и т. д.
                </Div>
                <Div1>
                  <Ul>
                    <Li>
                      Стороны, выгодоприобретатели или поручители по договорам,
                      включая, но не ограничиваясь, пользователей сервисов
                      и продуктов Общества, физических лиц, оказывающих услуги
                      Обществу, участников конкурсов, акций и т. д.;
                    </Li>
                    <Li>
                      Пользователи веб-сайтов и иных онлайн-сервисов Общества;
                    </Li>
                    <Li>
                      Представители контрагентов, государственных органов,
                      субъектов персональных данных и третьих лиц;
                    </Li>
                    <Li>Посетители территории Общества;</Li>
                    <Li>Работники Общества;</Li>
                    <Li>Близкие родственники работников Общества;</Li>
                    <Li>Бывшие работники Общества;</Li>
                    <Li>
                      Кандидаты на замещение вакантных должностей Общества;
                    </Li>
                    <Li1>
                      Иные субъекты персональных данных, каким-либо образом
                      взаимодействующие с Обществом в рамках заявленной цели.
                    </Li1>
                  </Ul>
                </Div1>
              </PartiesBenefitting>
              <CookiesContainer>
                <Ul>
                  <Li>Гражданство;</Li>
                  <Li>ФИО;</Li>
                  <Li>Пол;</Li>
                  <Li>Дата и место рождения;</Li>
                  <Li>Данные документов, удостоверяющих личность;</Li>
                  <Li>
                    Сведения, содержащиеся в документах миграционного учета;
                  </Li>
                  <Li>
                    Адрес регистрации по месту жительства и адрес фактического
                    проживания;
                  </Li>
                  <Li>
                    Контактная информация (номер телефона, факса, адрес
                    электронной почты, почтовый адрес);
                  </Li>
                  <Li>Банковские реквизиты;</Li>
                  <Li>Реквизиты доверенностей;</Li>
                  <Li>
                    ИНН, СНИЛС, ОГРНИП, идентификаторы пользователей сервисов
                    и продуктов Общества;
                  </Li>
                  <Li>Сведения о транспортных средствах;</Li>
                  <Li>
                    Регистрационные и авторизационные данные (логин, пароль
                    и т. д.), записи звонков (разговоров), технические сведения
                    о пользовательских устройствах и идентификаторы, в т. ч.
                    файлы cookies, информация о пользовательском местоположении,
                    сведения о приобретенных товарах (услугах) и иные данные,
                    самостоятельно предоставленные такими пользователями в адрес
                    Общества (в отношении пользователей веб-сайтов и иных
                    онлайн-сервисов Общества);
                  </Li>
                  <Li>
                    Данные документов об образовании, квалификации,
                    профессиональной подготовке, сведения о повышении
                    квалификации и иные аналогичные данные;
                  </Li>
                  <Li>
                    Семейное положение, сведения о составе семьи и близких
                    родственниках, которые могут понадобиться Обществу, в том
                    числе, но не ограничиваясь, для предоставления работнику
                    льгот, предусмотренных трудовым и налоговым
                    законодательством РФ;
                  </Li>
                  <Li>
                    Сведения о воинском учете и сведения, содержащиеся
                    в документах воинского учета;
                  </Li>
                  <Li>
                    Сведения, содержащиеся в трудовой книжке, сведения
                    о трудовом стаже, предыдущих местах работы, доходах
                    с предыдущих мест работы;
                  </Li>
                  <Li>
                    Информация о приеме, переводе, увольнении и иных событиях,
                    относящихся к трудовой деятельности работника у Общества;
                  </Li>
                  <Li>Сведения о доходах у Общества;</Li>
                  <Li>Биографические сведения;</Li>
                  <Li1>
                    Сведения о временной нетрудоспособности и о состоянии
                    здоровья.
                  </Li1>
                </Ul>
              </CookiesContainer>
            </ConditionsForProcessing>
          </FrameWithPersonalData>
          <DataSubjectConsents />
        </Text2>
      </TextWrapper>
      <AFooter2 />
    </DivRoot>
  );
};

export default Frame8;
