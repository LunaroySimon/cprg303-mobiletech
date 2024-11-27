/**
 * My To Do List App
 *
 * @format
 */

import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([ 'Do laundry', 'Go to gym', 'Walk dog' ]);

  const addTask = (taskText) => { 
    setTasks([...tasks, taskText]);
  };
  
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} tasks={tasks}/>
    </SafeAreaView>
  );
}

export default App;
