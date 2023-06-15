import React from 'react';
import DeviceContext from './context/device';
import DirectionContext from './context/direction';
import MarketContext from './context/market';
import UserContext from './context/user';
import Theme from './theme';
function ComponentConfiguration(props) {
    const { device = {
        platform: null,
        gpb_supported: false,
    }, direction = 'ltr', market = null, user = {
        ineligibility_flag: null,
        authenticated: false,
    }, themeName, children, } = props;
    return (React.createElement(Theme, { themeName: themeName },
        React.createElement(DeviceContext.Provider, { value: device },
            React.createElement(DirectionContext.Provider, { value: direction },
                React.createElement(MarketContext.Provider, { value: market },
                    React.createElement(UserContext.Provider, { value: user }, children))))));
}
export default ComponentConfiguration;
//# sourceMappingURL=index.js.map