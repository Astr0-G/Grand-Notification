"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const NotificationContext_1 = require("./NotificationContext");
const slideInFromRight = (0, styled_components_1.keyframes) `
  from {
    transform: translateX(100%);
    backdrop-filter: blur(2px);
  }

  to {
    transform: translateX(0);
    backdrop-filter: blur(2px);
  }
`;
const slideOutToRight = (0, styled_components_1.keyframes) `
  from {
    transform: translateX(0);
    backdrop-filter: blur(2px);
  }

  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;
const NotificationContainer = styled_components_1.default.div `
  position: fixed;
  top: 10.3%;
  right: 3.6458%;
  z-index: 999;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
`;
const NotificationMessageContainer = styled_components_1.default.div `
  width: 398px;
  height: 112px;
  animation: ${(props) => props.removing
    ? (0, styled_components_1.css) `
          ${slideOutToRight} 0.5s forwards
        `
    : (0, styled_components_1.css) `
          ${slideInFromRight} 1s forwards
        `};
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
`;
const NotificationMessage = styled_components_1.default.div `
  color: white;
  opacity: 100% !important;
  width: 260px;
  cursor: default;
  user-select: none;
  z-index: 10;
  -webkit-text-stroke: 0.1px black;
`;
const CloseButton = styled_components_1.default.button `
  position: absolute;
  top: 11px;
  right: 11px;
  border: none !important;
  background-color: transparent !important;
  &:hover {
    opacity: 0.5;
  }
`;
const IconBackground = styled_components_1.default.div `
  margin-left: 16px;
  margin-right: 19px;
`;
const BlurBackground = styled_components_1.default.div `
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #454545;
    opacity: 0.5;
    z-index: -2;
    backdrop-filter: blur(2px);
  }
`;
const NotificationSuccessComponent = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("svg", { width: "80", height: "80", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("g", { filter: "url(#filter0_b_95_2783)" },
                react_1.default.createElement("rect", { width: "80", height: "80", rx: "40", fill: "#252525" })),
            react_1.default.createElement("path", { d: "M26.9946 41.2183L36.9543 49.7204C37.3741 50.0788 38.0049 50.0292 38.3636 49.6097L53.5739 31.8218", stroke: "#00FFA3", strokeWidth: "6", strokeLinecap: "round" }),
            react_1.default.createElement("defs", null,
                react_1.default.createElement("filter", { id: "filter0_b_95_2783", x: "-40", y: "-40", width: "160", height: "160", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    react_1.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    react_1.default.createElement("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
                    react_1.default.createElement("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_95_2783" }),
                    react_1.default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_backgroundBlur_95_2783", result: "shape" }))))));
};
const NotificationErrorComponent = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("svg", { width: "80", height: "80", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("g", { filter: "url(#filter0_b_232_3403)" },
                react_1.default.createElement("rect", { width: "80", height: "80", rx: "40", fill: "#252525" })),
            react_1.default.createElement("path", { d: "M50.6064 29.3936L29.3932 50.6068", stroke: "#D64848", strokeWidth: "6", strokeLinecap: "round" }),
            react_1.default.createElement("path", { d: "M50.6064 50.6064L29.3932 29.3932", stroke: "#D64848", strokeWidth: "6", strokeLinecap: "round" }),
            react_1.default.createElement("defs", null,
                react_1.default.createElement("filter", { id: "filter0_b_232_3403", x: "-40", y: "-40", width: "160", height: "160", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    react_1.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    react_1.default.createElement("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
                    react_1.default.createElement("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_232_3403" }),
                    react_1.default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_backgroundBlur_232_3403", result: "shape" }))))));
};
const NotificationInfoComponent = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("svg", { width: "80", height: "80", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("g", { filter: "url(#filter0_b_232_3408)" },
                react_1.default.createElement("rect", { width: "80", height: "80", rx: "40", fill: "#252525" })),
            react_1.default.createElement("path", { d: "M40 28L40 42", stroke: "#FFB038", strokeWidth: "6", strokeLinecap: "round" }),
            react_1.default.createElement("path", { d: "M40 50.5L40 50", stroke: "#FFB038", strokeWidth: "6", strokeLinecap: "round" }),
            react_1.default.createElement("defs", null,
                react_1.default.createElement("filter", { id: "filter0_b_232_3408", x: "-40", y: "-40", width: "160", height: "160", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    react_1.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    react_1.default.createElement("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
                    react_1.default.createElement("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_232_3408" }),
                    react_1.default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_backgroundBlur_232_3408", result: "shape" }))))));
};
const NotificationCloseComponent = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("rect", { x: "14.1584", y: "3.15918", width: "1.50724", height: "16.0829", transform: "rotate(45 14.1584 3.15918)", fill: "#505050" }),
            react_1.default.createElement("rect", { x: "15.2151", y: "14.5303", width: "1.50777", height: "16.0829", transform: "rotate(135 15.2151 14.5303)", fill: "#505050" }))));
};
const Notification = () => {
    const { notifications, removeNotification } = (0, NotificationContext_1.useNotification)();
    const getNotificationIcon = (type) => {
        switch (type) {
            case "success":
                return react_1.default.createElement(NotificationSuccessComponent, null);
            case "error":
                return react_1.default.createElement(NotificationErrorComponent, null);
            case "info":
            default:
                return react_1.default.createElement(NotificationInfoComponent, null);
        }
    };
    return (react_1.default.createElement(NotificationContainer, null, notifications.map((notification) => (react_1.default.createElement(NotificationMessageContainer, { key: notification.id, removing: notification.removing },
        react_1.default.createElement(BlurBackground, null,
            react_1.default.createElement(IconBackground, null, getNotificationIcon(notification.type)),
            react_1.default.createElement(NotificationMessage, null, notification.message),
            react_1.default.createElement(CloseButton, { onClick: () => removeNotification(notification.id) },
                react_1.default.createElement(NotificationCloseComponent, null))))))));
};
exports.default = Notification;
