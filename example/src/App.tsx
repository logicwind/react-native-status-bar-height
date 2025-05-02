import { View, Text, StyleSheet } from 'react-native';
import {
  fetchBottomInset,
  fetchStatusBarHeight,
} from '@logicwind/react-native-status-bar-height';

const App = () => {
  const statusBarHeight = fetchStatusBarHeight();
  const bottomInset = fetchBottomInset();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: statusBarHeight }]}>
        <Text style={styles.label}>Status Bar Height: {statusBarHeight}px</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the App</Text>
      </View>

      <View style={[styles.footer, { marginBottom: bottomInset }]}>
        <Text style={styles.label}>Bottom Inset: {bottomInset}px</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B7BE5',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;
