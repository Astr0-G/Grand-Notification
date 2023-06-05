import React, { ReactNode } from "react";
import Notification from "./Notification";
interface Notification {
    id: string;
    message: string;
    displayTime: number;
    type: "info" | "success" | "error";
    removing: boolean;
}
interface NotificationContextType {
    notifications: Notification[];
    addNotification: (message: string, type: "info" | "success" | "error", displayTime: number) => void;
    removeNotification: (id: string) => void;
}
export declare const NotificationContext: React.Context<NotificationContextType | undefined>;
interface NotificationProviderProps {
    children: ReactNode;
}
export declare const NotificationProvider: React.FC<NotificationProviderProps>;
export declare const useNotification: () => NotificationContextType;
export {};
