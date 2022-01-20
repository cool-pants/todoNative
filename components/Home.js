import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task from './Task.js';

const TodoList = ({ navigation }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* Where all tasks will go */}
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Task', { task: item }) }>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behaviour = {Platform.OS== "ios"?"padding":"height"}
        style = {styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Create a task'} value={task}  onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32344A',
  },
  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    color: '#9699A8',
    fontWeight: 'bold', 
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    padding: 20,
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#D9FCFB',
    borderRadius: 60,
    borderColor: '#ACB0D0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#D9FCFB',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ACB0D0',
    borderWidth: 1,
  },
  addText: {},
});

export default TodoList;
