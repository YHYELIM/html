import styled from 'styled-components';
import Container from '../../atoms/Container';
import { Type, screenXsMin, screenSmMin, screenMdMin, screenLgMin, } from '@spotify-internal/encore-web';
import Image from '../../atoms/Image';
export const Wrapper = styled(Container) `
  > article {
    display: flex;
    justify-content: center;
    text-align: center;
    overflow-x: hidden;
    padding: 0;
    width: 100%;
  }
`;
export const ListenTogetherContainer = styled.div `
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${screenXsMin}) {
    padding: 35px 35px 0;
  }

  @media (min-width: ${screenMdMin}) {
    flex-direction: row;
    align-items: flex-end;
    padding: 0 15px 0 75px;
  }

  @media (min-width: ${screenLgMin}) {
    width: 1140px;
  }
`;
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  padding: 35px 35px 0;
  word-break: break-word;

  @media (min-width: ${screenXsMin}) {
    padding: 0;
  }

  @media (min-width: ${screenMdMin}) {
    height: 100%;
    justify-content: center;
    text-align: left;
    padding: 0 10px 0 0;
    width: 45%;
  }
`;
export const Header = styled(Type.h2) `
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: 900;
  line-height: 1.2;
  max-width: 100%;
  width: auto;
  display: inline-block;

  @media (min-width: ${screenSmMin}) {
    font-size: 40px;
    font-weight: 900;
    line-height: 1.2;
  }
`;
export const SecondaryHeader = styled.p `
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  max-width: 100%;
  margin-bottom: 35px;

  @media (min-width: ${screenSmMin}) {
    font-size: 24px;
  }

  @media (min-width: ${screenMdMin}) {
    margin-bottom: 0;
  }
`;
export const ImageContainer = styled(Image) `
  width: 120%;
  max-width: 500px;
  height: 230px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  @media (min-width: ${screenXsMin}) {
    width: 100%;
    height: 250px;
  }
  @media (min-width: ${screenMdMin}) {
    height: 300px;
    margin-top: 75px;
  }
`;
//# sourceMappingURL=components.js.map