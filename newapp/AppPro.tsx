import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from "react-native";

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello World!!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center' 
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 24 
  },
  blackText: {
    color: '#000000',
    fontSize: 24
  }
});

export default AppPro;