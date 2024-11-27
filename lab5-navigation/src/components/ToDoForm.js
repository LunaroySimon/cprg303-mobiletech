/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


function ToDoForm({addTask, tasks}) {
    const [taskText, setTaskText] = React.useState('');

    const handleAddTask = () => { 
      if (taskText.length > 0 && !tasks.includes(taskText)) {
        addTask(taskText);
        setTaskText('');
      } else {
        alert('Task already exists or is empty');
      }
    }

  return (
    <View style={styles.form}>
      <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value = {taskText}
      />
      <Button title="Add Task" onPress={() => handleAddTask(taskText)}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
