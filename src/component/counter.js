import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import {incNum , decNum} from '../redux/actions/index';
const Counter = () => {
    const changeState = useSelector((state) => state.changeNum);
    const dispatch = useDispatch();
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20}}> Test for Counter App using Redux.</Text>
        <View style ={styles.content}>
            <Button title="+" onPress={() => dispatch(incNum()) }/>

            <TextInput 
                style= {{textAlign: 'center', marginVertical: 30, fontSize: 24}}
                value= {changeState}
            />
            
            <Button title="-"  onPress={() => dispatch(decNum()) }/>
        </View>
        
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  content: {
      margin: 20,
      padding: 30,
  }
});