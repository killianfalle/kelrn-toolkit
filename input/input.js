import PropTypes from 'prop-types';
import React from 'react';
import { 
    View, 
    TextInput,
    TouchableOpacity
} from 'react-native';
import InputStyles from '../assets/styles/input/input-styles';

const Input = ({
    keyboardType,
    secureIcon,
    icon,
    iconPosition,
    placeholder, 
    onSubmitEditing, 
    onChangeText, 
    secureTextEntry,
    showInput,
    setShowInput,
    inputRef,
    value
}) => {
    const handleChangeText = (value) => onChangeText(value);

    return (
        <View style={InputStyles.inputContainer}>
            {/* Icon (left) */}
            {(icon && iconPosition === "left") && (
                <View style={InputStyles.inputInnerLeftIcon} >
                    {icon}
                </View>
            )}
            <TextInput
                ref={inputRef}
                value={value}
                secureTextEntry={secureTextEntry && !showInput}
                keyboardType={keyboardType}
                style={InputStyles.input}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                underlineColorAndroid="transparent"
                onSubmitEditing={onSubmitEditing}
                autoCapitalize={"none"}
            />
            {/* Icon (right) */}
            {(icon && iconPosition === "right" && !secureTextEntry) && (
                <View style={InputStyles.inputInnerRightIcon} >
                    {icon}
                </View>
            )}

            {secureTextEntry && 
                <TouchableOpacity
                    style={InputStyles.inputToggleIcon}
                    onPress={() => setShowInput(!showInput)}
                >
                    {secureIcon}
                </TouchableOpacity>
            }
        </View>
    );
};

/**
 * Custom Input
 * @param {string} keyboardType         : The keyboardType for textinput's keyboard             (OPTIONAL)
 * @param {object} icon                 : Inner icon for the input field                        (OPTIONAL)
 * @param {object} secureIcon           : Inner icon for the secured input field                (OPTIONAL)
 * @param {string} iconPosition         : ["left" or "right"] position for icon                 (Default: "left")
 * @param {boolean} secureTextEntry     : If true, the text input obscures the text entered so that sensitive text like passwords stay secure
 * @param {boolean} showInput           : Boolean if to show input value or not                 (Default: false)
 * @param {action} onChangeText         : Returns the state when input changes                  (OPTIONAL)
 * @param {action} onSubmitEditing      : Triggered when you click the text input submit button (keyboard button)(OPTIONAL)
 * @param {action} setShowInput         : Returns boolean when pressing the secure buttion      (OPTIONAL)
 * 
 */
Input.propTypes = {
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    inputRef: PropTypes.object,
    icon: PropTypes.object,
    secureIcon: PropTypes.object,
    iconPosition: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    showInput: PropTypes.bool,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    setShowInput: PropTypes.func
  };
  
  Input.defaultProps = {
    value: "",
    keyboardType: "",
    placeholder: "",
    inputRef: null,
    icon: null,
    secureIcon: null,
    iconPosition: "left",
    secureTextEntry: false,
    showInput: false,
    onChangeText: () => {},
    onSubmitEditing: () => {},
    setShowInput: () => {}
  };
  
  export default Input;