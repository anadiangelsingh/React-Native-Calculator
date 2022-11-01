import {Pressable, StyleSheet, Text, View} from 'react-native';

function OperatorButton({children, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default OperatorButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 25,
    paddingHorizontal: 12,
    height: 85,
    width: 85,
    backgroundColor: '#99580b',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: 3,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
