# Error notification
Spicetify creator plugin to show error notifications. They're the normal popup notifications, but in red.

![spcr-error-notification](docs/spcr-error-notification.png)

## Installation
```sh
npm install spcr-error-notification
```

## Usage
```tsx
import { showErrorNotification } from 'spcr-error-notification';

showErrorNotification('Something went wrong');

// Alternatively, specify a duration in ms (default is 2500)
showErrorNotification('Something went wrong', 5000);
```
