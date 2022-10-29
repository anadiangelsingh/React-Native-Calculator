import {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Button from '../ui/Buttons/Button';
import {initialState} from '../util/Calculator';

function NumberPad() {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberHandler(type, pressValue) {
    switch (pressValue) {
      case '1':
        setEnteredNumber(pressValue);
        break;
      case '%':
        setEnteredNumber(pressValue);
    }

    console.log(enteredNumber);
  }

  return (
    <View>
      <View>
        <TextInput
          label="Item Name"
          //keyboardType="email-address"
          onChange={enteredNumber}
          //isInvalid={emailIsInvalid}
          placeholder={enteredNumber}
          placeholderTextColor="#020101"
        />
      </View>
      <View></View>
      <View style={styles.buttonStyle}>
        <Button onPress={numberHandler.bind(this, '1')}>{'C'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'+/-'} </Button>
        <Button onPress={numberHandler.bind(this, 'operator', '%')}>
          {'%'}{' '}
        </Button>
        <Button onPress={() => this.HandleTap('operator', '/')}>{'/'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={numberHandler.bind(this, 'number', '1')}>
          {'1'}{' '}
        </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'2'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'3'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'X'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={numberHandler.bind(this, '1')}>{'4'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'5'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'6'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'-'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={numberHandler.bind(this, '1')}>{'7'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'8'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'9'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'+'} </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={numberHandler.bind(this, '1')}>{'0'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'.'} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'='} </Button>
        <Button onPress={numberHandler.bind(this, '1')}>{'DEL'} </Button>
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
