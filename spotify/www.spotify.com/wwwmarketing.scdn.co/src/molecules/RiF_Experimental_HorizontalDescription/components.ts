import styled from 'styled-components';
import { screenLgMin, screenSmMin, spacer8, spacer16, spacer24, spacer32, } from '@spotify-internal/encore-web';
import Image from '../../atoms/Image';
import Header from '../../atoms/Header';
export const Headline = styled(Header) `
  h2 {
    font-weight: 700;

    @media (min-width: ${screenSmMin}) {
      max-width: 100%;
    }
  }
  margin: 0;
`;
export const Main = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: ${spacer24};
  @media (min-width: ${screenSmMin}) {
    padding-top: ${spacer32};
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
  box-sizing: border-box;
  background-size: cover;
  border: 4px solid #c5f0c9;
  border-radius: 8px;

  @media (min-width: ${screenSmMin}) {
    padding-bottom: 46%;
    border: 12px solid #c5f0c9;
    border-radius: 20px;
  }
`;
export const DescriptionsContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: ${spacer24};
  margin-top: ${spacer24};

  @media (min-width: ${screenSmMin}) {
    margin-top: ${spacer32};
    grid-gap: ${spacer32};
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${screenLgMin}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export const Description = styled.div `
  > * {
    margin: 0;
  }

  > * + * {
    margin-top: ${spacer8};

    @media (min-width: ${screenSmMin}) {
      margin-top: ${spacer16};
    }
  }
`;
//# sourceMappingURL=components.js.map