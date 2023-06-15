import styled from 'styled-components';
import { white, IconChevronUp, screenSmMin, screenXsMax, spacer72, } from '@spotify-internal/encore-web';
import Header from '../../atoms/Header';
import Type from '../../atoms/RiF_Experimental_Type';
import { responsiveSize } from '../../utils/helpers';
import RiF_Experimental_Container from '../../atoms/RiF_Experimental_Container';
const iconSize = '24px';
export const List = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li `
  border-bottom: 1px solid var(--background-tinted-highlight, ${white});
  &:last-child {
    border-bottom: unset;
  }
`;
export const ExpandIcon = styled(IconChevronUp) `
  vertical-align: middle;
  transform: rotate(180deg);
  width: ${iconSize};
  height: ${iconSize};
`;
export const QuestionTitleText = styled.div `
  display: inline-block;
  vertical-align: middle;
  padding-right: 10px;
  width: calc(100% - ${iconSize});
  box-sizing: border-box;
`;
export const QuestionTitle = styled.summary `
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  padding: 26px 28px;
  margin-top: 2px;
  position: relative;

  list-style: none;
  &::-webkit-details-marker {
    display: none;
  }

  outline: none;
  &:focus,
  &:hover {
    background-color: var(--background-elevated-highlight, #f0f0f0);

    & ${QuestionTitleText} {
      text-decoration: underline;
    }
  }
`;
export const QuestionContainer = styled.details `
  background-color: var(--background-elevated-base, #fff);
  color: var(--text-base, #000);

  &[open] ${ExpandIcon} {
    transform: rotate(0deg);
  }
`;
export const QuestionContent = styled.p `
  padding: 15px 32px 32px 32px;

  margin: 0;

  a {
    color: inherit;
    text-decoration: underline;
  }
`;
export const CustomFaqHeader = styled(Header) `
  --headline-line-height: ${responsiveSize(80, 120, 320, 1440)};
  --subheadline-font-size: ${responsiveSize(20, 32, 320, 1440)};
  --subheadline-line-height: ${responsiveSize(26, 44, 320, 1440)};

  h2 {
    font-weight: 700;
    padding: 0;
    margin: 0;
    color: #fff;
  }

  h3 {
    color: #fff;
  }
  @media (min-width: ${screenSmMin}) {
    h2 {
      color: #000;
    }
    h3 {
      color: #000;
    }
  }
`;
export const FaqImageContainer = styled(RiF_Experimental_Container) `
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${screenXsMax}) {
    background-color: #191414;
    background-image: none !important;
  }
`;
export const FaqText = styled(Type) `
  margin-top: 30px;
  text-align: center;
  color: #fff;

  a {
    color: #fff;
  }

  @media (min-width: ${screenSmMin}) {
    margin-top: ${spacer72};
    color: #000;

    a {
      color: #000;
    }
  }
`;
//# sourceMappingURL=components.js.map