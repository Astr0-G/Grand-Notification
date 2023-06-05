import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useNotification } from "./NotificationContext";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    backdrop-filter: blur(2px);
  }

  to {
    transform: translateX(0);
    backdrop-filter: blur(2px);
  }
`;
const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    backdrop-filter: blur(2px);
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
  border: none !important;
  background-color: transparent !important;
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
    backdrop-filter: blur(2px);
  }
`;

const NotificationSuccessComponent = () => {
  return (
    <div>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_95_2783)">
          <rect width="80" height="80" rx="40" fill="#252525" />
        </g>
        <path
          d="M26.9946 41.2183L36.9543 49.7204C37.3741 50.0788 38.0049 50.0292 38.3636 49.6097L53.5739 31.8218"
          stroke="#00FFA3"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <defs>
          <filter
            id="filter0_b_95_2783"
            x="-40"
            y="-40"
            width="160"
            height="160"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_95_2783"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_95_2783"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
const NotificationErrorComponent = () => {
  return (
    <div>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_232_3403)">
          <rect width="80" height="80" rx="40" fill="#252525" />
        </g>
        <path
          d="M50.6064 29.3936L29.3932 50.6068"
          stroke="#D64848"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M50.6064 50.6064L29.3932 29.3932"
          stroke="#D64848"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <defs>
          <filter
            id="filter0_b_232_3403"
            x="-40"
            y="-40"
            width="160"
            height="160"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_232_3403"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_232_3403"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
const NotificationInfoComponent = () => {
  return (
    <div>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_232_3408)">
          <rect width="80" height="80" rx="40" fill="#252525" />
        </g>
        <path
          d="M40 28L40 42"
          stroke="#FFB038"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M40 50.5L40 50"
          stroke="#FFB038"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <defs>
          <filter
            id="filter0_b_232_3408"
            x="-40"
            y="-40"
            width="160"
            height="160"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_232_3408"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_232_3408"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
const NotificationCloseComponent = () => {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="14.1584"
          y="3.15918"
          width="1.50724"
          height="16.0829"
          transform="rotate(45 14.1584 3.15918)"
          fill="#505050"
        />
        <rect
          x="15.2151"
          y="14.5303"
          width="1.50777"
          height="16.0829"
          transform="rotate(135 15.2151 14.5303)"
          fill="#505050"
        />
      </svg>
    </div>
  );
};
const Notification = () => {
  const { notifications, removeNotification } = useNotification();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <NotificationSuccessComponent />;
      case "error":
        return <NotificationErrorComponent />;
      case "info":
      default:
        return <NotificationInfoComponent />;
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
              <NotificationCloseComponent />
            </CloseButton>
          </BlurBackground>
        </NotificationMessageContainer>
      ))}
    </NotificationContainer>
  );
};

export default Notification;
