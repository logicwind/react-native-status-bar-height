import { Dimensions, NativeModules, Platform, StatusBar } from 'react-native';

const LINKING_ERROR =
  `The package '@logicwind/react-native-status-bar-height' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeStatusBarHeight = NativeModules.ReactNativeStatusBarHeight
  ? NativeModules.ReactNativeStatusBarHeight
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// Constants for iPhone status bar heights
const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 49;
const STATUSBAR_IP15_HEIGHT = 50;
const STATUSBAR_IP16_HEIGHT = 52;
const STATUSBAR_IPAD_HEIGHT = 24;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

const getFallbackStatusBarHeight = (): number => {
  // iPhone X, XS, 11 Pro, 12 mini, 13 mini
  if (W_WIDTH === 375 && W_HEIGHT === 812) return STATUSBAR_X_HEIGHT;
  // iPhone XS Max, XR, 11, 11 Pro Max
  if (W_WIDTH === 414 && W_HEIGHT === 896) return STATUSBAR_X_HEIGHT;
  // iPhone 12, 12 Pro, 13, 13 Pro, 14
  if (W_WIDTH === 390 && W_HEIGHT === 844) return STATUSBAR_IP12_HEIGHT;
  // iPhone 12 Pro Max, 13 Pro Max, 14 Plus
  if (W_WIDTH === 428 && W_HEIGHT === 926) return STATUSBAR_IP12_HEIGHT;
  // iPhone 14 Pro
  if (W_WIDTH === 393 && W_HEIGHT === 852) return STATUSBAR_IP14PRO_HEIGHT;
  // iPhone 14 Pro Max, 15 Plus
  if (W_WIDTH === 430 && W_HEIGHT === 932) return STATUSBAR_IP14PRO_HEIGHT;
  // iPhone 15, 15 Pro
  if (W_WIDTH === 393 && W_HEIGHT === 852) return STATUSBAR_IP15_HEIGHT;
  // iPhone 15 Pro Max, 16 Plus
  if (W_WIDTH === 430 && W_HEIGHT === 932) return STATUSBAR_IP15_HEIGHT;
  // iPhone 16, 16 Pro
  if (W_WIDTH === 396 && W_HEIGHT === 860) return STATUSBAR_IP16_HEIGHT;
  // iPhone 16 Pro Max
  if (W_WIDTH === 432 && W_HEIGHT === 940) return STATUSBAR_IP16_HEIGHT;
  // iPads (general fallback)
  if (Platform.OS === 'ios' && Platform.isPad) return STATUSBAR_IPAD_HEIGHT;

  return STATUSBAR_DEFAULT_HEIGHT;
};

export const fetchStatusBarHeight = (): number => {
  if (Platform.OS === 'ios' && !Platform.isTV) {
    try {
      if (ReactNativeStatusBarHeight.STATUS_BAR_HEIGHT !== 0) {
        return ReactNativeStatusBarHeight.STATUS_BAR_HEIGHT;
      }

      return getFallbackStatusBarHeight();
    } catch {
      return getFallbackStatusBarHeight();
    }
  }

  return StatusBar.currentHeight ?? 0;
};
