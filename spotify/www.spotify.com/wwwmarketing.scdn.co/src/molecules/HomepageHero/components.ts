import styled from 'styled-components';
import { Type, screenXsMin, screenSmMin, screenLgMin, spacer16, spacer32, spacer40, spacer48, spacer64, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
export const backgroundBlue = '#2941ab';
export const Wrapper = styled(Container) `
  > article {
    font-family: spotify-circular, Circular, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    min-height: 480px;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;

    @media (min-width: ${screenSmMin}) {
      min-height: 600px;
    }
  }

  background-color: ${backgroundBlue};
  background-image: url(https://content-tooling.spotifycdn.com/images/af63e367-ad10-4063-a8e2-5a50ae2a4b28_lie_circles-mobile.svg);
  background-position: 65% 55%;
  background-size: auto 177%;
  background-repeat: no-repeat;

  @media (min-width: ${screenSmMin}) {
    background-image: url(https://content-tooling.spotifycdn.com/images/1d2242b4-f071-4244-a276-3bcdc58e77cf_lie_circles-tablet.svg);
    background-position: center center;
    background-size: auto 181%;
    background-repeat: no-repeat;
  }

  @media (min-width: ${screenLgMin}) {
    background-position: right center;
    background-size: auto 100%;
    background-repeat: no-repeat;

    ${({ direction }) => direction === 'rtl'
    ? `background-image: url(https://content-tooling.spotifycdn.com/images/15649a86-9a56-42e4-94b1-511a47d0506a_lie_circles-rtl.svg);
        background-position: left center;`
    : `background-image: url(https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg);
        background-position: right center;`}
  }
`;
export const Content = styled.div `
  padding: ${spacer48} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  -webkit-font-smoothing: antialiased;

  @media (min-width: ${screenLgMin}) {
    padding: ${spacer64} 0;
    align-items: flex-start;
  }
`;
export const Header = styled(Type.h1) `
  font-size: calc(24px + (32 - 24) * ((100vw - 320px) / (480 - 320)));
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  padding: 0;
  font-weight: 900;
  text-align: center;

  @media (min-width: ${screenXsMin}) {
    font-size: 32px;
  }

  @media (min-width: ${screenSmMin}) {
    font-size: 60px;
    min-width: 372px;
  }

  @media (min-width: ${screenLgMin}) {
    text-align: start;
  }
`;
export const SecondaryHeader = styled(Type.h2) `
  margin: ${spacer16} 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;

  @media (min-width: ${screenSmMin}) {
    margin: ${spacer32} 0 0;
    padding: 0;
    font-size: 24px;
  }

  @media (min-width: ${screenLgMin}) {
    text-align: start;
    max-width: 558px;
  }
`;
export const SupHeader = styled.p `
  margin-bottom: ${spacer64};
  font-weight: 600;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (min-width: ${screenSmMin}) {
    margin-bottom: ${spacer40};
  }

  @media (min-width: ${screenLgMin}) {
    font-size: 14px;
    margin: ${spacer16} 0 ${spacer32};
  }
`;
export const ButtonGroup = styled.div `
  margin: 0;
  box-sizing: border-box;

  @media (min-width: ${screenSmMin}) {
    margin: ${spacer48} 0 0;
  }

  @media (min-width: ${screenLgMin}) {
    a {
      width: auto;
    }
  }
`;
//# sourceMappingURL=components.js.map