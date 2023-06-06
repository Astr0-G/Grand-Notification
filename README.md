# Grand-Notification

## Introduction

this is a notification plugin for web application realeased on [npm](https://www.npmjs.com/package/grand-notification). it is written in typescript and it supports javascript and typescript.

## Demo

[demo](https://grand-notification-demo.vercel.app/)

## Usage

- Installation

```
npm i grand-notification
```

or

```
yarn add grand-notification
```

- Import NotificationProvier

import NotificationProvider in your app.js or index.js or \_app.js or \_app.tsx or other root files

```javascript
import { NotificationProvider } from "grand-notification"

...

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </>
    )
}
```

- useNotification & addNotification

import and use grand notification in any of your jsx or tsx files:

```javascript
import { useNotification } from "grand-notification";

export default function component() {
  const { addNotification } = useNotification();

  addNotification("hello world!", "success", 4000);

  addNotification("hello world!", "error", 4000);

  addNotification("hello world!", "info", 4000);
}
```

## Config

addNotification takes 3 params, messaage is what the text will be displayed on the notification, types are error, success, info which have different icons, displayTime is in ms, putting 3000 means this notification will display for 3 seconds.

```javascript
const addNotification: (message: string, type: "error" | "success" | "info", displayTime: number) => void
```

##
