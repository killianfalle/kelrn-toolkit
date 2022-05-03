import React, { useState } from 'react';
import { 
    View, 
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputStyles from '../../assets/styles/input/input-styles';

const Input = ({
    keyboardType, 
    icon,
    iconPosition,
    placeholder, 
    onSubmitEditing, 
    onChangeText, 
    secureTextEntry, 
    inputRef,
    value
}) => {
    const [showPassword, setShowPassword] = useState(false);
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
                secureTextEntry={secureTextEntry && !showPassword}
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
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Icon name={showPassword ? 'eye-off' : 'eye-outline'} size={16} color="#000"/>
                </TouchableOpacity>
            }
        </View>
    );
};


/**
 * Custom Input
 * @param {string} keyboardType         : The keyboardType for textinput's keyboard             (OPTIONAL)
 * @param {string} onChangeText         : Returns the state when input changes                  (OPTIONAL)
 * @param {object} icon                 : Inner icon for the input field                        (OPTIONAL)
 * @param {string} iconPosition         : ["left" or "right"] position for icon                 (Default: Left)
 * @param {action} onSubmitEditing      : Triggered when you click the text input submit button (keyboard button)(OPTIONAL)
 * @param {boolean} secureTextEntry     : If true, the text input obscures the text entered so that sensitive text like passwords stay secure
 */
Input.propTypes = {
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    inputRef: PropTypes.object,
    icon: PropTypes.object,
    iconPosition: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func
  };
  
  Input.defaultProps = {
    value: "",
    keyboardType: "",
    placeholder: "",
    inputRef: null,
    icon: null,
    iconPosition: "left",
    secureTextEntry: false,
    onChangeText: () => {},
    onSubmitEditing: () => {}
  };
  
  export default Input;