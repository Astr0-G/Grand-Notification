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
const NotificationSuccess_svg_1 = require("./assets/svg/NotificationSuccess.svg");
const NotificationError_svg_1 = require("./assets/svg/NotificationError.svg");
const NotificationInfo_svg_1 = require("./assets/svg/NotificationInfo.svg");
const NotificationClose_svg_1 = require("./assets/svg/NotificationClose.svg");
const slideInFromRight = (0, styled_components_1.keyframes) `
  from {
    transform: translateX(100%);
    backdrop-filter: blur(5px);
  }

  to {
    transform: translateX(0);
    backdrop-filter: blur(5px);
  }
`;
const slideOutToRight = (0, styled_components_1.keyframes) `
  from {
    transform: translateX(0);
    backdrop-filter: blur(5px);
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
`;
const NorificationCloseIcon = styled_components_1.default.img `
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
    backdrop-filter: blur(5px);
  }
`;
const Notification = () => {
    const { notifications, removeNotification } = (0, NotificationContext_1.useNotification)();
    const getNotificationIcon = (type) => {
        switch (type) {
            case "success":
                return react_1.default.createElement(NotificationSuccess_svg_1.ReactComponent, null);
            case "error":
                return react_1.default.createElement(NotificationError_svg_1.ReactComponent, null);
            case "info":
            default:
                return react_1.default.createElement(NotificationInfo_svg_1.ReactComponent, null);
        }
    };
    return (react_1.default.createElement(NotificationContainer, null, notifications.map((notification) => (react_1.default.createElement(NotificationMessageContainer, { key: notification.id, removing: notification.removing },
        react_1.default.createElement(BlurBackground, null,
            react_1.default.createElement(IconBackground, null, getNotificationIcon(notification.type)),
            react_1.default.createElement(NotificationMessage, null, notification.message),
            react_1.default.createElement(CloseButton, { onClick: () => removeNotification(notification.id) },
                react_1.default.createElement(NorificationCloseIcon, null,
                    react_1.default.createElement(NotificationClose_svg_1.ReactComponent, null)))))))));
};
exports.default = Notification;
