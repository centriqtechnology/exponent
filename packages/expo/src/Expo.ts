import './Expo.fx';

import * as AR from './AR';
import * as ErrorRecovery from './ErrorRecovery/ErrorRecovery';
import * as Logs from './logs/Logs';
import * as ScreenOrientation from './ScreenOrientation/ScreenOrientation';
import * as StoreReview from './StoreReview/StoreReview';
import * as Updates from './Updates/Updates';
import * as SplashScreen from './launch/SplashScreen';

export { AR };
export { ErrorRecovery };
export { Logs };
export { ScreenOrientation };
export { SplashScreen };
export { StoreReview };
export { Updates };

export { default as apisAreAvailable } from './apisAreAvailable';
export { default as AppLoading } from './launch/AppLoading';
export { default as AuthSession } from './AuthSession';
export { default as DangerZone } from './DangerZone';
export { default as Linking } from './Linking/Linking';
export { default as Notifications } from './Notifications/Notifications';
export { default as Pedometer } from './Pedometer';
export { default as registerRootComponent } from './launch/registerRootComponent';

declare var module: any;

if (module && module.exports) {
  if (global) {
    const globals = require('./globals');

    // @ts-ignore
    global.__exponent = globals;
    // @ts-ignore
    global.__expo = globals;
    // @ts-ignore
    global.Expo = globals;
  }
}
