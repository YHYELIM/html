import styled from 'styled-components';
import BaseContainer from '../../atoms/Container';
import { Type, screenSmMin, screenMdMin, screenLgMin, } from '@spotify-internal/encore-web';
import Image from '../../atoms/Image';
export const AlbumWrapper = styled.div `
  margin-bottom: 36px;

  @media (min-width: ${screenSmMin}) {
    vertical-align: top;
    display: block;
  }

  @media (min-width: ${screenMdMin}) {
    flex-basis: 50%;
  }

  @media (min-width: ${screenLgMin}) {
    flex-basis: 25%;
  }
`;
export const AlbumImage = styled(Image) `
  width: 241px;
  height: 247px;
  margin: 0 auto 30px auto;
  flex-grow: 1;
  display: block;

  @media (min-width: ${screenSmMin}) {
    margin: 0 auto 30px auto;
  }
`;
export const AlbumContent = styled.div `
  margin: auto;
  width: 241px;
  display: block;
`;
export const AlbumHeader = styled(Type.h2) `
  font-weight: bold;
  margin-bottom: 7px;
  font-size: 21px;
  line-height: 32px;
  padding: 0;
`;
export const AlbumText = styled.p `
  line-height: 1.5;
  font-size: 16px;
  margin: 0;
`;
export const SingleWrapper = styled.div `
  margin-bottom: 36px;
  text-align: center;
  width: 100%;

  @media (min-width: ${screenSmMin}) {
    vertical-align: top;
  }

  @media (min-width: ${screenLgMin}) {
    display: flex;
    width: auto;
    margin: 0 auto;
    text-align: left;
  }
`;
export const SingleImage = styled(Image) `
  width: 241px;
  height: 241px;
  margin: 0 auto 30px auto;

  background-size: cover;

  @media (min-width: ${screenSmMin}) {
    display: block;
    width: 328px;
    height: 328px;
    margin-bottom: 0;
  }

  @media (min-width: ${screenLgMin}) {
    margin-right: 60px;
  }
`;
export const SingleContent = styled.div `
  margin: auto;
  flex: 1;
`;
export const SingleHeader = styled(Type.h2) `
  font-weight: bold;
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 25px;
  padding: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 48px;
    margin: 25px 0;
  }
`;
export const SingleText = styled.p `
  margin: 0;
  line-height: 1.2;
  font-size: 18px;

  @media (min-width: ${screenSmMin}) {
    font-size: 24px;
  }
`;
export const ButtonGroup = styled.div `
  margin: 20px 0;

  @media (min-width: ${screenSmMin}) {
    margin: 30px 0 0 0;
  }
`;
export const Container = styled(BaseContainer) `
  padding: 30px 0;
`;
export const ContainerContent = styled.div `
  @media (min-width: ${screenSmMin}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;
//# sourceMappingURL=components.js.map