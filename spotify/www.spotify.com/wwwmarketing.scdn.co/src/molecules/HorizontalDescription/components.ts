import styled from 'styled-components';
import { screenLgMin, screenSmMin, spacer16, spacer24, spacer32, spacer72, spacer80, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
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
export const Headline = styled(Header) `
  margin: 0;

  @media (min-width: ${screenSmMin}) {
    max-width: 75%;
  }

  @media (min-width: ${screenLgMin}) {
    max-width: 60%;
  }
`;
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${screenLgMin}) {
    padding: 0 ${spacer80};
  }
`;
export const Main = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: ${spacer24};
  @media (min-width: ${screenSmMin}) {
    padding-top: ${spacer32};
  }
`;
export const Description = styled.div `
  margin: 0 auto;

  > h1 {
    padding: ${spacer24} 0 ${spacer16};

    @media (min-width: ${screenSmMin}) {
      padding-bottom: ${spacer16};
    }
    @media (min-width: ${screenLgMin}) {
      width: '55%';
      padding-top: 0;
    }
  }
`;
export const VideoWrapper = styled.div `
  > div {
    border-radius: 20px;
  }

  @media (min-width: ${screenLgMin}) {
    padding-top: ${spacer32};
    padding-bottom: ${spacer32};
  }
`;
export const ImageContainer = styled.div `
  @media (min-width: ${screenLgMin}) {
    flex-direction: column;
    padding-top: ${spacer32};
    padding-bottom: ${spacer32};
  }
`;
export const ImageStyle = styled(Image) `
  width: 100%;
  padding-bottom: 80%;
  border-radius: 20px;
  background-size: cover;
  @media (min-width: ${screenSmMin}) {
    padding-bottom: 53%;
  }
`;
export const DescriptionsContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: ${spacer32};
  @media (min-width: ${screenSmMin}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${screenLgMin}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
//# sourceMappingURL=components.js.map