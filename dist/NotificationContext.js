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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotification = exports.NotificationProvider = exports.NotificationContext = void 0;
const react_1 = __importStar(require("react"));
const uuid_1 = require("uuid");
exports.NotificationContext = (0, react_1.createContext)(undefined);
const NotificationProvider = ({ children, }) => {
    const [notifications, setNotifications] = (0, react_1.useState)([]);
    const addNotification = (message, type, displayTime) => {
        const newNotification = {
            id: (0, uuid_1.v4)(),
            message,
            type,
            displayTime,
            removing: false,
        };
        setNotifications((prevNotifications) => [
            ...prevNotifications,
            newNotification,
        ]);
        setTimeout(() => {
            removeNotification(newNotification.id);
        }, displayTime);
    };
    const removeNotification = (id) => {
        setNotifications((prevNotifications) => prevNotifications.map((notification) => notification.id === id
            ? { ...notification, removing: true }
            : notification));
        setTimeout(() => {
            setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
        }, 400);
    };
    return (react_1.default.createElement(exports.NotificationContext.Provider, { value: { notifications, addNotification, removeNotification } }, children));
};
exports.NotificationProvider = NotificationProvider;
const useNotification = () => {
    const context = (0, react_1.useContext)(exports.NotificationContext);
    if (context === undefined) {
        throw new Error("useNotification must be used within a NotificationProvider");
    }
    return context;
};
exports.useNotification = useNotification;
