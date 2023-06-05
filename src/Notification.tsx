import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useNotification } from "./NotificationContext";
import { ReactComponent as NotificationSuccess } from "./assets/svg/NotificationSuccess.svg";
import { ReactComponent as NotificationError } from "./assets/svg/NotificationError.svg";
import { ReactComponent as NotificationInfo } from "./assets/svg/NotificationInfo.svg";
import { ReactComponent as NotificationClose } from "./assets/svg/NotificationClose.svg";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    backdrop-filter: blur(5px);
  }

  to {
    transform: translateX(0);
    backdrop-filter: blur(5px);
  }
`;
const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    backdrop-filter: blur(5px);
  }

  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  top: 10.3%;
  right: 3.6458%;
  z-index: 999;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
`;

const NotificationMessageContainer = styled.div<{ removing: boolean }>`
  width: 398px;
  height: 112px;
  animation: ${(props: any) =>
    props.removing
      ? css`
          ${slideOutToRight} 0.5s forwards
        `
      : css`
          ${slideInFromRight} 1s forwards
        `};
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
`;

const NotificationMessage = styled.div`
  color: white;
  opacity: 100% !important;
  width: 260px;
  cursor: default;
  user-select: none;
  z-index: 10;
  -webkit-text-stroke: 0.1px black;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 11px;
  right: 11px;
`;

const NorificationCloseIcon = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;
const IconBackground = styled.div`
  margin-left: 16px;
  margin-right: 19px;
`;

const BlurBackground = styled.div`
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
  const { notifications, removeNotification } = useNotification();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <NotificationSuccess />;
      case "error":
        return <NotificationError />;
      case "info":
      default:
        return <NotificationInfo />;
    }
  };

  return (
    <NotificationContainer>
      {notifications.map((notification: any) => (
        <NotificationMessageContainer
          key={notification.id}
          removing={notification.removing}
        >
          <BlurBackground>
            <IconBackground>
              {getNotificationIcon(notification.type)}
            </IconBackground>
            <NotificationMessage>{notification.message}</NotificationMessage>
            <CloseButton onClick={() => removeNotification(notification.id)}>
              <NorificationCloseIcon>
                <NotificationClose />
              </NorificationCloseIcon>
            </CloseButton>
          </BlurBackground>
        </NotificationMessageContainer>
      ))}
    </NotificationContainer>
  );
};

export default Notification;
