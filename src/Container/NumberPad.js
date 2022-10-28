import {View, StyleSheet} from 'react-native';
import Button from '../ui/Buttons/Button';

function NumberPad() {
  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button>{'C'} </Button>
        <Button>{'+/-'} </Button>
        <Button>{'%'} </Button>
        <Button>{'/'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button>{'1'} </Button>
        <Button>{'2'} </Button>
        <Button>{'3'} </Button>
        <Button>{'X'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button>{'4'} </Button>
        <Button>{'5'} </Button>
        <Button>{'6'} </Button>
        <Button>{'-'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button>{'7'} </Button>
        <Button>{'8'} </Button>
        <Button>{'9'} </Button>
        <Button>{'+'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button>{'0'} </Button>
        <Button>{'.'} </Button>
        <Button>{'='} </Button>
      </View>
    </View>
  );
}

export default NumberPad;

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    padding: 3,
  },
  abc: {
    z: '#adcb25ff',
  },
});
