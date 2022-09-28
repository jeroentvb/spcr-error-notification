import React from 'react';
import ReactDOM from 'react-dom';

export function showErrorNotification(message: string, duration = 2500): void {
   const notificationContainer = document.querySelector('.main-notificationBubbleContainer-NotificationBubbleContainer') as HTMLDivElement;
   const notification = (
      <div
         style={{ opacity: 1, transition: 'opacity 0.5s' }}
         className="main-notificationBubble-NotificationBubble main-notificationBubble-isError main-notificationBubble-enter main-notificationBubble-enterActive"
         role="alert"
         aria-live="polite"
      >
         {message}
      </div>
   );

   ReactDOM.render(notification, notificationContainer);

   setTimeout(() => {
      (document.querySelector('.main-notificationBubble-isError') as HTMLDivElement).style.opacity = '0';

      setTimeout(() => {
         ReactDOM.render((<></>), notificationContainer);
      }, 500);
   }, duration);
}
