import { screenSmMin, screenLgMin, screenXsMin, } from '@spotify-internal/encore-web';
import styled from 'styled-components';
import Header from '../../atoms/Header';
import RiF_Experimental_Container from '../../atoms/RiF_Experimental_Container';
export const ContainerWithBackground = styled(RiF_Experimental_Container) `
  padding-bottom: 100vw;

  /* fallback image */
  background-image: url(${({ backgroundSources }) => backgroundSources.small});
  /* image-set if supported */
  ${({ backgroundSources }) => backgroundSources.small['2x'] &&
    `
    background-image: image-set(
      url(${backgroundSources.small['1x']})
        1x,
      url(${backgroundSources.small['2x']})
        2x
    );
  `}
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: ${screenXsMin}) {
    ${({ backgroundSources }) => backgroundSources.medium &&
    `
      /* fallback image */
      background-image: url('${backgroundSources.medium['1x']}');
      /* adds gradient on top and bottom
      the asset has this gradient, but on bigger screens the
      asset becomes bigger than the height of the container. */
      background-image: linear-gradient(
          to bottom,
          #191414 -30px,
          rgba(0, 0, 0, 0) 100px
        ),
        linear-gradient(to top, #191414 -30px, rgba(0, 0, 0, 0) 100px),
        url('${backgroundSources.medium['1x']}');
    `};

    ${({ backgroundSources }) => backgroundSources.medium &&
    backgroundSources.medium['2x'] &&
    `
      /* same as above, but with image-set */
      background-image: linear-gradient(
          to bottom,
          #191414 -30px,
          rgba(0, 0, 0, 0) 100px
        ),
        linear-gradient(to top, #191414 -30px, rgba(0, 0, 0, 0) 100px),
        image-set(
          url('${backgroundSources.medium['1x']}')
            1x,
            url('${backgroundSources.medium['2x']}')
            2x
        );
    `};
  }

  @media (min-width: ${screenSmMin}) {
    padding-bottom: inherit;
    background-position: ${({ textDirection }) => textDirection === 'ltr' ? '102%' : '-2%'};
    background-size: 37% auto;
  }

  @media (min-width: ${screenLgMin}) {
    ${({ backgroundSources }) => backgroundSources.large &&
    `
      /* same as above, but with large assets */
      background-image: url('${backgroundSources.large['1x']}');
      background-image: linear-gradient(
          to bottom,
          #191414 -30px,
          rgba(0, 0, 0, 0) 100px
        ),
        linear-gradient(to top, #191414 -30px, rgba(0, 0, 0, 0) 100px),
        url('${backgroundSources.large['1x']}');
    `};

    ${({ backgroundSources }) => backgroundSources.large &&
    backgroundSources.large['2x'] &&
    `
      /* same as above, but with large asset and image-set */
      background-image: linear-gradient(
          to bottom,
          #191414 -30px,
          rgba(0, 0, 0, 0) 100px
        ),
        linear-gradient(to top, #191414 -30px, rgba(0, 0, 0, 0) 100px),
        image-set(
          url('${backgroundSources.large['1x']}')
            1x,
            url('${backgroundSources.large['2x']}')
            2x
        );
    `};
  }
`;
export const Wrapper = styled.div `
  @media (min-width: ${screenSmMin}) {
    display: flex;
    flex-direction: 'row';
  }
`;
export const CustomHeader = styled(Header) `
  > h2 {
    font-weight: 700;
  }
`;
export const MessageSpacer = styled.div `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${screenSmMin}) {
    width: 60%;
  }
`;
export const ButtonGroup = styled.div `
  margin: 32px 0;

  & > div {
    margin-top: 8px;
    a {
      width: 100%;
    }

    @media (min-width: ${screenSmMin}) {
      display: inline-block;
      margin-right: 8px;

      a {
        width: auto;
      }
    }
  }
`;
//# sourceMappingURL=components.js.map