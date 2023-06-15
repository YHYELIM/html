import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { screenSmMin } from '@spotify-internal/encore-web';
import Image from '../Image/image';
const fadedAlbumsAnimation = keyframes `
  0% { opacity: 1; }
  25% { opacity: 1; }
  55% { opacity: 0; }
  100% { opacity: 0; }
`;
const fadedAlbumsAnimationImpl = css `
  --animation-duration: 8s;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  animation: ${fadedAlbumsAnimation};
  animation-timing-function: cubic-bezier(0.95, 0, 0.95, 0.65);
  animation-iteration-count: infinite;
  animation-direction: alternate;

  animation-duration: var(--animation-duration);

  @media (prefers-reduced-motion) {
    & {
      animation-duration: calc(var(--animation-duration) * 3);
    }
  }
`;
const Cover = styled(Image) `
  width: 100%;
  height: auto;
  padding-top: 100%;

  ${({ alternate }) => alternate && fadedAlbumsAnimationImpl};
`;
const EmptyCover = styled.div `
  width: 100%;
  height: auto;
  padding-top: 100%;
  background-color: #ddd;
`;
const ListEntry = styled.li `
  width: var(--cover-size); //defined by the parent

  box-sizing: border-box;
  position: relative;
`;
const List = styled.ul `
  --cover-size: 30%;
  --offset: 25%;

  display: flex;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  list-style: none;
  margin: 0 auto;
  padding: 0;

  width: 100%;
  max-width: ${screenSmMin};

  ${ListEntry}:nth-child(5n) > ${Cover} {
    animation-delay: 3s;
  }
  ${ListEntry}:nth-child(3n) > ${Cover} {
    animation-delay: 6s;
  }

  ${ListEntry}:nth-child(5n) > ${Cover} {
    margin-bottom: var(--offset);
  } /* fill the container space taken by translate() below */

  ${ListEntry}:nth-child(3n),
  ${ListEntry}:nth-child(3n+1) {
    transform: translate(0, var(--offset));
  } /* offset first and last column vertically */
  ${ListEntry}:nth-child(1n+4) {
    margin-top: calc((100% - var(--cover-size) * 3) / 3);
  } /* distribute space evenly vertically */
`;
function AnimatedCovers(props) {
    const { covers } = props;
    return (React.createElement(List, { "aria-hidden": "true" }, Array.isArray(covers) &&
        covers.map((cover, i) => {
            var _a, _b;
            const { base, alternate } = cover;
            return ((_a = base === null || base === void 0 ? void 0 : base.sources) === null || _a === void 0 ? void 0 : _a.small) || ((_b = alternate === null || alternate === void 0 ? void 0 : alternate.sources) === null || _b === void 0 ? void 0 : _b.small) ? (React.createElement(ListEntry, { key: `cover-${i}` },
                React.createElement(Cover, Object.assign({}, base)),
                alternate && (React.createElement(Cover, Object.assign({ key: `cover-${i}` }, alternate, { alternate: true }))))) : (React.createElement(ListEntry, { key: `cover-${i}` },
                React.createElement(EmptyCover, null)));
        })));
}
export default memo(AnimatedCovers);
//# sourceMappingURL=animated-covers.js.map