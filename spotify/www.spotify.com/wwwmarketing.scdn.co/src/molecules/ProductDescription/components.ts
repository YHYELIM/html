import styled from 'styled-components';
import { Type, screenSmMin } from '@spotify-internal/encore-web';
import Image from '../../atoms/Image';
export const Header = styled.header `
  text-align: left;

  @media (min-width: ${screenSmMin}) {
    text-align: center;
  }
`;
export const HeaderTitle = styled(Type.h1) `
  font-size: 42px;
  line-height: 46px;
  margin: 0;
  padding: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 56px;
    line-height: 64px;
  }
`;
export const HeaderSubheader = styled(Type.h2) `
  font-size: 18px;
  line-height: 24px;
  margin: 12px 0;
  font-weight: 400;
  padding: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 32px;
    line-height: 38px;
  }
`;
export const Content = styled.article `
  margin-top: 50px;
`;
export const Title = styled(Type.h3) `
  font-size: 23px;
  margin: 24px 0;
  font-weight: 700;
  padding: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 32px;
    line-height: 38px;
  }
`;
export const Logo = styled.img `
  max-height: 44px;
`;
export const Description = styled.p `
  color: #424242;

  a {
    color: inherit;
  }
`;
export const Figure = styled(Image) `
  margin: 20px 0 0;
  width: 100%;
  padding-top: 35%;

  @media (min-width: ${screenSmMin}) {
    margin: 30px 0 0;
  }
`;
//# sourceMappingURL=components.js.map