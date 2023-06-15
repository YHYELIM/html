import styled from 'styled-components';
import { white, IconChevronUp } from '@spotify-internal/encore-web';
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
//# sourceMappingURL=components.js.map