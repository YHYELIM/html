import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import Image from '../Image/image';
const Cover = styled(Image) `
  width: 100%;
  height: auto;
  padding-top: 100%;
`;
const EmptyCover = styled.div `
  width: 100%;
  height: auto;
  padding-top: 100%;
  background-color: #ddd;
  border: 1px solid #000;
`;
const positioner = (element) => {
    return css `
    &:nth-child(${element}) {
      top: calc(var(--cover-size) * var(--offset) * ${element});
      right: calc(var(--cover-size) * var(--offset) * ${element});
    }
  `;
};
const ListEntry = styled.li `
  width: var(--cover-size); //defined by the parent

  box-sizing: border-box;
  position: absolute;

  ${positioner(1)};
  ${positioner(2)};
  ${positioner(3)};
  ${positioner(4)};
`;
const List = styled.ul `
  --cover-size: 50%;
  --offset: 0.2;

  list-style: none;
  counter-reset: stacked-albums;
  padding-bottom: 100%;
  position: relative;
`;
const ListContainer = styled.div `
  width: 100%;
  margin: 0 auto;
`;
function StackedCovers(props) {
    const { covers } = props;
    return (React.createElement(ListContainer, null,
        React.createElement(List, { "aria-hidden": "true" }, Array.isArray(covers) &&
            covers.map((cover, i) => {
                var _a;
                return ((_a = cover === null || cover === void 0 ? void 0 : cover.sources) === null || _a === void 0 ? void 0 : _a.small) ? (React.createElement(ListEntry, { key: `cover-${i}` },
                    React.createElement(Cover, Object.assign({}, cover)))) : (React.createElement(ListEntry, { key: `cover-${i}` },
                    React.createElement(EmptyCover, null)));
            }))));
}
export default memo(StackedCovers);
//# sourceMappingURL=stacked-covers.js.map