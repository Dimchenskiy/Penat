import styled from "styled-components";

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
const Div = styled.div`
  position: relative;
  font-weight: 300;
`;
const PhotoDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  font-size: var(--caption-size);
  font-family: var(--footer);
`;
const SortIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2px 0px;
  max-width: 100%;
`;
const UnionFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) var(--padding-8xs) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-family: var(--header);
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 500;
`;
const AIconSort = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  object-fit: cover;
  min-height: 20px;
`;
const OSort = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 12px;
`;
const NestedMenus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px 0px;
`;
const Div2 = styled.div`
  position: relative;
  font-size: var(--footer-size);
  font-weight: 500;
  font-family: var(--footer);
  color: var(--main-black);
  text-align: left;
`;
const MSecondaryPhotoResearch = styled.button`
  cursor: pointer;
  border: 1px solid var(--main-black);
  padding: var(--padding-xs) var(--padding-smi) var(--padding-xs)
    var(--padding-base);
  background-color: var(--background);
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 7px;
  white-space: nowrap;
  &:hover {
    background-color: var(--color-lightgray);
    border: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
`;
const MenuItemIcon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const SortingMenu = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--footer-size);
`;
const Div3 = styled.div`
  position: relative;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 7px;
  }
`;
const Div4 = styled.div`
  position: relative;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 9px;
  }
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-4xs) 0px var(--padding-6xs);
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const AProgressBarChild = styled.img`
  margin-top: -1px;
  margin-bottom: -1px;
  align-self: stretch;
  height: 24px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const AProgressBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: 7px 0px;
  max-width: 100%;
`;
const ProgressBarInstance = styled.div`
  width: 620px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--caption-size);
  @media screen and (max-width: 750px) {
    max-width: calc(100% - 5px);
  }
`;
const AImageIcon = styled.img`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  min-height: 420px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
const AImageParent = styled.div`
  align-self: stretch;
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 21px;
  grid-template-columns: repeat(4, minmax(223px, 1fr));
  @media screen and (max-width: 1050px) {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(223px, 386px));
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: minmax(223px, 1fr);
  }
`;
const MImages = styled.div`
  width: 1251px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  gap: 19px 0px;
  max-width: 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const UnionFrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 40px 0px;
  }
`;
const InstanceRoot = styled.section`
  width: 1255px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-smi) var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--header-size);
  color: var(--main-black);
  font-family: var(--footer);
`;

const Instance = () => {
  return (
    <InstanceRoot>
      <UnionFrameParent>
        <UnionFrame>
          <SortIcon>
            <H>Я хочу найти что-то похожее на...</H>
            <PhotoDisplay>
              <Div>Выберите одно фото</Div>
            </PhotoDisplay>
          </SortIcon>
        </UnionFrame>
        <SortingMenu>
          <MenuItemIcon>
            <NestedMenus>
              <OSort>
                <Div1>Сортировать</Div1>
                <AIconSort loading="lazy" alt="" src="/a-icon-sort@2x.png" />
              </OSort>
            </NestedMenus>
            <MSecondaryPhotoResearch>
              <AIconSort alt="" src="/a-icon-camera@2x.png" />
              <Div2>Поиск по фото</Div2>
            </MSecondaryPhotoResearch>
          </MenuItemIcon>
        </SortingMenu>
        <ProgressBarInstance>
          <AProgressBar>
            <Parent1>
              <Div3>1</Div3>
              <Div4>2</Div4>
              <Div4>3</Div4>
            </Parent1>
            <AProgressBarChild loading="lazy" alt="" src="/group-907@2x.png" />
          </AProgressBar>
        </ProgressBarInstance>
        <ImageContainer>
          <MImages>
            <AImageParent>
              <AImageIcon loading="lazy" alt="" src="/a-image@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-1@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-2@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-3@2x.png" />
            </AImageParent>
            <AImageParent>
              <AImageIcon loading="lazy" alt="" src="/a-image-4@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-5@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-6@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-7@2x.png" />
            </AImageParent>
            <AImageParent>
              <AImageIcon loading="lazy" alt="" src="/a-image-8@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-9@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-10@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-11@2x.png" />
            </AImageParent>
            <AImageParent>
              <AImageIcon loading="lazy" alt="" src="/a-image-12@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-13@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-14@2x.png" />
              <AImageIcon loading="lazy" alt="" src="/a-image-15@2x.png" />
            </AImageParent>
          </MImages>
        </ImageContainer>
      </UnionFrameParent>
    </InstanceRoot>
  );
};

export default Instance;
