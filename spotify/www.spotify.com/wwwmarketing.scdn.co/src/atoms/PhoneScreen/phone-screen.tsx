import React, { memo } from 'react';
import styled from 'styled-components';
import { white, gray50, green135 } from '@spotify-internal/encore-web';
import Image from '../Image/image';
const Row = styled.li `
  width: 100%;
  margin-top: 1.3em;
  margin-bottom: 1.3em;
`;
const getBackground = () => {
    const background = `<svg viewBox="0 0 417 478" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
    <rect x="1.5" y="1.5" width="410" height="850" rx="40.5" stroke="#211621" stroke-width="3"/>
    <rect x="182.987" y="23.8164" width="50.5536" height="8.9021" rx="4.45105" stroke="#211621" stroke-width="3"/>
    <g clip-path="url(#clip1)">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="21" y="22" width="375" height="812">
        <path d="M113.895 25.2C113.895 24.0799 113.895 23.5198 113.677 23.092C113.485 22.7157 113.179 22.4097 112.803 22.218C112.375 22 111.815 22 110.695 22H65.8C50.1185 22 42.2778 22 36.2883 25.0518C31.0197 27.7363 26.7363 32.0197 24.0518 37.2883C21 43.2778 21 51.1185 21 66.8V807.989C21 816.95 21 821.43 22.7439 824.853C24.2779 827.863 26.7256 830.311 29.7362 831.845C33.1587 833.589 37.6392 833.589 46.6 833.589H370.4C379.361 833.589 383.841 833.589 387.264 831.845C390.274 830.311 392.722 827.863 394.256 824.853C396 821.43 396 816.95 396 807.989V66.8C396 51.1185 396 43.2778 392.948 37.2883C390.264 32.0197 385.98 27.7363 380.712 25.0518C374.722 22 366.881 22 351.2 22H306.305C305.185 22 304.625 22 304.197 22.218C303.821 22.4097 303.515 22.7157 303.323 23.092C303.105 23.5198 303.105 24.0799 303.105 25.2V32.6364C303.105 39.357 303.105 42.7174 301.797 45.2843C300.647 47.5422 298.811 49.378 296.553 50.5285C293.986 51.8364 290.626 51.8364 283.905 51.8364H133.095C126.374 51.8364 123.014 51.8364 120.447 50.5285C118.189 49.378 116.353 47.5422 115.203 45.2843C113.895 42.7174 113.895 39.357 113.895 32.6364V25.2Z" fill="#C87D55"/>
      </mask>
      <g mask="url(#mask0)">
        <path d="M395 22H20V834H395V22Z" fill="#121212"/>
        <path opacity="0.35" d="M375.714 39.8334H359.106C357.909 39.8334 356.939 40.8034 356.939 42V48C356.939 49.1966 357.909 50.1667 359.106 50.1667H375.714C376.91 50.1667 377.88 49.1966 377.88 48V42C377.88 40.8034 376.91 39.8334 375.714 39.8334Z" stroke="${white}"/>
        <path opacity="0.4" d="M379.377 43.0001V47.0001C380.18 46.6613 380.702 45.8732 380.702 45.0001C380.702 44.1269 380.18 43.3388 379.377 43.0001Z" fill="${white}"/>
        <path d="M375.052 41.3334H359.766C359.03 41.3334 358.433 41.9303 358.433 42.6667V47.3334C358.433 48.0698 359.03 48.6667 359.766 48.6667H375.052C375.788 48.6667 376.385 48.0698 376.385 47.3334V42.6667C376.385 41.9303 375.788 41.3334 375.052 41.3334Z" fill="${white}"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M343.806 41.6152C346.025 41.6153 348.159 42.4694 349.767 44.001C349.888 44.1192 350.082 44.1177 350.201 43.9976L351.359 42.8273C351.419 42.7664 351.453 42.6839 351.452 42.598C351.452 42.5122 351.417 42.4301 351.356 42.3699C347.135 38.3176 340.477 38.3176 336.256 42.3699C336.195 42.43 336.16 42.5121 336.16 42.598C336.159 42.6838 336.193 42.7663 336.253 42.8273L337.411 43.9976C337.53 44.1179 337.724 44.1194 337.845 44.001C339.453 42.4693 341.587 41.6152 343.806 41.6152ZM343.806 45.4227C345.025 45.4227 346.201 45.8766 347.105 46.6964C347.227 46.8127 347.419 46.8102 347.539 46.6907L348.695 45.5204C348.756 45.459 348.789 45.3757 348.789 45.2892C348.788 45.2027 348.752 45.1201 348.69 45.0599C345.938 42.4955 341.677 42.4955 338.925 45.0599C338.863 45.1201 338.827 45.2027 338.826 45.2893C338.826 45.3758 338.86 45.4591 338.921 45.5204L340.076 46.6907C340.196 46.8102 340.388 46.8127 340.51 46.6964C341.413 45.8772 342.588 45.4233 343.806 45.4227ZM346.122 47.9846C346.124 48.0714 346.09 48.155 346.028 48.2158L344.028 50.2378C343.97 50.2972 343.89 50.3307 343.806 50.3307C343.723 50.3307 343.643 50.2972 343.584 50.2378L341.584 48.2158C341.522 48.155 341.488 48.0713 341.49 47.9845C341.492 47.8977 341.529 47.8156 341.594 47.7574C342.871 46.6751 344.742 46.6751 346.019 47.7574C346.083 47.8156 346.121 47.8978 346.122 47.9846Z" fill="${white}"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.175 39.6666H329.178C328.627 39.6666 328.181 40.1143 328.181 40.6666V49.3333C328.181 49.8856 328.627 50.3333 329.178 50.3333H330.175C330.726 50.3333 331.173 49.8856 331.173 49.3333V40.6666C331.173 40.1143 330.726 39.6666 330.175 39.6666ZM324.524 42H325.521C326.072 42 326.519 42.4477 326.519 43V49.3333C326.519 49.8856 326.072 50.3333 325.521 50.3333H324.524C323.973 50.3333 323.527 49.8856 323.527 49.3333V43C323.527 42.4477 323.973 42 324.524 42ZM320.867 44.3333H319.87C319.319 44.3333 318.872 44.781 318.872 45.3333V49.3333C318.872 49.8856 319.319 50.3333 319.87 50.3333H320.867C321.418 50.3333 321.864 49.8856 321.864 49.3333V45.3333C321.864 44.781 321.418 44.3333 320.867 44.3333ZM316.213 46.3333H315.215C314.665 46.3333 314.218 46.781 314.218 47.3333V49.3333C314.218 49.8856 314.665 50.3333 315.215 50.3333H316.213C316.764 50.3333 317.21 49.8856 317.21 49.3333V47.3333C317.21 46.781 316.764 46.3333 316.213 46.3333Z" fill="${white}"/>
        <path d="M56.0781 50.2563C58.7661 50.2563 60.3627 48.1543 60.3627 44.5947C60.3627 41.1011 58.6635 39.1675 56.1367 39.1675C53.8369 39.1675 52.2109 40.7129 52.2109 42.8809C52.2109 44.9097 53.6757 46.3892 55.6899 46.3892C56.9277 46.3892 57.9311 45.8179 58.4291 44.8145H58.5537C58.5317 47.2607 57.6455 48.6743 56.1 48.6743C55.1918 48.6743 54.4667 48.1836 54.2397 47.3926H52.3574C52.665 49.1211 54.1445 50.2563 56.0781 50.2563ZM56.144 44.895C54.9135 44.895 54.0639 44.0454 54.0639 42.8223C54.0639 41.6431 54.9575 40.7422 56.1513 40.7422C57.3452 40.7422 58.2387 41.6577 58.2387 42.8589C58.2387 44.0381 57.3671 44.895 56.144 44.895ZM63.3806 48.5425C64.0764 48.5425 64.5525 48.0444 64.5525 47.3853C64.5525 46.7188 64.0764 46.228 63.3806 46.228C62.6921 46.228 62.2087 46.7188 62.2087 47.3853C62.2087 48.0444 62.6921 48.5425 63.3806 48.5425ZM63.3806 43.1958C64.0764 43.1958 64.5525 42.7051 64.5525 42.0459C64.5525 41.3794 64.0764 40.8887 63.3806 40.8887C62.6921 40.8887 62.2087 41.3794 62.2087 42.0459C62.2087 42.7051 62.6921 43.1958 63.3806 43.1958ZM71.5547 50H73.3638V47.9858H74.792V46.3892H73.3638V39.4312H70.6978C69.2623 41.6138 67.7608 44.0234 66.3912 46.4111V47.9858H71.5547V50ZM68.1416 46.3306C69.1744 44.5508 70.3975 42.6099 71.4815 40.9692H71.584V46.4331H68.1416V46.3306ZM78.8207 50H80.7103V39.4312H78.828L76.0667 41.3647V43.1812L78.6961 41.3354H78.8207V50Z" fill="${white}"/>
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="clip0">
      <rect width="417" height="478" fill="${white}"/>
    </clipPath>
    <clipPath id="clip1">
      <rect width="375" height="812" fill="${white}" transform="translate(20 22)"/>
    </clipPath>
  </defs>
</svg>
`;
    return encodeURIComponent(background);
};
const List = styled.ul `
  margin: 0;
  padding: 0;
  color: ${white};

  list-style: none;
`;
const UINavigation = styled.div ``;
const HeaderGroup = styled.div `
  font-size: 2.9em;
  font-weight: 700;
`;
const SubHeaderGroup = styled.div `
  font-size: 1.6em;
  line-height: 2.2em;

  margin-top: 1em;
  margin-bottom: 1em;
`;
const HeaderEntry = styled.div `
  display: inline-block;
  text-transform: capitalize;
  margin-right: 0.7em;

  color: ${({ active }) => (active ? `${white}` : `${gray50}`)};
`;
const SubHeaderEntry = styled.div `
  display: inline-block;
  text-transform: capitalize;
  margin-right: 1.4em;

  color: ${({ active }) => (active ? `${white}` : `${gray50}`)};
  border-bottom: ${({ active }) => active ? `0.2em solid ${green135}` : 'none'};
`;
const Frame = styled.div `
  position: relative;
  width: 100%;
  padding-top: 100%;
  margin: 0 auto;

  user-select: none;

  background-position: bottom center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,${getBackground()}');
`;
const Content = styled.div `
  position: absolute;
  top: 20%;
  left: 15%;
`;
const TrackTitle = styled.div `
  font-size: 1.3em;
  font-weight: 700;
`;
const TrackAuthor = styled.div `
  color: ${gray50};
  margin-top: 0.1em;

  font-size: 1.1em;
`;
const AlbumArt = styled(Image) `
  display: inline-block;
  vertical-align: middle;

  width: 6em;
  height: 6em;
`;
const TrackMetadata = styled.div `
  margin-left: 1.2em;
  display: inline-block;
  vertical-align: middle;
`;
function PhoneScreen(props) {
    const { tracks, description, labels: { mainCategory1, mainCategory2, subCategory1, subCategory2, subCategory3, }, } = props;
    return (React.createElement(Frame, { role: "img", "aria-label": description },
        React.createElement(Content, null,
            React.createElement(UINavigation, null,
                React.createElement(HeaderGroup, null,
                    React.createElement(HeaderEntry, { active: true }, mainCategory1),
                    React.createElement(HeaderEntry, null, mainCategory2)),
                React.createElement(SubHeaderGroup, null,
                    React.createElement(SubHeaderEntry, null, subCategory1),
                    React.createElement(SubHeaderEntry, null, subCategory2),
                    React.createElement(SubHeaderEntry, { active: true }, subCategory3))),
            React.createElement(List, null, Array.isArray(tracks) &&
                tracks.map((track, i) => {
                    var _a;
                    const { title, author, cover } = track;
                    return (React.createElement(Row, { key: `track-row-${i}` },
                        ((_a = cover === null || cover === void 0 ? void 0 : cover.sources) === null || _a === void 0 ? void 0 : _a.small) && React.createElement(AlbumArt, Object.assign({}, cover)),
                        React.createElement(TrackMetadata, null,
                            title && React.createElement(TrackTitle, null, title),
                            author && React.createElement(TrackAuthor, null, author))));
                })))));
}
export default memo(PhoneScreen);
//# sourceMappingURL=phone-screen.js.map