var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Backdrop, createBasicColorSet, IconCheck, DialogAlert, Banner, white, black, gray7, spacer16, spacer24, } from '@spotify-internal/encore-web';
import Button from '../Button';
const SharingInputWrapper = styled.div `
  display: block;
`;
const SharingInput = styled.div `
  display: inline-block;
  margin-bottom: ${spacer16};
  position: relative;
  padding: 5px;
  border: 1px dashed ${black};
  border-radius: 5px;
  min-height: 37px;
  max-width: 300px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  cursor: not-allowed;
  user-select: none;
  &::after {
    content: ' ';
    width: 100px;
    height: 100px;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      var(--background-base) 80%
    );
    top: 0;
    right: 0;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const SharingWrapper = styled.form `
  &:valid ${SharingInput} {
    user-select: all;
    cursor: copy;
    overflow-x: scroll;
    ::after {
      display: none;
    }
  }
`;
const ButtonContainer = styled.div `
  margin-top: ${spacer24};
`;
const SharingButton = styled(Button) `
  width: auto;
  ${({ isVisible }) => !isVisible && `display: none;`}
`;
const SharingDialog = styled(DialogAlert) `
  text-align: center;
  background-color: ${gray7};
  color: ${white};
  width: 140px;
  header,
  footer {
    display: none;
  }
`;
const SharingErrorBanner = styled(Banner) `
  --background-base: #e22134;
  --text-base: #fff;

  border-radius: 4px;
  margin-top: ${spacer24};
`;
const SharingCheckboxLabel = styled.label `
  display: block;
  font-weight: normal;
`;
const Sharing = ({ legalAgreementText, ctaCopyText, ctaShareText, legalAgreementError, shareLink, shareTitle, shareText, ctaBackgroundColor, successText, containerAriaLabel, id, }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [buttonText, setButtonText] = useState(ctaCopyText);
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const handleCheckboxClick = () => setChecked(!isChecked);
    useEffect(() => {
        setIsButtonVisible(true);
        if (!!navigator.share && ctaShareText) {
            setButtonText(ctaShareText);
        }
    }, [ctaShareText]);
    const dialogBody = () => {
        return (React.createElement("div", { role: "alert", "aria-labelledby": "successTextDialog" },
            React.createElement(IconCheck, { iconSize: 64 }),
            React.createElement("p", { id: "successTextDialog" }, successText)));
    };
    const copyToClipboardFallback = () => {
        const successful = document.execCommand(shareLink);
        if (successful) {
            setIsCopied(true);
            setIsErrorVisible(false);
        }
    };
    const handleClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (!isChecked) {
            setIsErrorVisible(true);
        }
        else {
            if (!!navigator.share) {
                const shareData = {
                    title: shareTitle,
                    text: shareText,
                    url: shareLink,
                };
                try {
                    yield navigator.share(shareData).then(() => setIsErrorVisible(false));
                }
                catch (_a) {
                    console.log('navigator.share failed');
                }
            }
            else {
                if (!navigator.clipboard)
                    copyToClipboardFallback();
                else {
                    try {
                        yield navigator.clipboard.writeText(shareLink).then(() => {
                            setIsCopied(true);
                            setIsErrorVisible(false);
                            setTimeout(() => setIsCopied(false), 8000);
                        });
                    }
                    catch (_b) {
                        console.log('navigator.clipboard failed');
                    }
                }
            }
        }
    });
    return (React.createElement(SharingWrapper, null,
        isCopied && (React.createElement(Backdrop, { center: true },
            React.createElement(SharingDialog, { body: dialogBody() }))),
        React.createElement(SharingInputWrapper, { "aria-label": containerAriaLabel, "aria-disabled": !isChecked, "aria-live": "polite" },
            React.createElement(SharingInput, { tabIndex: isChecked ? 0 : -1, "aria-hidden": !isChecked }, shareLink)),
        legalAgreementText && (React.createElement(React.Fragment, null,
            React.createElement(SharingCheckboxLabel, { htmlFor: "agree-tc" },
                React.createElement("input", { type: "checkbox", id: "agree-tc", onClick: handleCheckboxClick, required: true }),
                legalAgreementText),
            isErrorVisible && !isChecked && (React.createElement(SharingErrorBanner, { colorSet: "negative" }, legalAgreementError)))),
        React.createElement(ButtonContainer, null,
            React.createElement(SharingButton, { isVisible: isButtonVisible, id: id, type: "submit", value: buttonText, UNSAFE_colorSet: createBasicColorSet(ctaBackgroundColor || '#000'), children: buttonText, onClick: handleClick }))));
};
export default Sharing;
//# sourceMappingURL=sharing.js.map