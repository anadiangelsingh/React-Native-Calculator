import {View, Text, StyleSheet} from 'react-native';
import NumberPad from './src/Container/NumberPad';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#fcf6cf', '#ff886a']} style={styles.rootScreen}>
      <View>
        <NumberPad />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#8d8585',
  },
  backgroundImage: {
    opacity: 0.7,
  },
  textBox: {
    flex: 1,
  },
  textBox1: {
    flex: 2,
  },
});
