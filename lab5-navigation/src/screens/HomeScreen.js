import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Footer from '../components/Footer';

const HomeScreen = ({navigation}) => {
    const [tasks, setTasks] = useState([ 'Do laundry', 'Go to gym', 'Walk dog' ]);

    const addTask = (taskText) => { 
      setTasks([taskText, ...tasks]);
    };
    
    return (
      <MainLayout>
        <SafeAreaView style={{flex:1}}>
          <ToDoForm addTask={addTask} tasks={tasks}/>
          <ToDoList tasks={tasks}/>  
        </SafeAreaView>
        <Footer>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </Footer>
      </MainLayout>
    );
}

export default HomeScreen