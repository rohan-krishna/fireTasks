import React, { Component } from 'react';
// import { mapping, light as lightTheme } from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text, Button } from 'react-native-ui-kitten';
import { Provider as PaperProvider } from 'react-native-paper';
import { TodoList } from '../components/TodoList';
import HeaderBar from '../components/HeaderBar';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import FooterButton from '../components/FooterButton';

class HomeScreen extends Component 
{

    static navigationOptions = {
        title: "Fire Tasks"
    }
  constructor() {
    super();

    this.state = {
      tasks : [],
      ref: null,
      loading: true
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    // const ref = firestore().collection('tasks');
    console.log("Hello!");

    const ref = firestore().collection("tasks");
    
    ref.onSnapshot((querySnapshot) => {
      
      let list = [];
      
      // console.log(querySnapshot)

      if(querySnapshot.empty) {
        this.setState({ tasks: list, loading: false });
      }
      
      querySnapshot.forEach(doc => {
        
        const { date, completed, tasks_completed, tasks_scheduled, overall_efficiency } = doc.data();
        
        // console.log(doc)

        list.push({
          id: doc.id,
          date,
          completed,
          tasks_completed,
          tasks_scheduled,
          overall_efficiency
        });

        console.log(list);
        
        this.setState({ tasks: list, loading: false });

      });
    });

    this.setState({ ref });
    
  }
  
  addNewRecord = async (record) => {
    console.log("Hit")
    
    await this.state.ref.add({
      date: record.date,
      tasks_scheduled: record.tasks_scheduled,
      tasks_completed: record.tasks_completed,
      overall_efficiency: record.overall_efficiency,
      completed: true 
    });

    this.props.navigation.navigate('Home');
  }

  deleteTask = (taskID) => {
    console.log(taskID, "<<< APP.js");
  }

  gotoNewTask = () => {
      this.props.navigation.navigate('NewTask', { addNewRecord: this.addNewRecord });
  }

  render() {

    return (
      <PaperProvider>
        {/* <HeaderBar /> */}
        <TodoList loading={this.state.loading} tasks={this.state.tasks} refState={this.state.ref} />
        <FooterButton gotoNewTask={this.gotoNewTask} />
      </PaperProvider>
    );
  }
}

export default HomeScreen;