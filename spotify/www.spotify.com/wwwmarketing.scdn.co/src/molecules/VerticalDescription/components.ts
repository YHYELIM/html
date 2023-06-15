import styled from 'styled-components';
import { screenLgMin, screenSmMin, Type, spacer16, spacer24, spacer32, spacer48, spacer56, spacer72, spacer80, gray30, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import { responsiveSize } from '../../utils/helpers';
import Header from '../../atoms/Header';
export const Wrapper = styled(Container) `
  padding: ${spacer72} ${spacer16};

  @media (min-width: ${screenSmMin}) {
    padding: ${spacer72} ${spacer32};
  }

  @media (min-width: ${screenLgMin}) {
    padding-left: 0;
    padding-right: 0;
  }

  > article {
    font-family: spotify-circular, Circular, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: auto;
  }
`;
export const Content = styled.article `
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${screenLgMin}) {
    padding-left: ${spacer80};
  }
`;
export const Headline = styled(Type.h1).attrs({
    paddingBottom: '0.67em',
    variant: 'altoBrio',
}) `
  margin: 0;
  font-size: ${responsiveSize(50, 120, 320, 1440)};
  line-height: ${responsiveSize(60, 130, 320, 1440)};
  padding: 0;

  @media (min-width: ${screenSmMin}) {
    max-width: 75%;
  }

  @media (min-width: ${screenLgMin}) {
    max-width: 60%;
  }
`;
export const Main = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: ${spacer24};

  @media (min-width: ${screenSmMin}) {
    padding-top: ${spacer32};
  }

  @media (min-width: ${screenLgMin}) {
    flex-direction: row;
  }
`;
export const ImageContainer = styled.div `
  @media (min-width: ${screenLgMin}) {
    flex-direction: row;
    width: 50%;
  }
`;
export const ImageStyle = styled(Image) `
  width: 100%;
  padding-bottom: 80%;
  border-radius: 20px;
  background-size: cover;

  @media (min-width: ${screenLgMin}) {
    height: 40px;
    padding-bottom: 100%;
  }
`;
export const DescriptionsContainer = styled.div `
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSmMin}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: ${spacer32};
  }

  @media (min-width: ${screenLgMin}) {
    display: flex;
    padding-left: ${spacer56};
    width: 50%;

    div:first-child {
      padding-bottom: ${spacer48};
    }
  }
`;
export const CustomHeader = styled(Header) `
  margin: ${({ note }) => (note ? '0' : '0 auto')};

  --container-small-width: 100%;
  --headline-font-size: ${({ note }) => note
    ? `${responsiveSize(18, 28, 320, 1440)}`
    : `${responsiveSize(22, 32, 320, 1440)}`};
  --headline-line-height: ${responsiveSize(26, 38, 320, 1440)};
  --subheadline-font-size: ${responsiveSize(18, 28, 320, 1440)};
  --subheadline-line-height: ${responsiveSize(21, 33, 320, 1440)};
  --subheadline-small-width: 100%;
  --subheadline-large-width: ${({ note }) => (note ? '100%' : '65%')};

  > h1 {
    padding: ${({ note }) => (note ? spacer16 : spacer24)} 0 ${spacer16};

    @media (min-width: ${screenSmMin}) {
      padding-bottom: ${spacer16};
    }

    @media (min-width: ${screenLgMin}) {
      width: ${({ note }) => (note ? '100%' : '55%')};
      padding-top: 0;
    }
  }
`;
export const Note = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: ${spacer48};
  border-top: 1px solid ${gray30};

  @media (min-width: ${screenLgMin}) {
    margin-top: ${spacer48};
    margin-right: ${spacer80};
    padding-top: ${spacer24};
  }
`;
//# sourceMappingURL=components.js.map