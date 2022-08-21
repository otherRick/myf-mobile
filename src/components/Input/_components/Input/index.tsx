import { useState, useEffect, forwardRef, Ref } from 'react';
import { TextInput, View } from 'react-native';
import MaskInput from 'react-native-mask-input';

import { inputStyles, styles } from './styles';

import { Colors } from '../../../../constants';
import { width } from '../../../../constants/Responsive';
import { Text, Spacer } from '../../../';
import { IInputProps } from './types';
import { Icon } from 'react-native-eva-icons';

export const Input = forwardRef(
  (
    { mask, errorMessage, passwordMode, suffixIcon, ...rest }: IInputProps,
    ref: Ref<TextInput>,
  ) => {
    const [eyeIconVisibility, setEyeIconVisibility] = useState(false);

    useEffect(() => {
      passwordMode && setEyeIconVisibility(true);
    }, [passwordMode, setEyeIconVisibility]);

    const toggleVisibility = () => {
      setEyeIconVisibility(!eyeIconVisibility);
    };

    return (
      <View>
        <View style={styles.inputContainer}>
          <MaskInput
            ref={ref}
            style={inputStyles()}
            value=""
            numberOfLines={1}
            placeholderTextColor={Colors.white}
            secureTextEntry={eyeIconVisibility}
            mask={mask}
            autoFocus
            {...rest}
          />
          {suffixIcon && suffixIcon}
          {passwordMode &&
            (eyeIconVisibility ? (
              <Icon
                fill="white"
                onPress={toggleVisibility}
                name="eye"
                width={width(10)}
                height={width(6)}
              />
            ) : (
              <Icon
                width={width(10)}
                height={width(6)}
                fill="white"
                name="eye-off"
                onPress={toggleVisibility}
                animation="zoom"
              />
            ))}
        </View>
        {errorMessage ? (
          <>
            <Spacer amount={2} />
            <Text color="red" typography="headline">
              {errorMessage}
            </Text>
          </>
        ) : null}
      </View>
    );
  },
);
