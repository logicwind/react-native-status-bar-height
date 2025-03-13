# @logicwind/react-native-status-bar-height

A simple and lightweight React Native package to get the height of the status bar on both Android and iOS.

### Installation

Using npm:

```sh md title="Terminal"
npm install @logicwind/react-native-status-bar-height
```

or using yarn:

```sh md title="Terminal"
yarn add @logicwind/react-native-status-bar-height
```

### iOS Setup

After installation, make sure to install CocoaPods:

```sh md title="Terminal"
cd ios && pod install
```

### Android Setup

No additional setup is required.

## Usage

Import and use the `fetchStatusBarHeight` function to get the status bar height.

```tsx md title="App.tsx"
import { fetchStatusBarHeight } from '@logicwind/react-native-status-bar-height';

const statusBarHeight = fetchStatusBarHeight();
```

## How It Works

- On **iOS**, it attempts to fetch the status bar height using native modules. If unavailable, it falls back to predefined values based on screen dimensions.
- On **Android**, it retrieves `StatusBar.currentHeight`.

## react-native-status-bar-height is crafted mindfully at [Logicwind](https://www.logicwind.com?utm_source=github&utm_medium=github.com-logicwind&utm_campaign=react-native-status-bar-height)

We are a 130+ people company developing and designing multiplatform applications using the Lean & Agile methodology. To get more information on the solutions that would suit your needs, feel free to get in touch by [email](mailto:sales@logicwind.com) or through or [contact form](https://www.logicwind.com/book-call?utm_source=github&utm_medium=github.com-logicwind&utm_campaign=react-native-status-bar-height)!

We will always answer you with pleasure 😁

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
