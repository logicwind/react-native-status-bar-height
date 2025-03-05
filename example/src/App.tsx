import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { fetchStatusBarHeight } from '@logicwind/react-native-status-bar-height';

export default function App() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    fetchStatusBarHeight().then((statusBarHeight) => {
      setHeight(statusBarHeight);
    });
  }, []);

  return (
    <View style={{ marginTop: height }}>
      <Text>Status Bar Height: {height}</Text>
    </View>
  );
}
