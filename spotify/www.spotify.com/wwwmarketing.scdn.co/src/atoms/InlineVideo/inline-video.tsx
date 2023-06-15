import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { IconPlay, IconPause, gray7, gray20, gray80, gray95, spacer12, } from '@spotify-internal/encore-web';
const PlayPauseControl = styled.button `
  --media-control-size: 48px;
  --media-control-color: ${gray20};
  --media-control-background-color: rgba(255, 255, 255, 0.4);
  --media-control-border-color: rgba(255, 255, 255, 0.6);

  /*
     * Ensures the element is not covered by iOS UI
     * (particularly in iOS Safari 15 floating address bar)
     * context: https://developer.apple.com/videos/play/wwdc2021/10029/ ~13 min;
     * and: https://webkit.org/blog/7929/designing-websites-for-iphone-x/
     * however, override only if max() is supported.
     */
  bottom: ${spacer12};
  right: ${spacer12};

  @supports (margin-bottom: max(0px)) {
    margin-bottom: env(safe-area-inset-bottom, 0);
  }

  color: var(--media-control-color);
  width: var(--media-control-size);
  height: var(--media-control-size);
  border-radius: var(--media-control-size);
  background-color: var(--media-control-background-color);
  border-color: var(--media-control-border-color);
  border-width: 1px;
  border-style: solid;
  position: absolute;

  cursor: pointer;
  z-index: 1;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.6);
  // only apply hover variations to hover-capable devices
  @media (hover: hover) {
    &:hover {
      --media-control-color: ${gray7};
      --media-control-background-color: rgba(255, 255, 255, 0.6);
    }
  }

  // provide a more interface-friendly colour scheme
  @media (prefers-color-scheme: dark) {
    --media-control-background-color: rgba(0, 0, 0, 0.4);
    --media-control-border-color: rgba(0, 0, 0, 0.6);
    --media-control-color: ${gray80};

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.6);
    @media (hover: hover) {
      &:hover {
        --media-control-color: ${gray95};
        --media-control-background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
const VideoContainer = styled.div `
  position: relative;

  /*
   * Only show this video container if js is enabled.
   *
   * We'll assume it is disabled, until js execution
   * sets the js enabled flag to true.
   *
   * When js is disabled, the <noscript> tag in the
   * render method will take care of showing the video.
   *
   */
  ${({ jsEnabled }) => !jsEnabled && 'display: none;'};
`;
const Video = styled.video `
  object-fit: contain;
  object-position: bottom right;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;
const CustomIconPlay = styled(IconPlay) `
  display: block;
  margin: auto;
`;
const CustomIconPause = styled(IconPause) `
  display: block;
  margin: auto;
`;
export const getVideoTagWithOptions = (jsEnabled, { setRefs, prefersSaveData, prefersReducedMotion, description, poster, sources, containerInView, }) => {
    const videoTag = (React.createElement(Video, { controlsList: jsEnabled ? undefined : 'nofullscreen nodownload', tabIndex: jsEnabled ? -1 : undefined, autoPlay: jsEnabled ? !(prefersSaveData || prefersReducedMotion) : true, controls: !jsEnabled, ref: jsEnabled ? setRefs : null, preload: prefersSaveData ? 'none' : 'auto', "aria-label": description, poster: poster, "x-webkit-airplay": "deny", disablePictureInPicture: true, playsInline: true, muted: true, loop: true },
        sources.webm &&
            (!jsEnabled || containerInView) && (React.createElement("source", { src: sources.webm, type: "video/webm" })),
        sources.ogg && (!jsEnabled || containerInView) && (React.createElement("source", { src: sources.ogg, type: "video/ogg" })),
        sources.mp4 && (!jsEnabled || containerInView) && (React.createElement("source", { src: sources.mp4, type: "video/mp4" }))));
    return videoTag;
};
function InlineVideo(props) {
    const { labels, description, poster, sources } = props;
    const videoRef = useRef(null);
    const [jsEnabled, setJsEnabled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
    const [prefersSaveData, setPrefersSaveData] = useState(true);
    const [pageIsVisible, setPageIsVisible] = useState(true);
    const [pausedByUser, setPausedByUser] = useState(false);
    const [videoContainerRef, containerInView] = useInView({
        triggerOnce: true,
        rootMargin: '200px',
    });
    const [videoObserverRef, videoObserverInView] = useInView();
    const setRefs = useCallback(node => {
        videoRef.current = node;
        videoObserverRef(node);
    }, [videoObserverRef]);
    const pauseVideo = useCallback(() => {
        var _a;
        setIsPlaying(false);
        (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.pause();
    }, []);
    const playVideo = useCallback(() => {
        var _a;
        setIsPlaying(true);
        (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.play();
    }, []);
    useEffect(() => {
        var _a;
        setJsEnabled(true);
        const browserNavigator = window.navigator;
        setPrefersSaveData(((_a = browserNavigator === null || browserNavigator === void 0 ? void 0 : browserNavigator.connection) === null || _a === void 0 ? void 0 : _a.saveData) === true);
        const motionPreferencesMQ = window.matchMedia('(prefers-reduced-motion: no-preference)');
        setPrefersReducedMotion(!motionPreferencesMQ.matches);
        const motionPreferencesMQCallback = () => setPrefersReducedMotion(!motionPreferencesMQ.matches);
        motionPreferencesMQ.addEventListener('change', () => setPrefersReducedMotion(!motionPreferencesMQ.matches));
        const visibilityChangeCallback = () => setPageIsVisible(!document.hidden);
        document.addEventListener('visibilitychange', visibilityChangeCallback);
        if (videoObserverInView &&
            pageIsVisible &&
            !prefersReducedMotion &&
            !pausedByUser &&
            !prefersSaveData) {
            if (!isPlaying) {
                playVideo();
            }
        }
        else if (isPlaying) {
            pauseVideo();
        }
        return () => {
            motionPreferencesMQ.removeEventListener('change', motionPreferencesMQCallback);
            document.removeEventListener('visibilitychange', visibilityChangeCallback);
        };
    }, [
        isPlaying,
        pageIsVisible,
        videoObserverInView,
        prefersReducedMotion,
        prefersSaveData,
        pausedByUser,
        playVideo,
        pauseVideo,
    ]);
    const handlePlayVideo = () => {
        if (isPlaying) {
            setPausedByUser(true);
            pauseVideo();
        }
        else {
            setPausedByUser(false);
            playVideo();
        }
    };
    const getVideoTag = (renderJsEnabled) => getVideoTagWithOptions(renderJsEnabled, {
        setRefs,
        prefersSaveData,
        prefersReducedMotion,
        sources,
        description,
        poster,
        containerInView,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(VideoContainer, { ref: videoContainerRef, jsEnabled: jsEnabled },
            getVideoTag(true),
            React.createElement(PlayPauseControl, { onClick: handlePlayVideo, "aria-label": `${isPlaying ? labels.INTERACT_PAUSE : labels.INTERACT_PLAY} ${description}` }, isPlaying ? (React.createElement(CustomIconPause, { iconSize: 16, "aria-hidden": "true" })) : (React.createElement(CustomIconPlay, { iconSize: 16, "aria-hidden": "true" })))),
        React.createElement("noscript", null, getVideoTag(false))));
}
export default InlineVideo;
//# sourceMappingURL=inline-video.js.map