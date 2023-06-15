import React from 'react';
import styled from 'styled-components';
import { printThemeVars } from '../../utils/helpers';
import { lightTheme, darkTheme } from '@spotify-internal/encore-web';
const themeMap = {
    encoreLight: {
        values: Object.assign({}, lightTheme.base, { warning: lightTheme.warning }, { inverted: lightTheme.invertedDark }),
    },
    encoreDark: {
        values: Object.assign({}, darkTheme.base, { warning: darkTheme.warning }, { inverted: lightTheme.invertedLight }),
    },
};
const ThemedGroup = styled.div `
  ${({ customTheme }) => printThemeVars(customTheme)}
`;
const UnthemedGroup = styled.div ``;
export const getThemeValues = (themeName) => themeMap[themeName];
const Theme = ({ themeName, children, }) => {
    if (!themeName || !getThemeValues(themeName)) {
        return React.createElement(UnthemedGroup, null, children);
    }
    return (React.createElement(ThemedGroup, { customTheme: getThemeValues(themeName) }, children));
};
export default Theme;
//# sourceMappingURL=index.js.map