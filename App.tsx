import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder={'Course Goal'} style={{borderColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title={'ADD'} onPress={() => ''}/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
