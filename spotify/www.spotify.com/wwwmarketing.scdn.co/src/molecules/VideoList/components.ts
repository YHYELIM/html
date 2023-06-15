import styled from 'styled-components';
import Container from '../../atoms/Container';
import { Type, screenSmMin, screenMdMin } from '@spotify-internal/encore-web';
export const CondensedContainer = styled(Container) `
  & > article {
    padding: 0 15px;
  }
`;
export const VideoWrapper = styled.div `
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${screenMdMin}) {
    width: calc(50% - 30px);
    height: 540px;
    margin: 0;
  }
`;
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenMdMin}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const TextContainer = styled.div `
  width: 100%;
  @media (min-width: ${screenMdMin}) {
    width: ${({ checkmarkColor }) => checkmarkColor ? 'calc(50% - 30px)' : 'calc(50% - 5px)'};
  }
`;
export const Header = styled(Type.h2) `
  font-size: 32px;
  line-height: 1.3;
  font-weight: 900;
  margin: 45px 0 18px;
  text-align: center;
  padding: 0;

  @media (min-width: ${screenMdMin}) {
    margin-bottom: 0;
    font-size: 36px;
    text-align: left;
  }
`;
export const Elements = styled.ul `
  padding-bottom: 54px;
  ${({ checkmarkColor }) => (checkmarkColor ? '' : 'padding-left: 0;')}
  margin: 0 auto;
  list-style: none;
  display: table;

  @media (min-width: ${screenSmMin}) {
    padding: 0 0 54px;
  }

  ${({ checkmarkColor }) => checkmarkColor ? '' : `@media (min-width: ${screenMdMin}) { margin: 0; }`}
`;
export const Element = styled.li `
  font-size: 18px;
  margin: 10px 0;
  padding: 0 10px;
  padding-left: ${({ checkmarkColor }) => (checkmarkColor ? '1em' : '')};
  text-indent: ${({ checkmarkColor }) => (checkmarkColor ? '-1em' : '')};

  @media (min-width: ${screenMdMin}) {
    font-size: 24px;
    ${({ checkmarkColor }) => (checkmarkColor ? '' : 'padding: 0;')}
  }
`;
export const VideoContainer = styled.div `
  margin: 0;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${screenMdMin}) {
    width: calc(50% - 30px);
    margin: 0;
  }
`;
//# sourceMappingURL=components.js.map