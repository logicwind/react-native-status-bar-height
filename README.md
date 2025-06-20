# @logicwind/react-native-status-bar-height

A simple and lightweight React Native package to get the **status bar height** and **bottom safe area inset** on both Android and iOS.

### Installation

Using npm:

```sh md title="Terminal"
npm install @logicwind/react-native-status-bar-height
```

or using yarn:

```sh md title="Terminal"
yarn add @logicwind/react-native-status-bar-height
```

### Expo Setup

If you're working with this Expo project, make sure to run:

```sh md title="Terminal"
npx expo prebuild
```

### iOS Setup

After installation, make sure to install CocoaPods:

```sh md title="Terminal"
cd ios && pod install
```

### Android Setup

No additional setup is required.

## Usage

Import and use the utility functions to fetch values:

```tsx md title="App.tsx"
import {
  fetchStatusBarHeight,
  fetchBottomInset,
} from '@logicwind/react-native-status-bar-height';

const statusBarHeight = fetchStatusBarHeight();
const bottomInset = fetchBottomInset();
```

## Example
```tsx md title="App.tsx"
<View style={{ flex: 1 }}>
  <Text style={{ marginTop: fetchStatusBarHeight() }}>
    Status Bar Height
  </Text>
  <View style={{ flex: 1 }} />
  <Text style={{ marginBottom: fetchBottomInset() }}>
    Bottom Safe Area
  </Text>
</View>
```

## API
`fetchStatusBarHeight(): number` - Returns the status bar height in pixels.

`fetchBottomInset(): number` - Returns the bottom safe area inset in pixels, helpful for avoiding overlap with gesture/navigation bars.

## How It Works

- On iOS, it retrieves values using native APIs or falls back to common values.

- On Android, it uses StatusBar.currentHeight for the status bar height, and WindowInsets for the bottom inset when available.

- A fallback mechanism is in place to provide reasonable defaults.

## react-native-status-bar-height is crafted mindfully at [Logicwind](https://www.logicwind.com?utm_source=github&utm_medium=github.com-logicwind&utm_campaign=react-native-status-bar-height)

We are a 130+ people company developing and designing multiplatform applications using the Lean & Agile methodology. To get more information on the solutions that would suit your needs, feel free to get in touch by [email](mailto:sales@logicwind.com) or through or [contact form](https://www.logicwind.com/contact-us?utm_source=github&utm_medium=github.com-logicwind&utm_campaign=react-native-status-bar-height)!

We will always answer you with pleasure 😁

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
