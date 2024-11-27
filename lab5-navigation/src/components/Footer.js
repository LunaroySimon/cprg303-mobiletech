import React from 'react';
import { View, Text, Button } from 'react-native';

const Footer = ({children}) => {
  return (
    <View style={styles.footer}>
        {children}
    </View>
  );
};

const styles = {
  footer: {
    alignItems: 'center',
    width: '100%',
    outerHeight: 100, 
  },
};

export default Footer;
