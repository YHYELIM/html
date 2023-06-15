import styled from 'styled-components';
import BaseImage from '../../atoms/Image';
import { Type, screenXsMin, spacer64 } from '@spotify-internal/encore-web';
export const Container = styled.article `
  width: 100%;
  margin-bottom: ${spacer64};

  @media (min-width: ${screenXsMin}) {
    margin-bottom: 0;
    width: calc(50% - 25px);
  }
`;
export const Logo = styled(BaseImage) `
  height: 30px;
  width: 100px;
`;
export const Title = styled(Type.h3) `
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  margin: 20px 0;
  padding: 0;
`;
export const Content = styled.p `
  font-size: 18px;
  line-height: 26px;
  color: #424242;
`;
export const Images = styled.figure `
  margin: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
`;
export const Image = styled(BaseImage) `
  padding-top: 52.2%;
  width: 100%;

  &:first-child {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &:nth-child(3) {
    padding-top: 65.45%;
    grid-row: 2;
    grid-column: 2;
  }

  &:nth-child(2) {
    padding-top: 65.45%;
    grid-row: 2;
    grid-column: 1;

    &:last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;
export const Wrapper = styled.section `
  @media (min-width: ${screenXsMin}) {
    display: flex;
    justify-content: space-between;
  }
`;
//# sourceMappingURL=components.js.map