import {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Button from '../ui/Buttons/Button';
import OperatorButton from '../ui/Buttons/OperatorButton';
import {initialState} from '../util/Calculator';

function NumberPad() {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberHandler(type, pressValue) {
    switch (pressValue) {
      case '1':
        setEnteredNumber(pressValue);
        break;
      case '2':
        setEnteredNumber(pressValue);
        break;
      case '3':
        setEnteredNumber(pressValue);
        break;
      case '4':
        setEnteredNumber(pressValue);
        break;
      case '5':
        setEnteredNumber(pressValue);
        break;
      case '6':
        setEnteredNumber(pressValue);
        break;
      case '7':
        setEnteredNumber(pressValue);
        break;
      case '8':
        setEnteredNumber(pressValue);
        break;
      case '9':
        setEnteredNumber(pressValue);
        break;
      case '0':
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
          style={styles.textInputStyle}
          label="Item Name"
          //keyboardType="email-address"
          onChange={enteredNumber}
          //isInvalid={emailIsInvalid}
          placeholder={enteredNumber}
          placeholderTextColor="#3a0606"
        />
      </View>
      <View>
        <View style={styles.buttonStyle}>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '0')}>
            {'C'}{' '}
          </OperatorButton>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '1')}>
            {'+/-'}{' '}
          </OperatorButton>
          <OperatorButton onPress={numberHandler.bind(this, 'operator', '%')}>
            {'%'}{' '}
          </OperatorButton>
          <OperatorButton onPress={() => this.HandleTap('operator', '/')}>
            {'/'}{' '}
          </OperatorButton>
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={numberHandler.bind(this, 'number', '1')}>
            {'1'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '2')}>
            {'2'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '3')}>
            {'3'}{' '}
          </Button>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '')}>
            {'X'}{' '}
          </OperatorButton>
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={numberHandler.bind(this, 'number', '4')}>
            {'4'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '5')}>
            {'5'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '6')}>
            {'6'}{' '}
          </Button>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '')}>
            {'-'}{' '}
          </OperatorButton>
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={numberHandler.bind(this, 'number', '7')}>
            {'7'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '8')}>
            {'8'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '9')}>
            {'9'}{' '}
          </Button>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '1')}>
            {'+'}{' '}
          </OperatorButton>
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={numberHandler.bind(this, 'number', '0')}>
            {'0'}{' '}
          </Button>
          <Button onPress={numberHandler.bind(this, 'number', '1')}>
            {'.'}{' '}
          </Button>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '1')}>
            {'='}{' '}
          </OperatorButton>
          <OperatorButton onPress={numberHandler.bind(this, 'number', '1')}>
            {'DEL'}{' '}
          </OperatorButton>
        </View>
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
  textInputStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    borderWidth: 0,
    marginTop: 250,
    marginLeft: 0,
    marginRight: 0,
    margin: 0,
    textAlign: 'right',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
