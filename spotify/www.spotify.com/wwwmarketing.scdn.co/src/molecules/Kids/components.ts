import styled from 'styled-components';
import Container from '../../atoms/Container';
import { Type, screenSmMin, screenMdMin, screenLgMin, } from '@spotify-internal/encore-web';
export const Wrapper = styled(Container) `
  > article {
    padding: 35px 35px 0 35px;
    width: 100%;

    @media (min-width: ${screenMdMin}) {
      padding: 75px 35px;
    }
  }
`;
export const KidsContainer = styled.div `
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${screenMdMin}) {
    flex-direction: row;
  }

  @media (min-width: ${screenLgMin}) {
    width: 1140px;
  }
`;
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${screenMdMin}) {
    width: 45%;
    text-align: left;
    align-items: flex-start;
    padding: 0;
  }
`;
export const Body = styled.p `
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;

  @media (min-width: ${screenSmMin}) {
    font-size: 24px;
  }
`;
export const Emphasis = styled(Type.h3) `
  color: ${({ emphasis }) => emphasis.color};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  margin: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 25px;
  }
`;
export const Subheader = styled(Type.h2) `
  color: ${({ subheader }) => subheader.color};
  font-size: 28px;

  @media (min-width: ${screenSmMin}) {
    font-size: 30px;
  }
`;
export const ButtonWrapper = styled.footer `
  text-align: center;
  margin-bottom: 30px;
`;
export const ImageContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 45%;

  @media (min-width: ${screenMdMin}) {
    width: 50%;
    justify-content: center;
  }
`;
//# sourceMappingURL=components.js.map