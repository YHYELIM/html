import styled from 'styled-components';
import { Type, TextLink, screenXsMin, screenSmMin, screenLgMin, spacer16, spacer32, spacer40, spacer48, spacer64, createBasicColorSet, cssColorSet, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
import AppStoreBadge from '../../atoms/AppStoreBadge';
export const Wrapper = styled(Container) `
  /** Custom encore color set object. */
  ${({ background = { color: '#FFF' }, color }) => {
    const jsCustomColorSet = createBasicColorSet(background.color, color);
    return cssColorSet(jsCustomColorSet);
}}

  background-image: url(https://www-growth.scdn.co/static/home/wrapped-homepage-banner-graphic-tablet-mobile.svg),
      url(https://www-growth.scdn.co/static/home/wrapped-homepage-banner-graphic-tablet-mobile.svg);
  background-size: 1044.4px auto;
  background-position: bottom -509px right 40.3%, top -461px right -625px;
  background-repeat: no-repeat;

  @media (min-width: calc(${screenXsMin} + 140px)) {
    background-position: bottom -509px right 40.3%, top -461px right -542px;
  }

  @media (min-width: ${screenSmMin}) {
    background-size: 2042px auto;
    background-position: bottom -906px left 54.55%, top -781px right -1171px;
  }

  @media (min-width: ${screenLgMin}) {
    background-image: url(https://www-growth.scdn.co/static/home/wrapped-homepage-banner-graphic-desktop.svg);
    background-position: ${({ direction }) => direction === 'ltr'
    ? 'bottom -428px right -1200px'
    : 'bottom -417px left -1444px'};
  }

  @media (min-width: calc(${screenLgMin} + 240px)) {
    background-position: ${({ direction }) => direction === 'ltr'
    ? 'bottom -428px right -1092px'
    : 'bottom -417px left -1293px'};
  }

  > article {
    font-family: spotify-circular, Circular, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    min-height: 464px;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${screenSmMin}) {
      min-height: 1146px;
    }

    @media (min-width: ${screenLgMin}) {
      min-height: 606px;
    }
  }
`;
export const Content = styled.div `
  padding: ${spacer48} 0;
  display: flex;
  flex: 1;
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
  font-size: calc(24px + 8 * ((100vw - 320px) / 160));
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: center;

  @media (min-width: ${screenXsMin}) {
    font-size: 32px;
    max-width: 272px;
  }

  @media (min-width: ${screenSmMin}) {
    font-size: 60px;
    max-width: 550px;
  }

  @media (min-width: ${screenLgMin}) {
    text-align: start;
    max-width: 512px;
  }
`;
export const SecondaryHeader = styled(Type.h2) `
  margin: ${spacer16} 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  max-width: 312px;

  @media (min-width: ${screenSmMin}) {
    margin: ${spacer40} 0;
    padding: 0;
    font-size: 24px;
    max-width: 550px;
  }

  @media (min-width: ${screenLgMin}) {
    margin: ${spacer32} 0;
    text-align: start;
    max-width: 512px;
  }
`;
export const SupHeader = styled.p `
  margin: 0 0 ${spacer16};
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
    margin-bottom: ${spacer32};
  }
`;
export const ButtonGroup = styled.div `
  box-sizing: border-box;
  margin: 0 0 ${spacer32};

  &.mobile-only {
    display: block;
  }
  &.tablet-only,
  &.desktop-only {
    display: none;
  }

  @media (min-width: ${screenXsMin}) {
    margin-bottom: ${spacer40};
  }

  @media (min-width: ${screenSmMin}) {
    &.tablet-only {
      display: block;
    }
    &.mobile-only,
    &.desktop-only {
      display: none;
    }
  }

  @media (min-width: ${screenLgMin}) {
    margin-bottom: ${spacer32};

    a {
      width: auto;
    }

    &.desktop-only {
      display: block;
    }
    &.mobile-only,
    &.tablet-only {
      display: none;
    }
  }
`;
export const StyledAppStoreBadge = styled(AppStoreBadge) `
  margin-right: 20px;
`;
export const BottomLink = styled(TextLink) `
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
  margin: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 16px;
  }
`;
//# sourceMappingURL=components.js.map