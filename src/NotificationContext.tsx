import React, { createContext, useState, useContext, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
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
  addNotification: (
    message: string,
    type: "info" | "success" | "error",
    displayTime: number
  ) => void;
  removeNotification: (id: string) => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    message: string,
    type: "info" | "success" | "error",
    displayTime: number
  ) => {
    const newNotification: Notification = {
      id: uuidv4(),
      message,
      type,
      displayTime,
      removing: false,
    };
    setNotifications((prevNotifications: any) => [
      ...prevNotifications,
      newNotification,
    ]);

    setTimeout(() => {
      removeNotification(newNotification.id);
    }, displayTime);
  };

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications: any) =>
      prevNotifications.map((notification: any) =>
        notification.id === id
          ? { ...notification, removing: true }
          : notification
      )
    );

    setTimeout(() => {
      setNotifications((prevNotifications: any) =>
        prevNotifications.filter((notification: any) => notification.id !== id)
      );
    }, 400);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      <Notification />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
