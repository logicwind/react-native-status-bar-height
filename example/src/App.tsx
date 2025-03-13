import { Text, View } from 'react-native';
import { fetchStatusBarHeight } from '@logicwind/react-native-status-bar-height';

export default function App() {
  const height = fetchStatusBarHeight();

  return (
    <View style={{ marginTop: height }}>
      <Text>Status Bar Height: {height}</Text>
    </View>
  );
}
