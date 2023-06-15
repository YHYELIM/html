import styled from 'styled-components';
import Container from '../../atoms/Container';
import { Type, screenXsMin, screenSmMin, screenMdMin, screenLgMin, } from '@spotify-internal/encore-web';
import Image from '../../atoms/Image';
export const Wrapper = styled(Container) `
  > article {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;
export const ProductDemoContainer = styled.div `
  max-width: 1280px;
  align-items: center;
  margin: 0 auto;
  padding: 40px 0;

  @media (min-width: ${screenSmMin}) {
    margin: 30px;
  }

  @media (min-width: ${screenMdMin}) {
    display: flex;
    padding: 75px 0 75px 90px;
    margin: 15px auto;
  }
`;
export const Content = styled.article `
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${screenMdMin}) {
    width: 45%;
    text-align: left;
    margin-right: 40px;
  }
`;
export const Header = styled(Type.h2) `
  font-size: 32px;
  line-height: 36px;
  display: inline-block;
  font-weight: bold;

  @media (min-width: ${screenSmMin}) {
    padding-bottom: 5px;
  }

  @media (min-width: ${screenMdMin}) {
    white-space: nowrap;
    font-size: 48px;
  }
`;
export const Text = styled.p `
  font-size: 18px;
  line-height: 24px;
  width: 76%;
  align-items: center;
  margin: 12px auto 19px;
  font-weight: 400;

  @media (min-width: ${screenSmMin}) {
    font-size: 21px;
    width: 71%;
    line-height: 29px;
    margin-top: 14px;
  }

  @media (min-width: ${screenMdMin}) {
    font-size: 24px;
    width: 97%;
    margin-left: 0;
    margin-right: 0;
    padding-top: 13px;
    line-height: 34px;
  }
`;
export const ImageWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0;

  @media (min-width: ${screenMdMin}) {
    width: 100%;
  }

  @media (min-width: ${screenLgMin}) {
    width: calc(50% - 40px);
  }
`;
export const ImageContainer = styled(Image) `
  width: 100%;
  padding-top: 60%;

  @media (min-width: ${screenXsMin}) {
    padding-top: 50%;
  }

  @media (min-width: ${screenSmMin}) {
    width: 50%;
    padding-top: 35%;
  }

  @media (min-width: ${screenMdMin}) {
    width: 70%;
    padding-top: 50%;
  }
`;
//# sourceMappingURL=components.js.map