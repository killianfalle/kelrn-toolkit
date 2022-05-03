import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const boxShadowGray = {
  shadowColor: COLORS.shadowSecondary,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 10,
};

const InputStyles = StyleSheet.create({
  /* Bordered Input */
  inputContainer: {
    ...boxShadowGray,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginBottom: 14,
  },

  /* Shadowed Input */
  shadowContainer: hasErrors => ({
    ...boxShadowGray,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: hasErrors ? COLORS.danger : 'transparent',
  }),
  shadowInnerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },

  inputInnerLeftIcon: {
    opacity: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRightWidth: 1,
    borderRightColor: '#C4C4C4',
  },

  inputInnerRightIcon: {
    opacity: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderLeftWidth: 1,
    borderLeftColor: '#C4C4C4',
  },
  inputToggleIcon: {
    opacity: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    color: '#424242',
  },
});

export default InputStyles;
