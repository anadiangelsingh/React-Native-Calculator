import {View, Text, StyleSheet} from 'react-native';
import NumberPad from './src/Container/NumberPad';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <View style={styles.textBox}>
        <Text>'RN_ Calculator'</Text>
      </View>
      <View style={styles.textBox1}>
        <NumberPad />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#463f3f',
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
