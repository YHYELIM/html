import styled from 'styled-components';
import { Type, screenMdMin } from '@spotify-internal/encore-web';
const getBackground = () => {
    const background = `<svg viewBox="0 0 1280 720" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="3.061617e-15%" id="linearGradient-1">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#000000" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.09" opacity="0.8">
        <g id="Desktop---OTC-templete" fill="url(#linearGradient-1)">
            <path d="M184.640073,219.916538 C221.673347,205.429764 262.593281,199.296785 304.84788,203.76783 C446.058319,218.710533 548.460821,345.605849 533.559512,487.208551 C518.658202,628.811252 392.114406,731.498213 250.903967,716.55551 C109.693527,701.612807 7.29102527,574.717491 22.1923346,433.114789 C29.9216555,359.60728 67.7909279,296.644965 122.13084,255.126018 C113.037522,256.626171 103.621537,257.052685 94.0148857,256.037876 C36.3309785,249.934311 -5.49828748,198.105487 0.588369388,140.261342 C6.67502626,82.4319047 58.3602764,40.4864431 116.044184,46.5900078 C173.713424,52.6935725 215.54269,104.522397 209.456033,162.366541 C207.138704,184.486448 198.089385,204.238466 184.640073,219.916538 Z M526.008684,-48.7067994 C554.835591,-45.6692838 575.744315,-19.820911 572.706799,9.00599649 C569.669284,37.8476492 543.820911,58.7563729 514.994004,55.7041121 C486.152351,52.6665965 465.243627,26.8329689 468.295888,-2.00868376 C471.333403,-30.8355912 497.181776,-51.7443149 526.008684,-48.7067994 Z M1011.77391,467.511981 C1078.2315,459.340269 1140.22036,504.387564 1152.03896,571.098714 C1164.23975,640.043856 1118.24422,705.829074 1049.27298,718.04255 C995.221989,727.610507 943.243662,701.316996 917.357396,656.343187 C899.86469,665.999329 880.563914,673.024649 859.807862,676.69898 C758.497163,694.629714 661.816886,627.051423 643.883187,525.757472 C625.949488,424.463522 693.538953,327.813925 794.849653,309.883191 C896.160352,291.952457 992.825929,359.516051 1010.75963,460.810002 C1011.15652,463.043995 1011.46522,465.277988 1011.77391,467.511981 Z M1277.31629,50.2579675 C1294.01174,144.60299 1231.0771,234.616219 1136.74856,251.311984 C1042.40533,268.022433 952.393819,205.086594 935.683688,110.741571 C918.988241,16.4112316 981.922881,-73.6166807 1076.26611,-90.3124459 C1170.59465,-107.022895 1260.60616,-44.0723715 1277.31629,50.2579675 Z M1064.71468,389.227214 C1037.52494,394.035967 1011.58513,375.903881 1006.77656,348.713107 C1001.95328,321.522332 1020.09939,295.581538 1047.28913,290.772786 C1074.46416,285.964033 1100.40397,304.096119 1105.22724,331.286893 C1110.03581,358.477668 1091.90442,384.418462 1064.71468,389.227214 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>`;
    return encodeURIComponent(background);
};
export const Wrapper = styled.section `
  text-align: center;
  height: 100%;
  padding: 96px 16px 16px 16px;
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,${getBackground()}');
`;
export const Header = styled.header `
  text-align: center;
  margin: 28px auto 16px auto;
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url('${({ logo }) => logo}');
`;
export const Main = styled.main `
  max-width: 700px;
  margin: 0 auto;
`;
export const Headline = styled(Type.h1) `
  display: block;
  font-size: 38px;
  font-weight: 800;
  line-height: 46px;
  margin-top: 28px;
  margin-bottom: 12px;
  padding: 0;

  @media (min-width: ${screenMdMin}) {
    font-size: 56px;
    line-height: 64px;
  }
`;
export const SubHeadline = styled(Type.h2) `
  font-weight: 400;
  font-size: 1.5em;
  display: block;
  margin-top: 12px;
  margin-bottom: 24px;
  padding: 0;
`;
export const ButtonGroup = styled.div `
  margin-top: 40px;
`;
export const LegalDisclaimer = styled.footer `
  font-size: 12px;
  margin: 24px auto 0 auto;
  max-width: 700px;

  a {
    color: #000;
    font-weight: 800;
  }
  a:link {
    color: #000;
  }
  a:active {
    color: #000;
  }
  a:visited {
    color: #000;
  }
  a:hover {
    color: #000;
  }
`;
//# sourceMappingURL=components.js.map