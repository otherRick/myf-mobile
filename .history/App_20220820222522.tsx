import { Input } from './src/components';
import { View } from 'react-native';
import { useState } from 'react';
import { Password } from './src/views/Register/Password';
import { VerifyEmail } from './src/views/Register/VerifyEmail';

export default () => {
  const [state, setState] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <VerifyEmail />
    </View>
  );
};